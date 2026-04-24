---
type: GitHub仓库
author: multica-ai
date: 2026-04-19
url: https://github.com/multica-ai/andrej-karpathy-skills
source: GitHub
tags:
  - ClaudeCode
  - AI编程
  - 工程实践
  - Karpathy
  - 提示词
---

# andrej-karpathy-skills — Claude Code 行为指南

## 基本信息

| 属性 | 值 |
|------|-----|
| **Stars** | 59.9k |
| **Forks** | 5.2k |
| **Watchers** | 337 |
| **License** | MIT |

## 仓库描述

一个 CLAUDE.md 文件，用于改进 Claude Code 行为，源自 Andrej Karpathy 对 LLM 编码陷阱的观察。

---

## 核心四条原则

### 1. Think Before Coding — 编码前思考

**不要假设。不要隐藏困惑。暴露权衡。**

实现前：
- 明确陈述你的假设。如果不确定，主动问。
- 如果存在多种解释，全部呈现——不要默默选一个。
- 如果存在更简单的方案，指出它。该push back就push back。
- 如果某事不清楚，停下来。说出哪里困惑，然后问。

---

### 2. Simplicity First — 简单优先

**用最少代码解决问题。不要 speculative。**

- 不添加需求之外的功能。
- 不为一次性代码创建抽象。
- 不添加"灵活性"或"可配置性"——除非明确要求。
- 不处理不可能发生的错误场景。
- 如果写了200行能50行解决，重写。

问自己："一个高级工程师会说这太复杂了吗？"如果答案是"会"，简化。

---

### 3. Surgical Changes — 精准修改

**只碰必须碰的。只清理你自己的烂摊子。**

编辑现有代码时：
- 不要"改进"相邻代码、注释或格式。
- 不要重构没有坏掉的部分。
- 匹配已有风格，即使你会有不同做法。
- 如果发现无关的死代码，指出它——不要删除它。

当你的改动制造了孤儿代码时：
- 删除由你的改动造成的未使用 import/变量/函数。
- 不要删除已有死代码，除非明确要求。

检验标准：**每行改动都要能直接追溯到用户的需求。**

---

### 4. Goal-Driven Execution — 目标驱动执行

**定义成功标准。循环验证直到达成。**

把任务转化为可验证的目标：
- "添加验证" → "先写无效输入的测试，然后让它们通过"
- "修复bug" → "写一个能复现它的测试，然后让测试通过"
- "重构X" → "确保重构前后测试都通过"

多步骤任务，说出简要计划：
```
1. [步骤] → 验证：[检查项]
2. [步骤] → 验证：[检查项]
3. [步骤] → 验证：[检查项]
```

强成功标准让你能独立循环。弱标准（"让它能跑"）需要你反复确认。

---

## 安装方式

**方式A：Claude Code 插件（推荐）**
```
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install forrestchang/andrej-karpathy-skills@karpathy-skills
```

**方式B：CLAUDE.md 文件（项目级）**
```
curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md
```

---

## 效果检验

以下迹象说明指南在起作用：
- diff 里不必要改动变少
- 因过度复杂而重写的次数减少
- 澄清问题出现在实现之前，而不是出错之后
- PR 干净、最小，没有旁边附带"改进"

---

## 文件结构

```
├── .claude-plugin/           # Claude Code 插件配置
├── .cursor/rules/            # Cursor 规则
├── skills/karpathy-guidelines/
├── CLAUDE.md                 # 主指南文件
├── CURSOR.md                 # Cursor 使用说明
├── EXAMPLES.md               # 使用示例
├── README.md                 # 英文说明
└── README.zh.md              # 中文说明
```

---

## 一句话总结

> 受 Karpathy 启发的 Claude Code 行为指南，四条原则：**编码前先想清楚、最小代码实现、只改该改的、以可验证目标驱动执行。**
