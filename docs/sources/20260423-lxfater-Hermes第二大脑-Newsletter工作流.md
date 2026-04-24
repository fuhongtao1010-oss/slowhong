---
type: X文章
author: 铁锤人 @lxfater
date: 2026-04-23
url: https://x.com/lxfater/status/2047150392274993624
source: X文章
tags:
  - X推特
  - AI工具
  - Agent
  - 知识管理
  - Hermes
  - Newsletter
  - Obsidian
  - 第二大脑
---

# Hermes Agent工作流：用顶级AI Newsletter构建第二大脑

## 摘要

**核心方法：** 用高质量 AI Newsletter → Hermes Agent 每日筛选消化 → LLM Wiki 拆解进 Obsidian 知识图谱 → 倒逼文章输出。

**关键工具链：** 高质量 Newsletter → ClawEmail → Hermes Agent → LLM Wiki (Karpathy 方法) → Obsidian 知识图谱

**核心洞察：** 大多数人学 AI 把劲儿使错了地方——不是刷更多内容，是把信息管道建好、让知识真正长进脑子里。

---

## 原文

### 开篇痛点

每天出新东西，你也每天在刷。但关上手机那一刻：什么都没进脑子。刷了那么多，说不出自己学到了啥。AI 越来越聪明，你越来越像个局外人。

这不是你不够努力，是大多数人学 AI，从一开始就把劲儿使错了地方。

### 第一步：换掉信息源

**高质量 AI Newsletter 清单**（从 50+ 里筛选）：
- **The Rundown AI**（therundown.ai）：每日 AI 产业动态
- **TLDR AI**（tldr.tech）：5 分钟科技简报
- **The Neuron**（theneurondaily.com）：非技术读者 AI 日报
- **Ben's Bites**（bensbites.com）：工具圈消息源
- **Latent Space**（latent.space）：开发者视角，未公开项目
- **Smol AI News**（smol.ai/news）：社区圈内直击
- **Interconnects**（interconnects.ai）：RLHF、模型训练深度专栏
- **One Useful Thing**（oneusefulthing.org）：Ethan Mollick 实用洞察
- **AI Breakfast**（aibreakfast.beehiiv.com）：系统回顾加深度讨论
- **Every**（every.to）：科技与商业战略分析

> AI 这种变化快的赛道，真正有信号的源头全在海外 newsletter。公众号被洗稿一层一层过滤，你看到的时候已经是二手信息。

### 第二步：让 Hermes Agent 构建第二大脑

**核心方法：LLM Wiki**

Karpathy 2026 年提出：RAG 检索太窄，LLM 真正该干的是"知识编译器"。

原理：像个实习生，每天扔一篇文章给它，它把里面的概念、实体、主张、开放问题一个个拆出来，每个做一张索引卡片，再用线把新卡片和墙上已有的相关卡片连起来。久了这堵墙就是一张活的知识图。

**操作流程：**
1. 让 Hermes 读 Newsletter 里的文章
2. 告诉它"这篇编译到我的 Wiki"
3. 获得互相链接的 Markdown 文件，构成知识网络
4. 用 Obsidian 知识图谱功能可视化
5. 在图里找到不懂的概念，不断问 Hermes 拆解

**效果：读 1 篇等于刷新 10 篇。** 旧概念因为今天这篇又加了一条新论据，新旧概念第一次被连到一起，符合认知科学，不易遗忘。

### 第三步：用 LLM Wiki 倒逼产出

**两种输出方式：**

1. **做信息图**：Hermes 内置信息图命令行，底层跑宝玉的信息图 prompt。把 Wiki index 地址给 AI，直接吐出信息图。

2. **自己写文章，AI 做脑暴**：碰到想不清楚的地方问 Hermes：
   - 这个概念我上周读过哪几篇支持？
   - 那个观点我怎么反驳？
   - 还有哪些角度我没考虑到？

### 工具链完整配置

**ClawEmail（网易邮箱 Agent 版）：**
- 注册：https://claw.163.com/?channel=lxfater
- 邀请码：CLAW3C02D3891B6C

**mail-cli 安装（让 Hermes 能读邮件）：**
```bash
npm install -g @clawemail/mail-cli
mail-cli auth apikey set \<API_KEY>
mail-cli auth login --user xxx@claw.163.com
mail-cli auth test
```

**订阅 Newsletter：**
- 订阅框填 `XXX.newsletter@claw.163.com`
- 确认邮件让 Hermes 直接提取确认地址完成订阅

---

*作者：铁锤人 @lxfater*
*CREAO Agent 使用者 | 图文爆款实操 | 第二大脑构建*
