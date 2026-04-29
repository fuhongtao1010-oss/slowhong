#!/usr/bin/env node

import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createReadStream } from 'node:fs';

const ROOT = process.cwd();
const PORT = readPort(process.argv.slice(2), process.env.PORT || '3080');
const HOST = process.env.HOST || '127.0.0.1';
const INDEX_DIR = path.join(ROOT, 'ai-index');
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.txt': 'text/plain; charset=utf-8',
};

const state = {
  documents: [],
  chunks: [],
  graph: { nodes: [], edges: [] },
  neighbors: new Map(),
};

await loadIndexes();

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

    if (req.method === 'GET' && url.pathname === '/api/health') {
      return json(res, 200, {
        ok: true,
        documents: state.documents.length,
        chunks: state.chunks.length,
        llmEnabled: Boolean(process.env.AI_API_KEY || process.env.OPENAI_API_KEY),
      });
    }

    if (req.method === 'POST' && url.pathname === '/api/ask') {
      const payload = await readJsonBody(req);
      return handleAsk(payload, res);
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return json(res, 405, { error: 'Method not allowed' });
    }

    return serveStatic(url.pathname, res, req.method === 'HEAD');
  } catch (error) {
    console.error(error);
    return json(res, 500, { error: 'Internal server error' });
  }
});

server.listen(PORT, HOST, () => {
  console.log(JSON.stringify({
    url: `http://${HOST}:${PORT}/ai.html`,
    documents: state.documents.length,
    chunks: state.chunks.length,
    llmEnabled: Boolean(process.env.AI_API_KEY || process.env.OPENAI_API_KEY),
  }, null, 2));
});

async function loadIndexes() {
  const [documents, chunks, graph] = await Promise.all([
    readJson(path.join(INDEX_DIR, 'documents.json')),
    readJson(path.join(INDEX_DIR, 'chunks.json')),
    readJson(path.join(INDEX_DIR, 'graph.json')),
  ]);

  state.documents = documents;
  state.chunks = chunks;
  state.graph = graph;
  state.neighbors = buildNeighborMap(graph.edges);
}

async function handleAsk(payload, res) {
  const question = normalizeText(String(payload?.question || ''));
  if (!question || question.length < 2) {
    return json(res, 400, { error: 'Question is required' });
  }

  const retrieved = retrieve(question, 8);
  const citations = retrieved.map((item, index) => ({
    rank: index + 1,
    title: item.chunk.title,
    path: item.chunk.path,
    url: item.chunk.url,
    type: item.chunk.type,
    year: item.chunk.year,
    score: Math.round(item.score * 100) / 100,
    excerpt: item.chunk.text,
  }));

  const answer = await generateAnswer(question, citations);
  return json(res, 200, {
    question,
    mode: answer.mode,
    answer: answer.text,
    citations,
    debug: {
      terms: answer.terms,
      llmEnabled: answer.mode === 'llm',
    },
  });
}

