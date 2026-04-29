# AI Prototype

## 已实现

- 本地 HTTP 服务：`scripts/serve-ai-prototype.mjs`
- 问答页面入口：`ai.html`
- 浏览器端本地检索：`ai-client.js`
- 问答接口：`POST /api/ask`
- 健康检查：`GET /api/health`
- 检索数据源：`ai-index/documents.json`、`ai-index/chunks.json`、`ai-index/graph.json`
- 根目录 `search-index.json` 自动同步生成，修复现有前端搜索依赖

## 运行

先确保索引是最新的：

```bash
node scripts/build-ai-index.mjs
```

如果你要服务端问答或外部模型总结，再启动本地服务：

```bash
node scripts/serve-ai-prototype.mjs --port 3080
```

静态模式下，只要页面通过任意静态服务器访问，也可以直接使用浏览器本地检索：

```bash
python3 -m http.server 3080
```

然后打开：

```text
http://127.0.0.1:3080/ai.html
```

## 可选模型配置

如果只想做浏览器本地检索，不需要任何额外环境变量，也不强制需要 Node 服务。

如果要让服务把检索结果送给外部模型总结，设置以下变量之一：

```bash
export AI_API_KEY=...
export AI_MODEL=gpt-4.1-mini
export AI_BASE_URL=https://api.openai.com/v1
```

也兼容：

```bash
OPENAI_API_KEY
OPENAI_MODEL
OPENAI_BASE_URL
```

## 当前限制

- 现在还是关键词/规则检索，不是向量检索
- 图谱增强只做了相邻节点加权，还没做多跳推理
- 引用片段直接来自 chunk，没有做更细粒度高亮
- 浏览器直开 `file://` 时，通常无法读取本地 JSON；建议通过任意静态服务器访问
- 如果没有配置模型，回答是抽取式而不是生成式总结
