# AI 编程 Agent 工作流

## 定义
使用 AI 编程 Agent（如 Claude Code、Codex）时，如何约束 AI 行为、减少瞎编、提高输出质量的方法论集合。

## 核心议题

### Superpowers（重要参考）
AI 编程 Agent 的完整开发方法论，强制需求澄清 → 设计确认 → 计划制定 → Subagent 驱动执行 → 两层审查。

**关键借鉴**：
- 给我下任务前，先问自己：做什么？为什么？怎样算成功？
- AI 写代码前要求先写测试（TDD 意识）
- AI 完成后用 spec review 验收，不是 AI 说 OK 就 OK

→ 详见 05 方法论/Superpowers/SKILL-核心4件套

### TDD 与测试文化
- 05 方法论/Superpowers/SKILL-核心4件套#test-driven-development-测试驱动开发
- 测试先行的价值：强制先发现边界情况，测试通过才证明实现正确

### Plan 驱动的价值
详细计划 + 用户审批 = 减少 AI 跑偏的概率

## 相关来源
- ../01 来源/20260422-xiangxiang103-Superpowers开源项目
- ../01 来源/20260423-researchwang-Hermes多Agent避坑工具（maestro + hermes-agent-camel）
- ../02 实体/Claude-Code-Game-Studios（49 Agent 游戏工作室配置包）

## 相关实体
- ../02 实体/Claude-Code-Game-Studios
- ../02 实体/maestro
- ../02 实体/hermes-agent-camel
- ../02 实体/CREAO
- ../02 实体/ClawEmail
- 02 实体/Claude-Code（待补充）
- 02 实体/TDD-测试驱动开发（待补充）