function retrieve(question, limit) {
  const terms = buildTerms(question);
  const boostedTitles = findMentionedTitles(question);
  const boostedDocs = new Set(boostedTitles);
  for (const title of boostedTitles) {
    for (const neighbor of state.neighbors.get(title) || []) boostedDocs.add(neighbor);
  }

  const scored = [];
  for (const chunk of state.chunks) {
    const score = scoreChunk(chunk, question, terms, boostedDocs);
    if (score <= 0) continue;
    scored.push({ chunk, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}

function scoreChunk(chunk, question, terms, boostedDocs) {
  const text = chunk.text.toLowerCase();
  const title = chunk.title.toLowerCase();
  const sectionText = chunk.sectionHints.join(' ').toLowerCase();
  let score = 0;

  for (const term of terms) {
    const lowerTerm = term.toLowerCase();
    score += countOccurrences(title, lowerTerm) * 8;
    score += countOccurrences(sectionText, lowerTerm) * 5;
    score += countOccurrences(text, lowerTerm) * (lowerTerm.length >= 4 ? 2.5 : 1.4);
  }

  if (title.includes(question.toLowerCase())) score += 18;
  if (text.includes(question.toLowerCase())) score += 10;
  if (boostedDocs.has(chunk.title)) score += 6;
  if (chunk.type === '概念' && /什么|含义|定义|概念/.test(question)) score += 4;
  if ((chunk.type === '股东信' || chunk.type === '合伙人信') && /哪年|何时|什么时候|时间线|演变/.test(question)) score += 4;

  return score;
}

async function generateAnswer(question, citations) {
  const terms = buildTerms(question);

  if (citations.length === 0) {
    return {
      mode: 'fallback',
      terms,
      text: '知识库里没有找到足够相关的内容。可以换更具体的问法，比如加入概念名、公司名或年份。',
    };
  }

  if (hasLlmConfig()) {
    try {
      const text = await callLlm(question, citations);
      return { mode: 'llm', terms, text };
    } catch (error) {
      console.error('LLM call failed, falling back to extractive mode:', error);
    }
  }

  const top = citations.slice(0, 3);
  const intro = `基于知识库里最相关的 ${top.length} 处内容，我先给出一个提炼版回答：`;
  const body = top.map((item, index) => {
    const snippet = item.excerpt.slice(0, 220).trim();
    return `${index + 1}. ${item.title}：${snippet}${item.excerpt.length > 220 ? '…' : ''}`;
  }).join('\n');
  const close = '当前是抽取式回答模式，没有经过大模型总结，但引用已经按相关度排好了。';

  return {
    mode: 'fallback',
    terms,
    text: `${intro}\n${body}\n${close}`,
  };
}

async function callLlm(question, citations) {
  const apiKey = process.env.AI_API_KEY || process.env.OPENAI_API_KEY;
  const baseUrl = (process.env.AI_BASE_URL || process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '');
  const model = process.env.AI_MODEL || process.env.OPENAI_MODEL || 'gpt-4.1-mini';
  const context = citations.slice(0, 6).map((item, index) => (
    `[资料 ${index + 1}] ${item.title} | ${item.type} | ${item.path}\n${item.excerpt}`
  )).join('\n\n');

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        {
          role: 'system',
          content: '你是巴菲特知识库助手。只能依据给定资料回答。不要编造资料中不存在的事实。先直接回答，再尽量点出年份或概念脉络。不要输出 markdown 标题。',
        },
        {
          role: 'user',
          content: `问题：${question}\n\n资料：\n${context}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`LLM request failed: ${response.status} ${body}`);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error('LLM returned empty content');
  return text;
}

function buildTerms(question) {
  const normalized = normalizeText(question.toLowerCase());
  const englishTerms = normalized.match(/[a-z0-9]{2,}/g) || [];
  const cjkTerms = [];

  for (const match of normalized.matchAll(/[\u4e00-\u9fff]{2,}/g)) {
    const segment = match[0];
    cjkTerms.push(segment);
    if (segment.length <= 4) continue;
    for (let i = 0; i < segment.length - 1; i += 1) {
      cjkTerms.push(segment.slice(i, i + 2));
    }
  }

  return dedupeStrings([
    ...normalized.split(/\s+/),
    ...englishTerms,
    ...cjkTerms,
  ].filter((item) => item && item.length >= 2));
}

function findMentionedTitles(question) {
  const hits = [];
  for (const doc of state.documents) {
    if (question.includes(doc.title)) hits.push(doc.title);
    else if (doc.englishName && question.toLowerCase().includes(doc.englishName.toLowerCase())) hits.push(doc.title);
  }
  return hits;
}

function buildNeighborMap(edges) {
  const map = new Map();
  for (const edge of edges) {
    pushNeighbor(map, edge.source, edge.target);
    pushNeighbor(map, edge.target, edge.source);
  }
  return map;
}

function pushNeighbor(map, key, value) {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(value);
}

async function serveStatic(urlPath, res, headOnly) {
  const pathname = decodeURIComponent(urlPath === '/' ? '/index.html' : urlPath);
  const normalized = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(ROOT, normalized);

  if (!filePath.startsWith(ROOT)) {
    return json(res, 403, { error: 'Forbidden' });
  }

  try {
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      return json(res, 403, { error: 'Directory listing is disabled' });
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.json' ? 'no-store' : 'public, max-age=300',
    });
    if (headOnly) return res.end();
    createReadStream(filePath).pipe(res);
  } catch {
    json(res, 404, { error: 'Not found' });
  }
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function json(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload, null, 2));
}

function countOccurrences(text, term) {
  if (!term) return 0;
  let count = 0;
  let index = 0;
  while (true) {
    const found = text.indexOf(term, index);
    if (found === -1) break;
    count += 1;
    index = found + term.length;
  }
  return count;
}

function normalizeText(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function dedupeStrings(values) {
  return [...new Set(values)];
}

function hasLlmConfig() {
  return Boolean(process.env.AI_API_KEY || process.env.OPENAI_API_KEY);
}

function readPort(argv, fallback) {
  const idx = argv.findIndex((arg) => arg === '--port');
  const raw = idx >= 0 ? argv[idx + 1] : fallback;
  const port = Number(raw);
  return Number.isInteger(port) && port > 0 ? port : 3080;
}
