import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Cloudflare 零基础建站指南",
  description: "用 Obsidian、GitHub、Cloudflare Pages 和 Worker 搭建个人网站与轻量代理。",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "建站教程", link: "/guide/getting-started" },
      { text: "Worker 代理", link: "/guide/worker-proxy" }
    ],
    sidebar: [
      {
        text: "零基础教程",
        items: [
          { text: "从 Markdown 到上线", link: "/guide/getting-started" },
          { text: "Cloudflare Worker 代理", link: "/guide/worker-proxy" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/" }
    ],
    outline: [2, 3]
  }
});
