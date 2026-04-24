---
created: 2026-04-23
source_type: article
source_author: 比特币橙子Trader（@oragnes）
source_url: https://x.com/oragnes/status/2046983055588598270
source_url_article: https://x.com/i/article/2046972053484605441
tags:
  - 来源/社交媒体
  - 主题/本地网关
  - 主题/OpenAI-Compatible
  - 主题/OAuth
---

# 把账号反代成本地 API，爽用大模型（普通人也能懂的教程）

## 摘要
作者给出一个“**本地网关**”思路：把自己已登录/已授权的 AI 账号能力（OAuth/CLI 等）适配成 **OpenAI-compatible API**，统一对外只暴露本地 `127.0.0.1` 的入口，从而让各种工具/脚本/Agent 框架都能像调用 OpenAI API 一样调用。

## 关键摘录
> 把自己已经登录、已经授权的 AI 账号，接成本地的 OpenAI-compatible API。

> 这不是教你偷别人的 key，也不是教你抓包绕限制。前提是：账号是你自己的，或者是你有权使用的。

> 你只需要像用 OpenAI API 一样调用。

> 外面只拿到你本地网关的 key，不会拿到你的 OAuth token、Cookie、内部代理 key 或管理后台。

> 为什么要多这一层？因为以后你可以在这里加：调用统计、成本统计、限流、多模型路由、包装服务、用户管理。

## 全文

把账号反代成本地 API，爽用大模型，普通人也能懂的教程！

作者：@oragnes（比特币橙子Trader）

---

我最近搭了一套很实用的东西：
把自己已经登录、已经授权的 AI 账号，接成本地的 OpenAI-compatible API。

最后你本地代码里可以这样用：

```bash
OPENAI_BASE_URL=http://127.0.0.1:3000/v1
OPENAI_API_KEY=xxx
```

然后任何支持 OpenAI API 格式的工具、脚本、Agent 框架，都可以直接调用。
能做的事包括：写代码、总结、研究、配置 Agents 等等……

这不是教你偷别人的 key，也不是教你抓包绕限制。
前提是：账号是你自己的，或者是你有权使用的。

---

### 它到底解决什么问题

很多 AI 工具都支持 OpenAI API 格式。
问题是：你手上不一定总是一个标准 API key。你可能有的是：

- 一个已经登录的 CLI
- 一个 OAuth 授权
- 一个本机可用的模型资源
- 一个只能在本机管理的账号能力

这时候就可以做一层本地网关，把它统一成：

`http://127.0.0.1:3000/v1`

这样你的代码不用管背后是什么账号、什么授权方式、什么模型来源。
你只需要像用 OpenAI API 一样调用。

---

### 整体架构

你的代码 / OpenAI SDK
        ↓
本地 API 网关: 127.0.0.1:3000/v1
        ↓
CLIProxyAPI: 127.0.0.1:8317/v1
        ↓
你自己的已授权 AI 账号

每一层的作用：

- 你的代码：用 OpenAI SDK、curl、脚本、Agent 调用
- 本地 API 网关：给你一个自己的 API key，统一入口
- CLIProxyAPI：把本机授权账号适配成 OpenAI-compatible API
- 已授权账号：真正提供模型能力

重点是：外面只拿到你本地网关的 key，不会拿到你的 OAuth token、Cookie、内部代理 key 或管理后台。

---

### 搭建步骤

#### 1. 安装 CLIProxyAPI

macOS 可以用：

```bash
brew install cliproxyapi
```

然后准备本机配置：

```bash
mkdir -p ~/.cli-proxy-api
```

配置文件里要做三件事：

- 监听 127.0.0.1
- 设置一个强随机内部 API key
- 设置模型别名，比如 local-ai

不要把管理端暴露到公网。

#### 2. 完成账号授权

用 CLIProxyAPI 走官方支持的 OAuth / CLI 登录流程。

重点：

- 用你自己的账号
- 不复制 Cookie
- 不提取 refresh token
- 不抓包私有接口
- 不绕过验证码或风控

授权成功后，凭据只保存在你的本机。

#### 3. 启动 CLIProxyAPI

```bash
cliproxyapi --config ~/.cli-proxy-api/config.yaml
```

确认它只在本机监听：

```bash
lsof -nP -iTCP:8317 -sTCP:LISTEN
```

你应该看到：

`127.0.0.1:8317`

#### 4. 加一层本地 API 网关

这一层很简单：

- 对外监听 127.0.0.1:3000
- 要求你自己的 LOCAL_API_KEY
- 把 /v1/models 转发到 CLIProxyAPI
- 把 /v1/chat/completions 转发到 CLIProxyAPI
- 把外部 key 和内部 key 分开

为什么要多这一层？
因为以后你可以在这里加：调用统计、成本统计、限流、多模型路由、包装服务、用户管理。
直接把 CLIProxyAPI 暴露出去不适合产品化。

#### 5. 配置你的本地调用参数

建议保存一个本地 `.env.local-ai`：

```bash
OPENAI_BASE_URL=http://127.0.0.1:3000/v1
OPENAI_API_KEY=xxx
OPENAI_MODEL=\<your-model-name>
```

然后：

```bash
source .env.local-ai
```

任何支持 OpenAI API 的代码都可以用了。

---

### 可以拿来做什么

最直接的用途：

- 写代码、改代码、生成脚本
- 总结文章、翻译、做研究
- 写 JSON、做结构化抽取
- 接 Agent、接自动化工作流

更进一步，可以包装成自己的服务——自己发挥想象哈。

---

## 相关链接
- 作者（X）：https://x.com/oragnes

## 关联（待整理）
- 比特币橙子Trader
- 本地 AI 网关
- OpenAI-Compatible API
- OAuth 授权
