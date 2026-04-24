---
type: X推文
author: 苍何 @canghe
date: 2026-04-21
url: https://x.com/canghe/status/2046578259031470510
source: X推文
tags:
  - Hermes
  - Kimi
  - K2.6
  - Agent
  - 多智能体
  - 飞书
  - 自动化
  - AI编程
---

# 万字保姆级教程：Hermes + Kimi K2.6 打造7x24h Agent军团

## 摘要

**核心：** 用 Hermes Agent + Kimi K2.6 搭建多 Agent 协同系统，从飞书发需求到最终交付，全流程自动完成。

**系统架构：**
- 总管 Agent（调度核心）
- 市场总监 Agent（调研）
- 产品总监 Agent（PRD）
- 架构总监 Agent（架构设计）
- 开发总监 Agent（自主调用 Claude Code 写代码）
- 测试总监 Agent（测试验收）

**关键结论：**
- 框架负责协调，模型负责执行
- K2.6 的长任务稳定性是多 Agent 链路跑通的关键
- Hermes Agent = Profiles（角色隔离）+ Honcho（共享上下文）+ Gateway（消息通道）+ tmux（进程保活）

---

## 原文

大家好，我是苍何。

最近 AI 的热风从龙虾吹到了 Hermes Agent，也就是江湖外号「爱马仕」。

虽然现实中这玩意买不起，但还是能玩得起的。我同样跑通了不少工作流。就包括之前龙虾的多智能体军团，我也用 Hermes Agent 跑通了。

从飞书给我的 Agent 总管发需求，到最终交付，中间的市场调研、PRD、架构设计，开发、测试，全部由不同的 Agent 自动完成。

每一个 Agent 负责不同的工作，各个 Agent 之间可以互相通信、发送消息，且每个 Agent 独立上下文，互不干扰。

---

## 效果：一个需求的完整流程

整体工作流程：

1. 在飞书给总管发一条任务（如：搭建竞品价格监控看板）
2. 总管自动派发给各 Agent，分别完成：市场调研 → PRD → 架构设计 → 开发实现 → 测试验收
3. 全程自主完成，最终输出可用的功能系统

---

## 核心原理：Hermes Agent 是怎么做到的？

**四个核心组件：**

| 组件 | 职责 | 类比 |
|------|------|------|
| Profiles | 多个独立 Agent 的组织方式 | 公司里的不同部门 |
| Gateway | Agent 对外收发消息的通道 | 公司的前台/客服 |
| Honcho | 多 Agent 共享长期记忆和上下文 | 公司的共享知识库 |
| tmux | 进程保活工具（非通信机制） | 让办公室的灯一直开着 |

**Agent 间任务交接流程：**

1. 总管通过 Honcho 写入共享上下文（需求+调研报告）
2. 通过 Gateway 发送通知给目标 Agent
3. 目标 Agent 从 Honcho 读取上下文，开始工作
4. 完成后回写结果，并通过 Gateway 通知总管

**关键理解：**
```
角色化分工（Profiles）
    +
共享上下文（Honcho）
    +
明确任务交接（Gateway + 共享记忆）
    =
多 Agent 协同系统
```

---

## 安装步骤

### 第一步：安装 Hermes Agent

打开 PowerShell，输入 `wsl` 进入 WSL 2，然后一键安装：

脚本会自动安装：Python、Node.js、代码仓库、虚拟环境、全局 `hermes` 命令。

安装过程中会问要不要装 ripgrep（更快的文件搜索）和 ffmpeg（语音消息），建议都装，输入 y。

**遇到卡顿怎么办？**
- npm/Node 一步容易慢，按一次回车，等 1-2 分钟
- 如果还是没反应，Ctrl+C 中断，Python 环境已装好，单独处理 Node 部分

### 第二步：配置默认 Profile

首次安装建议选快速配置，只配必需的几项（模型、API Key、消息方式）。

