import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "slowhong",
  description: "slowhong 的个人网站，记录 AI、建站、效率工具和长期写作。",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/posts" },
      { text: "来源", link: "/sources" },
      { text: "主题", link: "/topics" },
      { text: "方法论", link: "/methods" },
      { text: "工作流", link: "/workflows" },
      { text: "发布流程", link: "/workflow" },
      { text: "关于", link: "/about" },
      { text: "教程", link: "/guide/getting-started" }
    ],
    sidebar: [
      {
        text: "开始阅读",
        items: [
          { text: "文章索引", link: "/posts" },
          { text: "持续发布流程", link: "/workflow" },
          { text: "关于我", link: "/about" }
        ]
      },
      {
        text: "建站教程",
        items: [
          { text: "从 Markdown 到上线", link: "/guide/getting-started" },
          { text: "Cloudflare Worker 代理", link: "/guide/worker-proxy" }
        ]
      },
      {
        text: "来源",
        items: [
          { text: "来源索引", link: "/sources" }
        ]
      },
      {
        text: "主题",
        items: [
          { text: "主题索引", link: "/topics" }
        ]
      },
      {
        text: "方法论",
        items: [
          { text: "方法论索引", link: "/methods" }
        ]
      },
      {
        text: "工作流",
        items: [
          { text: "工作流索引", link: "/workflows" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/fuhongtao1010-oss/slowhong" }
    ],
    outline: [2, 3],
    search: {
      provider: "local"
    }
  }
});
