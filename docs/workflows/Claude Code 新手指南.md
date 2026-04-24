# Claude Code 新手完整指南

> 来源：摆烂程序媛 @wanerfu
> 日期：2026-03-19

---

## 01｜什么是 Claude Code

一句话：
> Claude Code = 终端里的 AI 执行助手

你可以用一句人话，让它帮你：
- 写代码
- 改文件
- 整理资料
- 分析数据
- 自动完成任务

📌 和普通 AI 最大区别：
- ChatGPT：告诉你怎么做
- Claude Code：直接帮你做

---

## 02｜快速安装（3 种方式）

### 方式一｜官网安装（适合有基础）

1. 安装 Node.js：https://nodejs.org（选择 LTS 版本）
2. 验证：`node -v`、`npm -v`
3. 安装 Claude Code：`npm install -g @anthropic-ai/claude-code`
4. 验证：`claude --version`

### 方式二｜Chocolatey（推荐小白）

```bash
choco install nodejs -y
npm install -g @anthropic-ai/claude-code
```

### 方式三｜让 AI 帮你装

在 Cursor / Trae 输入："帮我一步一步安装 Claude Code"

📌 成功标准：`claude --version`

---

## 03｜接入国内大模型（关键一步）

很多人装完后觉得：不稳定 / 很慢 / 用不了 → 原因：默认用国外模型

### 推荐模型
- GLM（智谱）✅
- Kimi
- MiniMax

### 第一步：注册 GLM
👉 https://open.bigmodel.cn → 注册 → 获取 API Key

### 第二步：配置 Claude Code

Mac / Linux：
```bash
export OPENAI_API_KEY=你的key
export OPENAI_BASE_URL=https://open.bigmodel.cn/api/paas/v4
```

Windows：
```bash
setx OPENAI_API_KEY "你的key"
setx OPENAI_BASE_URL "https://open.bigmodel.cn/api/paas/v4"
```

### 第三步：测试

```bash
claude
# 输入：测试是否正常
```

📌 核心认知：
- Claude Code 是壳
- 模型才是大脑

---

## 04｜入门基础操作

启动：`claude`

可以说：
- "帮我分析这个项目"
- "读取这个文件并总结"
- "写一个脚本"

📌 本质：说人话 = 下命令

---

## 05｜文本处理与创作

- **写文章**："写一篇关于AI副业的文章"
- **改写**："把这段话改得更像人写的"
- **总结**："总结这个文档"

📌 可替代：写作工具

---

## 06｜文件与文本管理

- **批量处理**："扫描文件夹并生成摘要"
- **自动整理**："按类型分类并重命名"
- **信息提取**："提取日期和金额"

📌 本质：AI 在帮你整理信息

---

## 07｜数据处理与分析

- **CSV 分析**："分析这个CSV并输出结论"
- **清洗数据**："删除重复数据"
- **可视化**："生成图表"

📌 相当于：Excel + Python

---

## 08｜提示词怎么写（重点）

不会写提示词 = 用不好

### 万能结构
> 角色 + 任务 + 输入 + 输出 + 限制

### 示例
```
你是数据分析师
分析这个文件
输出3个结论
用表格展示
```

📌 核心：越具体越好

---

## 09｜常用快捷键

| 操作 | Windows/Linux | macOS |
|------|---------------|-------|
| 发送消息 | Ctrl + Enter | Cmd + Enter |
| 新建对话 | Ctrl + Shift + N | Cmd + Shift + N |
| 打开设置 | Ctrl + , | Cmd + , |
| 打开帮助 | Ctrl + / | Cmd + / |

---

## 10｜新手最容易踩的坑

1. **环境没装好** — node 问题最多
2. **没用管理员权限**
3. **网络问题**
4. **提示词太模糊**

---

## 总结

走这 8 步：
1. 安装
2. 接模型
3. 学基础操作
4. 写文本
5. 管文件
6. 做数据
7. 优化提示词
8. 熟练操作

当你跑通这一圈，你会发现：
> Claude Code 不是工具
> 它是一个"帮你干活的 AI 系统"