**模型推荐使用 K2.6**，核心优势：
- 超长上下文窗口：支持更大规模的任务输入
- 长任务链路稳定：多轮任务不会「忘了前面在干什么」
- 多工具协同能力强：文件读写、终端执行、搜索等工具混合调用时决策准确率高

消息平台这一步可以先跳过，后面再配飞书。

### 第三步：创建多个 Agent Profile

```bash
hermes profile create commander              # 总管
hermes profile create market-director       # 市场总监
hermes profile create product-director      # 产品总监
hermes profile create architect-director     # 架构总监
hermes profile create dev-director          # 开发总监
hermes profile create test-director         # 测试总监
```

每个 profile 需要：
- 设置模型和 API Key
- 定义角色职责和工作范围
- 配置可以使用的技能和工具

**最终 profile 结构：**
```
profiles/
├── commander/             # 总管：负责调度和流程推进
├── market-director/     # 市场总监：负责市场调研
├── product-director/    # 产品总监：负责 PRD 输出
├── architect-director/  # 架构总监：负责技术架构设计
├── dev-director/         # 开发总监：负责代码实现
└── test-director/        # 测试总监：负责测试验收
```

### 第四步：连接飞书

```bash
hermes gateway setup
# 选择飞书
```

两种配置方式：
- 自动创建飞书机器人（推荐）
- 手动输入已有飞书应用的 AppID 和 AppSecret

授权后配对成功即可使用飞书对话控制 Agent 军团。

### 第五步：配置 Agent 间通信

告诉总管 Agent 需求，让它自己去实现 Agent 之间的通信和修复。

Agent 会自动创建 skill 记录问题以便复用，这就是 Hermes Agent 的记忆功能。

---

## Hermes Agent 的文件结构

| 文件/目录 | 作用 |
|-----------|------|
| config.yaml | Agent 的「人设」配置 |
| .env | 敏感信息存储（API Keys、网关令牌） |
| profiles/ | 多个 Agent 的独立配置 |
| skills/ | Agent 可以调用的工具 |
| memory/ | 记忆存储（每日/长期记忆、Honcho 外部记忆库） |
| sessions/ | 会话历史 |
| gateway/ | 消息平台连接（飞书/Slack/Discord） |

**简单理解：**
- `profiles/` = 员工花名册
- `config.yaml` = 岗位职责描述
- `gateway/` = Agent 与飞书沟通的「前台」
- `memory/` = Agent 之间共享信息的「知识库」

---

## 常见问题

| 错误类型 | 典型报错 | 解决 |
|---------|---------|------|
| 命令找不到 | hermes: command not found | `source ~/.bashrc` |
| Python 版本低 | requires Python >=3.10 | 升级到 3.10+ |
| API Key 错误 | Invalid API key | 检查 .env |
| 速率限制 | Too many requests | 降低请求频率 |
| Docker 未启动 | Cannot connect to Docker | 启动 Docker 服务 |
| MCP 连接失败 | MCP server timeout | 检查 MCP 服务器配置 |
| 上下文溢出 | context length exceeded | 清理会话历史或换大模型 |
| Subagent 超时 | RPC timeout after 30s | 增加超时时间 |

---

## K2.6 在系统中的关键作用

多 Agent 协同对底层模型的要求极高：
- 不只是单次对话的理解能力
- 更考验长任务的稳定性
- 超长上下文的不失忆
- 跨轮次的任务链路保持

K2.6 在代码任务上专门做过针对性训练：
1. **任务目标识别准确**：模糊需求能自动拆解成清晰执行步骤
2. **工具调用非常稳定**：同时调用文件操作、搜索、终端命令时几乎没有幻觉或误操作
3. **长上下文不失忆**：数十轮对话后依然能精准引用前面某一步的输出

---

## 核心结论

> 一个好的多 Agent 框架配上一个真正能打长任务的模型，才是这套方案的核心竞争力所在。

框架负责协调，模型负责执行。

未来的开发模式：就是你当老板，AI 当团队，一个人指挥一支军团。

---

下午9:14 · 2026年4月21日 · 650 Views
