(function(){
  var state = {
    chunks: null,
    documents: null,
    graph: null,
    neighbors: null,
  };

  var input = document.getElementById('question');
  var askBtn = document.getElementById('ask-btn');
  var status = document.getElementById('status');
  var answerMeta = document.getElementById('answer-meta');
  var answerText = document.getElementById('answer-text');
  var citeList = document.getElementById('cite-list');

  if(!input || !askBtn) return;

  document.querySelectorAll('.example-chip').forEach(function(btn){
    btn.addEventListener('click', function(){
      input.value = btn.getAttribute('data-q');
      input.focus();
    });
  });

  askBtn.addEventListener('click', ask);
  input.addEventListener('keydown', function(e){
    if((e.ctrlKey || e.metaKey) && e.key === 'Enter') ask();
  });

  async function ask(){
    var question = input.value.trim();
    if(question.length < 2){
      setStatus('请输入更具体的问题。', 'error');
      return;
    }

    setStatus('正在检索知识库…', 'loading');
    askBtn.disabled = true;

    try{
      var data = await askViaApi(question);
      renderAnswer(data);
      setStatus(data.mode === 'llm' ? '已通过服务端模型生成回答。' : '已返回回答。', 'loading');
      return;
    }catch(apiError){
      try{
        setStatus('服务端不可用，正在切换到浏览器本地检索…', 'loading');
        var localData = await askLocally(question);
        renderAnswer(localData);
        setStatus('已切换到浏览器本地检索模式。', 'loading');
        return;
      }catch(localError){
        setStatus(localError.message || apiError.message || '请求失败', 'error');
      }
    }finally{
      askBtn.disabled = false;
    }
  }

  async function askViaApi(question){
    var res = await fetch('/api/ask', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({question: question})
    });
    var data = await res.json();
    if(!res.ok) throw new Error(data.error || '请求失败');
    return data;
  }

  async function askLocally(question){
    if(location.protocol === 'file:'){
      throw new Error('当前是 file:// 直接打开模式，浏览器通常会拦截本地 JSON 读取。请用本地静态服务器打开，或继续使用 Node 原型服务。');
    }

    await ensureLocalIndexes();

    var retrieved = retrieve(question, 8);
    if(!retrieved.length){
      return {
        question: question,
        mode: 'browser-local',
        answer: '知识库里没有找到足够相关的内容。可以换更具体的问法，比如加入概念名、公司名或年份。',
        citations: [],
      };
    }

    var citations = retrieved.map(function(item, index){
      return {
        rank: index + 1,
        title: item.chunk.title,
        path: item.chunk.path,
        url: item.chunk.url,
        type: item.chunk.type,
        year: item.chunk.year,
        score: Math.round(item.score * 100) / 100,
        excerpt: item.chunk.text,
      };
    });

    var top = citations.slice(0, 3);
    var body = top.map(function(item, index){
      var snippet = item.excerpt.slice(0, 220).trim();
      return (index + 1) + '. ' + item.title + '：' + snippet + (item.excerpt.length > 220 ? '…' : '');
    }).join('\n');

    return {
      question: question,
      mode: 'browser-local',
      answer: '当前是浏览器本地检索模式，先给你一个抽取式回答：\n' + body + '\n如果你要更像 AI 助手的总结风格，再启动本地服务或接入外部模型即可。',
      citations: citations,
    };
  }

  async function ensureLocalIndexes(){
    if(state.chunks && state.documents && state.graph) return;

    var loaded = await Promise.all([
      fetchJson('ai-index/chunks.json'),
      fetchJson('ai-index/documents.json'),
      fetchJson('ai-index/graph.json'),
    ]);

    state.chunks = loaded[0];
    state.documents = loaded[1];
    state.graph = loaded[2];
    state.neighbors = buildNeighborMap(state.graph.edges || []);
  }

  async function fetchJson(url){
    var res = await fetch(url, {cache: 'no-store'});
    if(!res.ok) throw new Error('无法加载 ' + url);
    return res.json();
  }

  function retrieve(question, limit){
    var terms = buildTerms(question);
    var boostedTitles = findMentionedTitles(question);
    var boostedDocs = new Set(boostedTitles);

    boostedTitles.forEach(function(title){
      var neighbors = state.neighbors.get(title);
      if(!neighbors) return;
      neighbors.forEach(function(neighbor){ boostedDocs.add(neighbor); });
    });

    var scored = [];
    state.chunks.forEach(function(chunk){
      var score = scoreChunk(chunk, question, terms, boostedDocs);
      if(score > 0) scored.push({chunk: chunk, score: score});
    });

    scored.sort(function(a, b){ return b.score - a.score; });
    return scored.slice(0, limit);
  }

  function scoreChunk(chunk, question, terms, boostedDocs){
    var text = (chunk.text || '').toLowerCase();
    var title = (chunk.title || '').toLowerCase();
    var sectionText = (chunk.sectionHints || []).join(' ').toLowerCase();
    var lowerQuestion = question.toLowerCase();
    var score = 0;

    terms.forEach(function(term){
      var lowerTerm = term.toLowerCase();
      score += countOccurrences(title, lowerTerm) * 8;
      score += countOccurrences(sectionText, lowerTerm) * 5;
      score += countOccurrences(text, lowerTerm) * (lowerTerm.length >= 4 ? 2.5 : 1.4);
    });

    if(title.indexOf(lowerQuestion) >= 0) score += 18;
    if(text.indexOf(lowerQuestion) >= 0) score += 10;
    if(boostedDocs.has(chunk.title)) score += 6;
    if(chunk.type === '概念' && /什么|含义|定义|概念/.test(question)) score += 4;
    if((chunk.type === '股东信' || chunk.type === '合伙人信') && /哪年|何时|什么时候|时间线|演变/.test(question)) score += 4;

    return score;
  }

  function findMentionedTitles(question){
    var hits = [];
    state.documents.forEach(function(doc){
      if(question.indexOf(doc.title) >= 0) hits.push(doc.title);
      else if(doc.englishName && question.toLowerCase().indexOf(doc.englishName.toLowerCase()) >= 0) hits.push(doc.title);
    });
    return hits;
  }

  function buildNeighborMap(edges){
    var map = new Map();
    edges.forEach(function(edge){
      pushNeighbor(map, edge.source, edge.target);
      pushNeighbor(map, edge.target, edge.source);
    });
    return map;
  }

  function pushNeighbor(map, key, value){
    if(!map.has(key)) map.set(key, new Set());
    map.get(key).add(value);
  }

  function buildTerms(question){
    var normalized = normalizeText(question.toLowerCase());
    var englishTerms = normalized.match(/[a-z0-9]{2,}/g) || [];
    var cjkTerms = [];
    var match;

    var re = /[\u4e00-\u9fff]{2,}/g;
    while((match = re.exec(normalized))){
      var segment = match[0];
      cjkTerms.push(segment);
      if(segment.length <= 4) continue;
      for(var i = 0; i < segment.length - 1; i++){
        cjkTerms.push(segment.slice(i, i + 2));
      }
    }

    return dedupe([
      normalized,
      normalized.replace(/[？?。！，、；：]/g, ''),
    ].concat(normalized.split(/\s+/), englishTerms, cjkTerms).filter(function(item){
      return item && item.length >= 2;
    }));
  }

  function countOccurrences(text, term){
    if(!term) return 0;
    var count = 0;
    var index = 0;
    while(true){
      var found = text.indexOf(term, index);
      if(found === -1) break;
      count += 1;
      index = found + term.length;
    }
    return count;
  }

  function renderAnswer(data){
    answerMeta.innerHTML =
      '<span class="answer-badge">模式：' + esc(data.mode) + '</span>' +
      '<span class="answer-badge">引用：' + data.citations.length + ' 条</span>';
    answerText.textContent = data.answer;

    if(!data.citations.length){
      citeList.innerHTML = '<div class="cite-item"><div class="cite-excerpt">没有找到引用。</div></div>';
      return;
    }

    citeList.innerHTML = data.citations.map(function(item){
      return '<div class="cite-item">' +
        '<div class="cite-top">' +
          '<a href="' + escAttr(item.path) + '" target="_blank" rel="noopener">' + esc(item.title) + '</a>' +
          '<div class="cite-meta">' + esc(item.type) + (item.year ? ' · ' + item.year : '') + ' · score ' + item.score + '</div>' +
        '</div>' +
        '<div class="cite-excerpt">' + esc(item.excerpt) + '</div>' +
      '</div>';
    }).join('');
  }

  function setStatus(message, type){
    status.className = 'status show ' + (type || 'loading');
    status.textContent = message;
  }

  function normalizeText(text){
    return String(text || '').replace(/\s+/g, ' ').trim();
  }

  function dedupe(values){
    return Array.from(new Set(values));
  }

  function esc(s){
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function escAttr(s){
    return String(s).replace(/"/g,'&quot;');
  }
})();
