# AI Index

这个目录当前是静态 HTML 导出包。为了后续接入 AI，先把页面抽成可复用的数据索引。

## 生成方式

```bash
node scripts/build-ai-index.mjs
```

## 产物

脚本会生成 `ai-index/` 目录：

- `documents.json`：按页面聚合后的主文档索引
- `chunks.json`：适合 embeddings / RAG 的分块文本
- `graph.json`：从 `graph.html` 提取并补全路径后的图谱数据
- `search-index.json`：兼容现有前端搜索字段结构的轻量索引
- `manifest.json`：构建时间、数量统计和参数

## 字段建议

推荐把 `documents.json` 作为后台管理和调试数据源，把 `chunks.json` 用于：

- 向量化
- 混合检索
- 引用式问答

推荐把 `graph.json` 用于：

- 查询扩展
- 相关推荐
- 图谱问答

## 下一步

完成这一步后，后续最自然的接法是：

1. 给 `chunks.json` 生成 embeddings
2. 做一个带引用的问答 API
3. 把 `graph.json` 作为 rerank 或 query expansion 的增强层
