# 从 Markdown 到上线

这一篇对应你前面那篇 `Obsidian + Claude Code + VitePress + GitHub + Cloudflare + 域名` 的主线。目标是让零基础用户先把网站搭起来。

## 1. 整体工作流

整条链路可以压缩成一句话：

`本地写 Markdown -> 提交到 GitHub -> Cloudflare Pages 自动部署 -> 用自己的域名访问`

## 2. 本地环境准备

先安装这些工具：

- `Node.js`
- `Git`
- `Obsidian`

检查命令：

```bash
node -v
git -v
```

## 3. 创建 VitePress 项目

在空文件夹里执行：

```bash
npm create vitepress@latest
cd 你的项目名
npm install
```

启动本地开发：

```bash
npm run docs:dev
```

浏览器打开终端显示的地址，比如：

```text
http://localhost:5173
```

## 4. 用 Obsidian 管理内容

这一步最适合小白：

1. 打开 Obsidian
2. 选择“打开文件夹作为仓库”
3. 直接选择 VitePress 项目目录

以后你更新网站，本质上就是更新 Markdown 文件。

## 5. 上传到 GitHub

先在 GitHub 创建一个仓库，然后在本地项目目录执行：

```bash
git init
git add .
git commit -m "init site"
git remote add origin 你的仓库地址
git branch -M main
git push -u origin main
```

## 6. 部署到 Cloudflare Pages

Cloudflare 后台里选择：

1. `Workers & Pages`
2. `Pages`
3. `导入现有 Git 存储库`

选择你的 GitHub 仓库后，按下面填写：

- `Framework preset`: `VitePress`
- `Build command`: `npm run docs:build`
- `Build output directory`: `docs/.vitepress/dist`

部署完成后，Cloudflare 会先给你一个默认域名。

## 7. 绑定自定义域名

你已经有域名时，顺序是：

1. 把域名接入 Cloudflare
2. 去域名注册商后台把 `Nameserver` 改成 Cloudflare 给你的两条
3. 回到 Pages 项目，添加 `Custom domain`
4. 输入你的域名，等待证书和解析生效

## 8. 以后如何更新

以后每次只需要：

```bash
git add .
git commit -m "update content"
git push
```

Cloudflare 会自动重新部署。

## 9. 零基础用户最小路径

如果你是第一次做，建议顺序固定：

1. 先本地跑起来
2. 再上传 GitHub
3. 再接 Cloudflare Pages
4. 最后再绑域名

这样排错最简单。
