# Superpowers — AI 编程 Agent 的完整开发方法论

- **标题**：Superpowers
- **作者**：Jesse Vincent (obra) — Prime Radiant
- **日期**：2025-10-09 首发（项目），2026-04-22 泰来发推介绍
- **原链接**：https://github.com/obra/superpowers
- **来源类型**：GitHub 开源项目 / X 推文
- **标签**：#AI编程 #Agent工作流 #TDD #Superpowers #方法论

---

## 关键摘录

1. **核心理念**：Agent 不直接写代码。先澄清需求 → 确认设计 → 制定计划 → subagent 驱动执行 → 两层审查。
2. **硬拦截**：没有确认设计之前，绝对不动代码。"This is too simple to need a design" 是 Anti-Pattern。
3. **TDD 铁律**：没有看到测试失败，就不能写实现代码。测试通过 = 没测到东西。
4. **双层审查**：规格合规（是不是让做的事都做了）→ 代码质量（有没有硬伤）。
5. **Subagent 驱动**：每个任务分配 fresh subagent，隔离上下文，避免污染。
6. **Plan 模板**：每个步骤 2-5 分钟，精确文件路径 + 完整命令 + 期望输出。
7. **支持平台**：Claude Code、OpenAI Codex、Cursor、OpenCode、GitHub Copilot CLI、Gemini CLI。

---

## 中文摘要

Superpowers 是一个面向 AI 编程 Agent 的完整开发方法论，底层是一组可组合的 Skills。核心思想是让 AI 在写代码之前先理解需求、确认设计、制定精确计划，然后通过 Subagent 驱动执行，每个任务必须经过 TDD 循环和两层审查后才能通过。相比直接让 AI 写代码，Superpowers 强调约束和流程，减少 AI 瞎编、跑偏、过工程的概率。

**vs 我的 Obsidian 脑子**：Superpowers 是给 AI 用的工作流框架，我的脑子是知识管理系统。两者正交——Superpowers 的 Skill 内容可以存入脑子作为来源，但脑子本身不执行 Superpowers 的流程。

---

## 相关实体与主题

- 03 主题/AI编程Agent工作流（建议新建）
- 02 实体/Claude-Code
- 02 实体/TDD-测试驱动开发
