# Cloudflare Worker 代理

这一篇对应你前面那篇 `Cloudflare Worker + 域名：零成本搭建私人爬虫代理池`。

## 1. Worker 为什么能做代理

Worker 运行在 Cloudflare 边缘节点。用户先请求 Worker，Worker 再去请求目标网站，所以目标网站看到的是 Cloudflare 的边缘节点 IP，而不是你的本机 IP。

这意味着：

- 可以隐藏本机出口 IP
- 会出现一定程度的自然 IP 轮换
- 适合个人轻量网页抓取和请求转发

## 2. 适合什么场景

- 个人采集
- 简单网页抓取
- 轻量 API 转发
- AI 工作流里的 HTML 获取

不适合：

- 高并发商业代理
- 强对抗型反爬目标
- 依赖稳定固定出口 IP 的业务

## 3. Worker 示例代码

```js
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36";

const PRESETS = {
  wechat: {
    Referer: "https://mp.weixin.qq.com"
  }
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};

function error(msg, status = 400) {
  return new Response(msg, { status, headers: CORS_HEADERS });
}

function checkToken(req, env) {
  if (!env.TOKEN) return;
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : new URL(req.url).searchParams.get("token");
  if (token !== env.TOKEN) throw new Error("Unauthorized");
}

async function parseRequest(req) {
  const origin = req.headers.get("origin") || "*";
  let targetURL = "";
  let targetMethod = "GET";
  let targetBody = "";
  let targetHeaders = {};
  let preset = "";

  if (req.method === "GET") {
    const { searchParams } = new URL(req.url);
    targetURL = searchParams.get("url") || "";
    preset = searchParams.get("platform") || searchParams.get("preset") || "";
  } else {
    throw new Error("Method not implemented");
  }

  if (!targetURL) throw new Error("URL not found");
  if (!/^https?:\\/\\//.test(targetURL)) throw new Error("URL not valid");
  if (!targetHeaders["User-Agent"]) targetHeaders["User-Agent"] = UA;
  if (preset in PRESETS) Object.assign(targetHeaders, PRESETS[preset]);

  return { origin, targetURL, targetMethod, targetBody, targetHeaders };
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    try {
      checkToken(request, env);
      const { origin, targetURL, targetMethod, targetBody, targetHeaders } =
        await parseRequest(request);

      const response = await fetch(targetURL, {
        method: targetMethod,
        body: targetBody || undefined,
        headers: targetHeaders
      });

      return new Response(response.body, {
        status: response.status,
        headers: {
          ...CORS_HEADERS,
          "Access-Control-Allow-Origin": origin,
          "Content-Type": response.headers.get("Content-Type") || "text/plain; charset=utf-8"
        }
      });
    } catch (err) {
      const status = err.message === "Unauthorized" ? 401 : 400;
      return error(err.message, status);
    }
  }
};
```

## 4. 部署步骤

Cloudflare 后台：

1. `Workers & Pages`
2. `创建应用`
3. 选择 Worker
4. 从默认模板开始
5. 替换代码
6. 点击部署

## 5. 绑定自己的子域名

建议不要长期只用 `workers.dev`，更推荐绑定自己的子域名，例如：

```text
proxy.yourdomain.com
```

路径：

1. 打开 Worker 项目
2. 进入 `Domains & Routes`
3. 选择 `Custom domain`
4. 绑定子域名

## 6. token 安全设置

为了防止别人盗用代理，建议添加环境变量：

- 变量名：`TOKEN`
- 值：你自己的密钥

调用示例：

```text
https://proxy.yourdomain.com/?url=https://example.com&token=your-token
```

公众号文章示例：

```text
https://proxy.yourdomain.com/?url=https://mp.weixin.qq.com/s/xxxx&platform=wechat
```

## 7. 和 AI 工作流配合

比较实用的一条链路：

1. 通过 Worker 抓网页 HTML
2. 用便宜模型先清洗成 Markdown 或 JSON
3. 再交给更强模型做总结、改写、结构化

这样成本和效果通常都更平衡。
