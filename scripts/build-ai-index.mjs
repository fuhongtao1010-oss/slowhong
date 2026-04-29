#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'ai-index');
const CONTENT_DIRS = [
  'berkshire',
  'partnership',
  'special',
  'concepts',
  'companies',
  'people',
  'index-pages',
];

const TYPE_BY_DIR = {
  berkshire: '股东信',
  partnership: '合伙人信',
  special: '特别信件',
  concepts: '概念',
  companies: '公司',
  people: '人物',
  'index-pages': '索引',
};

const CHUNK_TARGET = 900;
const CHUNK_OVERLAP = 0;

async function main() {
  const rawGraph = await readEmbeddedGraph();
  const documents = [];

  for (const dir of CONTENT_DIRS) {
    const dirPath = path.join(ROOT, dir);
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
      const relativePath = path.posix.join(dir, entry.name);
      const absolutePath = path.join(dirPath, entry.name);
      const html = await fs.readFile(absolutePath, 'utf8');
      const doc = buildDocument({ html, relativePath, dir });
      documents.push(doc);
    }
  }

  documents.sort((a, b) => a.path.localeCompare(b.path, 'zh-CN'));

  const docMap = new Map(documents.map((doc) => [doc.title, doc]));
  const graph = enrichGraph(rawGraph, docMap);
  const chunks = buildChunks(documents);
  const searchIndex = buildSearchIndex(documents);
  const manifest = buildManifest(documents, chunks, graph);
  const publicDocuments = documents.map(stripInternalDocFields);

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await writeJson(path.join(OUTPUT_DIR, 'documents.json'), publicDocuments);
  await writeJson(path.join(OUTPUT_DIR, 'chunks.json'), chunks);
  await writeJson(path.join(OUTPUT_DIR, 'graph.json'), graph);
  await writeJson(path.join(OUTPUT_DIR, 'search-index.json'), searchIndex);
  await writeJson(path.join(OUTPUT_DIR, 'manifest.json'), manifest);
  await writeJson(path.join(ROOT, 'search-index.json'), searchIndex);

  console.log(JSON.stringify({
    outputDir: path.relative(ROOT, OUTPUT_DIR),
    documents: documents.length,
    chunks: chunks.length,
    graphNodes: graph.nodes.length,
    graphEdges: graph.edges.length,
  }, null, 2));
}

function buildDocument({ html, relativePath, dir }) {
  const articleHtml = extractTagBlock(html, 'article', 'class="article"') || '';
  const backlinksHtml = extractTagBlock(html, 'aside', 'class="backlinks-panel"') || '';
  const title = decodeHtml(stripTags(extractTagContent(articleHtml, 'h1') || ''));
  const englishName = decodeHtml(stripTags(extractByClass(articleHtml, 'english-name') || ''));
  const metaDescription = getMetaContent(html, 'description');
  const pageType = extractType(articleHtml) || TYPE_BY_DIR[dir] || '未知';
  const year = inferYear(title, relativePath);

  const headingStructure = extractHeadings(articleHtml);
  const paragraphs = extractTextBlocks(articleHtml, 'p');
  const sectionItems = buildSectionItemsFromHtml(articleHtml, title);
  const quotes = extractByClassList(articleHtml, 'quote-text').map((text) => normalizeText(decodeHtml(stripTags(text))));
  const backlinks = extractBacklinks(backlinksHtml);
  const outLinks = dedupe(extractWikiLinks(articleHtml));
  const plainText = normalizeText(textFromHtml(articleHtml));
  const summary = metaDescription || paragraphs[0] || plainText.slice(0, 180);

  return {
    id: relativePath.replace(/\.html$/i, ''),
    path: relativePath,
    url: `/${relativePath}`,
    dir,
    type: pageType,
    title,
    englishName: englishName || null,
    year,
    summary,
    headings: headingStructure,
    paragraphs,
    quotes,
    outLinks,
    backlinks,
    plainText,
    _sectionItems: sectionItems,
    stats: {
      characters: plainText.length,
      paragraphs: paragraphs.length,
      outLinks: outLinks.length,
      backlinks: backlinks.length,
      quotes: quotes.length,
    },
  };
}

