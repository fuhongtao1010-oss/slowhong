# Cloudflare 零基础建站指南

把你前面那几篇文章里的核心内容整理成一套真正能落地的教程站。

这套方案适合零基础用户，目标只有两个：

- 用 `Obsidian + Markdown + GitHub + Cloudflare Pages` 搭出自己的个人网站
- 用 `Cloudflare Worker + 自定义域名` 搭一个轻量网页代理入口

## 你最终会得到什么

- 一个可持续更新的个人网站
- 一套只写 Markdown 就能发站的工作流
- 一个可选的 Cloudflare Worker 代理

## 阅读顺序

1. 先看 [从 Markdown 到上线](/guide/getting-started)
2. 再看 [Cloudflare Worker 代理](/guide/worker-proxy)

## 这套方案为什么适合小白

- 不用买服务器
- 不用自己配 Nginx
- 不用写复杂前端
- 后续维护主要就是写 Markdown 和 `git push`

## 你需要准备的东西

- `Cloudflare` 账号
- `GitHub` 账号
- `Node.js`
- `Git`
- `Obsidian` 可选
- 一个域名，可选但推荐

## 建议顺序

先把网站跑起来，再去绑定域名，最后再加 Worker。这样最稳。
