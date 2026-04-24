---
type: X推文
author: lxfater @lxfater
date: 2026-04-18
url: https://x.com/lxfater/status/2044781079660482801
source: X推文
tags:
  - AI工具
  - Agent
  - 联网能力
  - ClaudeCode
  - 浏览器自动化
---

# Web Access — 给 AI Agent 装上完整联网能力

## 摘要

**一句话：** AI Agent 自带的 WebSearch/WebFetch 缺调度策略和浏览器自动化，这个 Skill 补上了。

**核心能力：**
- 联网工具自动选择（Search/Fetch/curl/Jina/CDP，按场景自主判断）
- CDP Proxy 直连用户 Chrome，携带登录态，支持动态页面
- 三种点击方式（JS click / 真实鼠标事件 / 文件上传）
- 本地 Chrome 书签/历史检索
- 并行分治（多目标分发子 Agent 并行）
- 站点经验积累（按域名存储操作经验，跨 session 复用）
- 媒体提取（图片/视频 URL 提取，视频任意时间点截帧）

**安装：**
```bash
npx skills add eze-is/web-access
```

**兼容：** Claude Code、Cursor、Gemini CLI、Codex CLI 等所有支持 SKILL.md 的 Agent

**注意：** 用浏览器自动化操作社交平台存在限流/封号风险，建议用小号。

---

## 原文

🌐 给 AI Agent 装上完整联网能力的 Skill。

AI Agent 原本的联网能力（WebSearch、WebFetch）缺少调度策略和浏览器自动化能力。这个 Agent Skill 补上的是：联网策略 + CDP 浏览器操作 + 站点经验积累。

**v2.5.0 能力：**

| 能力 | 说明 |
|------|------|
| 联网工具自动选择 | WebSearch / WebFetch / curl / Jina / CDP，按场景自主判断，可任意组合 |
| CDP Proxy 浏览器操作 | 直连用户日常 Chrome，天然携带登录态，支持动态页面、交互操作、视频截帧 |
| 三种点击方式 | /click（JS click）、/clickAt（CDP 真实鼠标事件）、/setFiles（文件上传） |
| 本地 Chrome 书签/历史检索 | find-url.mjs 查询公网搜不到的目标（内部系统）或用户访问过的页面 |
| 并行分治 | 多目标时分发子 Agent 并行执行，共享一个 Proxy，tab 级隔离 |
| 站点经验积累 | 按域名存储操作经验（URL 模式、平台特征、已知陷阱），跨 session 复用 |
| 媒体提取 | 从 DOM 直取图片/视频 URL，或对视频任意时间点截帧分析 |

**安装方式：**

方式一：npx skills 一键安装（推荐）
```bash
npx skills add eze-is/web-access
```

方式二：让 Agent 自动安装
```
帮我安装这个 skill：https://github.com/eze-is/web-access
```

方式三：Plugin 安装（Claude Code）
```bash
claude plugin marketplace add https://github.com/eze-is/web-access
claude plugin install web-access@web-access --scope user
```

方式四：手动
```bash
git clone https://github.com/eze-is/web-access ~/.claude/skills/web-access
```

**CDP 模式前置配置：**
- Chrome 地址栏打开 `chrome://inspect/#remote-debugging`
- 勾选 Allow remote debugging for this browser instance

**设计哲学：**

Skill = 哲学 + 技术事实，不是操作手册。讲清 tradeoff 让 AI 自己选，不替它推理。