function extractType(articleHtml) {
  const metaBlock = extractByClass(articleHtml, 'meta');
  if (!metaBlock) return null;
  const match = metaBlock.match(/type-([^"\s]+)">([^<]+)</);
  return match ? decodeHtml(match[2].trim()) : null;
}

function extractHeadings(html) {
  const matches = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)];
  return matches.map((match) => ({
    level: Number(match[1][1]),
    text: normalizeText(decodeHtml(stripTags(match[2]))),
  })).filter((item) => item.text);
}

function extractTextBlocks(html, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'gi');
  const blocks = [];
  for (const match of html.matchAll(regex)) {
    const text = normalizeText(decodeHtml(stripTags(match[1])));
    if (text) blocks.push(text);
  }
  return blocks;
}

function extractWikiLinks(html) {
  const matches = [...html.matchAll(/<a[^>]+href="([^"]+\.html)"[^>]*class="[^"]*wikilink[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)];
  return matches.map((match) => ({
    href: normalizeHref(match[1]),
    title: normalizeText(decodeHtml(stripTags(match[2]))),
  }));
}

function extractBacklinks(html) {
  const groups = [...html.matchAll(/<div class="bl-group"[\s\S]*?<span class="bl-source-name">([\s\S]*?)<\/span>[\s\S]*?<span class="bl-mention-count">(\d+)<\/span>[\s\S]*?<a href="([^"]+\.html)" class="bl-go-link">/gi)];
  return groups.map((match) => ({
    sourceTitle: normalizeText(decodeHtml(stripTags(match[1]))),
    mentions: Number(match[2]),
    href: normalizeHref(match[3]),
  }));
}

function buildChunks(documents) {
  const chunks = [];

  for (const doc of documents) {
    let buffer = '';
    let sectionTrail = [];
    let chunkIndex = 0;

    for (const item of buildSectionItems(doc)) {
      for (let i = 0; i < item.paragraphs.length; i += 1) {
        const paragraph = item.paragraphs[i];
        const piece = i === 0 ? `${item.label}\n${paragraph}` : paragraph;
        const nextBuffer = buffer ? `${buffer}\n\n${piece}` : piece;

        if (buffer && nextBuffer.length > CHUNK_TARGET) {
          chunks.push(makeChunk(doc, chunkIndex++, buffer, sectionTrail));
          buffer = piece;
          sectionTrail = [item.label];
          continue;
        }

        buffer = nextBuffer;
        sectionTrail.push(item.label);
      }
    }

    if (buffer) {
      chunks.push(makeChunk(doc, chunkIndex++, buffer, sectionTrail));
    }
  }

  return chunks;
}

function buildSectionItems(doc) {
  return doc._sectionItems?.length
    ? doc._sectionItems
    : [{ label: doc.title, paragraphs: [doc.plainText] }];
}

function buildSectionItemsFromHtml(articleHtml, fallbackTitle) {
  const blocks = [...articleHtml.matchAll(/<(h[1-4]|p)[^>]*>([\s\S]*?)<\/\1>/gi)];
  const items = [];
  let currentHeading = fallbackTitle;
  let currentParagraphs = [];

  function flushSection() {
    if (currentParagraphs.length === 0) return;
    items.push({
      label: currentHeading,
      paragraphs: currentParagraphs,
    });
    currentParagraphs = [];
  }

  for (const [, tagName, innerHtml] of blocks) {
    const text = normalizeText(decodeHtml(stripTags(innerHtml)));
    if (!text) continue;

    if (tagName.toLowerCase() === 'p') {
      currentParagraphs.push(text);
      continue;
    }

    flushSection();
    currentHeading = text;
  }

  flushSection();

  return items.length > 0
    ? items
    : [{ label: fallbackTitle, paragraphs: [normalizeText(textFromHtml(articleHtml))] }];
}

function makeChunk(doc, chunkIndex, text, sectionTrail) {
  const normalized = normalizeText(text);
  return {
    id: `${doc.id}#${chunkIndex + 1}`,
    docId: doc.id,
    path: doc.path,
    url: doc.url,
    type: doc.type,
    title: doc.title,
    year: doc.year,
    sectionHints: dedupe(sectionTrail).slice(-3),
    text: normalized,
    length: normalized.length,
  };
}

function buildSearchIndex(documents) {
  return documents.map((doc) => ({
    t: doc.title,
    e: doc.englishName || '',
    y: doc.type,
    p: doc.path,
    b: doc.plainText,
  }));
}

function enrichGraph(rawGraph, docMap) {
  const nodes = rawGraph.nodes.map((node) => {
    const doc = docMap.get(node.id);
    return {
      id: node.id,
      type: node.type,
      path: node.file ? path.posix.join(node.dir, node.file) : (doc?.path || null),
      dir: node.dir,
      file: node.file,
      links: node.links,
      backlinks: node.backlinks,
      year: doc?.year ?? inferYear(node.id, node.file || ''),
    };
  });

  return {
    nodes,
    edges: rawGraph.edges.map((edge) => ({
      source: edge.source,
      target: edge.target,
    })),
  };
}

function buildManifest(documents, chunks, graph) {
  const byType = {};
  for (const doc of documents) {
    byType[doc.type] = (byType[doc.type] || 0) + 1;
  }

  return {
    generatedAt: new Date().toISOString(),
    source: 'static-html-export',
    counts: {
      documents: documents.length,
      chunks: chunks.length,
      graphNodes: graph.nodes.length,
      graphEdges: graph.edges.length,
    },
    byType,
    chunking: {
      targetCharacters: CHUNK_TARGET,
      overlapCharacters: CHUNK_OVERLAP,
    },
    files: {
      documents: 'documents.json',
      chunks: 'chunks.json',
      graph: 'graph.json',
      search: 'search-index.json',
    },
  };
}

function stripInternalDocFields(doc) {
  const { _sectionItems, ...publicDoc } = doc;
  return publicDoc;
}

async function readEmbeddedGraph() {
  const graphHtml = await fs.readFile(path.join(ROOT, 'graph.html'), 'utf8');
  const match = graphHtml.match(/var raw = (\{"nodes":\[[\s\S]*?"edges":\[[\s\S]*?\]\});/);
  if (!match) {
    throw new Error('Unable to locate embedded graph data in graph.html');
  }
  return JSON.parse(match[1]);
}

function extractTagBlock(html, tagName, requiredFragment = '') {
  const regex = new RegExp(`<${tagName}[^>]*${escapeRegex(requiredFragment)}[^>]*>[\\s\\S]*?<\\/${tagName}>`, 'i');
  const match = html.match(regex);
  return match ? match[0] : '';
}

function extractTagContent(html, tagName) {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = html.match(regex);
  return match ? match[1] : '';
}

function extractByClass(html, className) {
  const regex = new RegExp(`<[^>]+class="[^"]*${escapeRegex(className)}[^"]*"[^>]*>([\\s\\S]*?)<\\/[^>]+>`, 'i');
  const match = html.match(regex);
  return match ? match[1] : '';
}

function extractByClassList(html, className) {
  const regex = new RegExp(`<[^>]+class="[^"]*${escapeRegex(className)}[^"]*"[^>]*>([\\s\\S]*?)<\\/[^>]+>`, 'gi');
  return [...html.matchAll(regex)].map((match) => match[1]);
}

function getMetaContent(html, name) {
  const regex = new RegExp(`<meta[^>]+name="${escapeRegex(name)}"[^>]+content="([^"]*)"`, 'i');
  const match = html.match(regex);
  return match ? decodeHtml(match[1].trim()) : '';
}

function inferYear(title, source) {
  const match = `${title} ${source}`.match(/\b(19\d{2}|20\d{2})\b/);
  return match ? Number(match[1]) : null;
}

function normalizeHref(href) {
  return href.replace(/^\.\.\//, '').replace(/^\.\//, '');
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');
}

function textFromHtml(html) {
  return decodeHtml(stripTags(html));
}

function decodeHtml(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#160;/g, ' ');
}

function normalizeText(text) {
  return text
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function dedupe(items) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    const key = JSON.stringify(item);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function writeJson(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
