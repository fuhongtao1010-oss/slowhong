# cloudflare-guide-site

一个基于 VitePress 的最小教程站，内容来自“Cloudflare Worker 代理”和“Obsidian + VitePress + GitHub + Cloudflare Pages 建站”两篇文章整理。

## 本地运行

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

## 发布

手动发布：

```bash
git add .
git commit -m "update content"
git push origin main
```

脚本发布：

```bash
./publish.sh "update content"
```
