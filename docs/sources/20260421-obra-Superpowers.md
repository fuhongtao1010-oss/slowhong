# Superpowers

## 元数据
- 来源主体：Jesse Vincent / obra
- 日期：2026-04-21 研究
- 原始入口：`https://x.com/researchwang/status/2046573439276994773?s=46`
- 主要链接：`https://github.com/obra/superpowers`
- 来源类型：X 链接指向的 GitHub 项目 / 方法论
- 标签：#AI代理 #技能系统 #CodingAgent #工作流

## 摘要
Superpowers 是给 coding agent 用的一套“技能 + 软件开发方法论”。它不是单纯加长提示词，而是把常见开发流程拆成可触发的 `SKILL.md`：头脑风暴、写计划、开 worktree、TDD、子代理执行、代码审查、收尾等。

核心价值在于把“规则”变成“流程门槛”：在进入下一步之前，必须完成某个动作，例如先澄清需求、先写计划、先写失败测试、先审查计划。这个思路和“少写道德训诫，多写可执行动作”一致。

## 关键摘录
- Superpowers 自称是“给 coding agents 的完整软件开发方法论”，由可组合 skills 和初始指令组成。
- 工作流从“不急着写代码”开始，先问清楚用户真正要做什么。
- 设计确认后，再生成足够明确的实现计划。
- 实现阶段强调 RED/GREEN TDD、YAGNI、DRY。
- 支持 subagent-driven-development，让子代理按任务执行并接受审查。
- 5.0 之后强调本地 `CLAUDE.md` / `AGENTS.md` 的优先级高于 Superpowers 内部指令。

## 对本机工作流的启发
- 规则文件应继续短，只放硬约束。
- 复杂开发任务可以借鉴：澄清目标 → 设计确认 → 计划 → 执行 → 审查 → 验证。
- “会话阶段归档工作流”本质上也是一个 skill/gate：阶段结束后，只归档可复用结论、方法和踩坑。
- 不建议盲目照搬全部 Superpowers；更适合挑选其中的 gates 和 skills 思路，压缩成本机轻量版规则。

## 相关页面
- 会话阶段归档工作流
- 助手技能与本机说明
- Obsidian + Agent 第二大脑实现方案
- 知识库页面分层标准
