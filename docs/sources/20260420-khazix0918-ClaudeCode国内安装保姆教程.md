---
type: X推文
author: 数字生命卡兹克 @Khazix0918
date: 2026-04-20
url: https://x.com/khazix0918/status/2046082879109959807
source: X推文
tags:
  - ClaudeCode
  - AI编程
  - 安装教程
  - 国内可用
  - GLM
  - Hermes
---

# 从0开始，在国内用上Claude Code的终极保姆教程

## 摘要

**核心观点：** Claude Code 只是个 Agent 框架，搭配国产模型（GLM-5.1）国内就能用。不需要 Claude 账号、不需要魔法、不需要外币卡。

**关键工具：** CC-Switch — 支持 Claude Code 接入任意模型（GLM/Claude/Kimi等）

**CLAUDE.md 最重要：** 全局 + 项目级两层规范体系，是用好 Claude Code 的第一件事

---

## 原文

从0开始，在国内用上Claude Code的终极保姆教程来了。

最近很多朋友都在问我，能不能出一期 Claude Code 的小白教程。他们也想用上这个世界上最牛逼的 Agent 产品。

而且其实很多人不太知道，Agent 产品一般是 Agent 框架 + 模型组成的，Claude 的模型国内确实会封，会非常的难搞，我也没有任何办法教大家。

但 Claude Code 不会被封，也不会用不了，因为这玩意其实就是个 Agent 框架，搭配任何模型都可以使用。

所以我常年说，能一步到位就一步到位，我当然知道现在比如什么 OpenClaw、Hermes Agent 等等非常火，但是我还是依然会建议你使用 Claude Code，即使用不了 Claude 的原生模型，你搭配个国产模型，效果也依然很好。

而且也不用担心封号，不需要外国手机号、visa 卡，甚至都可以不上魔法。

---

## 一、Claude Code 安装

### 1. Mac

**有魔法的情况：**

```bash
curl -fssL https://claude.ai/install.sh | bash
```

如果提示 PATH 没配，把给出的 echo 命令跑一遍，然后 `claude --version` 验证。

**没有魔法的情况（Homebrew）：**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

加到 PATH：

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

安装 Claude Code：

```bash
brew install --cask claude-code@latest
```

### 2. Windows

**前置：装 Git**（Claude Code 在 Windows 内部用 Git Bash 执行命令）

```bash
winget install Git.Git
```

**有魔法：**

```bash
irm https://claude.ai/install.ps1 | iex
```

**没有魔法：**

```bash
winget install Anthropic.ClaudeCode
```

---

## 二、接模型（CC-Switch）

**推荐 GLM-5.1** — 作者用下来觉得国内效果最接近 Claude Opus 4.6 体验的。

备选：MiniMax M2.7、K2.5

### Mac 安装 CC-Switch

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

### Windows 安装 CC-Switch

下载地址：https://github.com/farion1231/cc-switch/releases

（公众号后台回复 cc 获取国内镜像）

### 配置模型

1. 打开 CC-Switch
2. 点加号新增模型配置
3. 选择 GLM 国内版
4. 填入 API Key 和模型配置
5. 添加并切换

---

## 三、启动 Claude Code

```bash
claude
```

第一次启动的初始化设置：
- 颜色模式（选代码预览模式）
- 安全提示（Claude 会犯错、只在你信任的代码库用）
- 终端设置（快捷键换行、Visual bell）
- 确认当前目录是否信任

**推荐启动命令（避免点 allow 点到手软）：**

```bash
claude --dangerously-skip-permissions
```

**正确启动方式：先 cd 进目标文件夹，再启动 Claude Code**

```bash
cd /path/to/your/folder
claude
```

这样 Claude Code 只在该文件夹下工作，上下文污染更小，更专注。

---

## 四、写 CLAUDE.md（最重要的事）

### CLAUDE.md 是什么

从上往下分层穿透的约束体系：
- **全局 CLAUDE.md**：`~/.claude/CLAUDE.md` — 无论哪个项目都会被加载
- **项目级 CLAUDE.md**：`项目目录/CLAUDE.md` — 只在该项目加载

### 重要规则

**不超过 80 行，Claude 开始遗漏内容；最多不超过 200 行。**

### 全局 CLAUDE.md 模板

```markdown
## 关于我
[你的名字 / 身份 / 职业背景，非程序员的话一定要写出来]。我用 Claude Code 做 [具体用途 1] 和 [具体用途 2]。

## 思维原则
所有决策从问题本质出发，不因「惯例如此」照搬。
回到问题本身：要解决什么？最直接的路径是什么？从零设计会怎么做？
不要谄媚。不要夸我的想法好、不要说「这是个很好的问题」、不要开头加「当然可以」。
给我真实判断，方案有问题直接指出来。发现更好的做法直接说，不用等我问。

## 约束先行
无论开发项目还是知识管理项目，第一步永远是建规则：新项目先写 CLAUDE.md，新目录先定结构约定（什么放哪、怎么命名、何时清理）。
没有规范的工作空间不动手。已有规范的项目，严格遵守其 CLAUDE.md 中的约定。
需要调整规范时先改文档、再改实践，不要反过来。

## 沟通方式
- 默认中文，代码、命令、变量名用英文
- 结论先行，再给理由，不要先铺垫背景
- 遇到模糊需求，先给最合理的方案，再问要不要调整
- 不要问「你确定要这样吗」，除非命中下方红线

## 自主边界（红线，必须先问我）
以下操作即使在 auto-accept 模式下也必须停下来问我：
- 删除文件、目录或 git 历史
- 修改 .env、密钥、token、CI/CD 配置
- 数据库 schema 变更或数据迁移
- git push、git rebase、git reset --hard、强制推送
- 安装新的全局依赖或修改系统配置
- 公开发布（npm publish、部署到生产、发文章等）

## 通用工程纪律
- 改完主动跑验证（具体命令见各项目 CLAUDE.md），不要只改不验
- 不要为了让代码跑起来注释掉报错或加绕过标记，找根本原因
- 密钥、token、密码不进代码、不进 commit、不进日志
- 大改动前先在 Plan Mode 出方案，我确认后再动手
```

### 项目级 CLAUDE.md

不需要自己写，直接在文件夹里和 Claude Code 聊，让它帮你写：
"我需要你帮我判断这是不是新产品，如果是就新建文件夹开始做。"

---

## 写在最后

Claude Code，就是推荐你的当前 AI 版本的毕业工具。你根本无需使用各种乱七八糟的那些 Agent，用好 Claude Code，你就真的能感受到什么是最牛逼的 Agent 了。

---

12:25 PM · Apr 20, 2026 · 14.6K Views
