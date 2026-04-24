# CLIProxyAPI 本地部署教程

> 来源: https://x.com/xiangxiang103/status/2031737587510206905

## 什么是 CLIProxyAPI

把本地 CLI AI 工具（Gemini CLI、Claude Code 等）转换成标准 API 接口的工具。

## 部署后得到

- **API 服务**: `http://localhost:8081`
- **Web 管理界面**: `http://localhost:8081/management.html`
- **管理 API**: `http://localhost:8081/v0/management/...`

## 部署步骤

1. 安装 Docker Desktop for Windows
2. 创建目录 `D:\claude code\CLIProxyAPI\`
3. 从 GitHub 克隆源码
4. 创建 `docker-compose.yml` 配置本地构建
5. 创建 `config.yaml` 并设置认证信息
6. 创建空的 `auth` 文件夹
7. 运行 `docker compose up -d --build`
8. 浏览器访问 `http://localhost:8081/management.html` 测试

## 注意事项

> "凡是要替换成你自己密码的地方，请务必替换"

- 把 `CHANGE_ME_xxx` 占位符替换成自己的密码
- 教程避免使用官方 Docker 镜像（国内可能拉取失败）

## 使用方法

第三方应用使用以下配置连接：
- **API Base URL**: `http://localhost:8081/v1`
- **API Key**: 自定义

---

*标签: #教程 #Docker #API #Claude #Windows*
