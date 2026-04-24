# Superpowers 核心 Skill 全量内容

> 来源：https://github.com/obra/superpowers
> 整理：2026-04-22

---

## brainstorming — 写代码之前的强制需求澄清

### 核心理念
通过自然协作对话，把想法打磨成完整的设计和规格文档。

### 硬拦截（HARD-GATE）
**在用户批准设计之前，不动任何代码、不脚手架、不调用任何实现类 Skill。** 适用于所有项目，无论看起来多简单。

### Anti-Pattern
"It's too simple to need a design" — 简单项目才是未经检验假设造成浪费最多的地方。设计可以很短，但必须展示并获得批准。

### 标准流程
1. 探索项目上下文 — 检查文件、文档、最近提交
2. （如有视觉问题）提供 Visual Companion — 单独消息，不混杂其他内容
3. **一次只问一个问题**，理解目的 / 约束 / 成功标准
4. 提出 2-3 个方案，带权衡和推荐
5. **分段展示设计**，每段确认后再推进下一段
6. 写设计文档 — 保存到 `docs/superpowers/specs/YYYY-MM-DD-\<topic>-design.md`，提交 git
7. 自审 — 检查占位符、内在矛盾、范围
8. **用户审查书面规格后**才能继续
9. 触发 writing-plans Skill 进入实现阶段

### 关键原则
- **一次一问** — 不要用多个问题淹没用户
- **多选优于开放** — 更容易回答
- **YAGNI 严格** — 从所有设计中移除不必要的功能
- **探索替代方案** —  settles 前提出 2-3 个方法
- **增量确认** — 展示设计，获得批准，再推进

### Visual Companion
浏览器伴侣，用于展示模型、图表、视觉选项。当用户同意后，每個問題自己判断用浏览器还是终端——"看图比读文字更清楚吗？"是唯一标准。

---

## writing-plans — 详细实现计划模板

### 核心理念
写出完整实现计划，假设执行者对代码库零上下文、品味可疑、不太懂测试设计。

### 计划文件头（必须）
```markdown
# [Feature Name] Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** [一句话描述目标]

**Architecture:** [2-3 句方案描述]

**Tech Stack:** [关键技术/库]
```

### 任务结构
每个任务 = 2-5 分钟的步骤，格式：
```markdown
### Task N: [组件名]

**Files:**
- Create: `exact/path/to/file.py`
- Modify: `exact/path/to/existing.py:123-145`
- Test: `tests/exact/path/to/test.py`

- [ ] **Step 1: 写失败的测试**
  ```python
  def test_specific_behavior():
      result = function(input)
      assert result == expected
  ```

- [ ] **Step 2: 运行测试，确认失败**
  Run: `pytest tests/path/test.py::test_name -v`
  Expected: FAIL with "function not defined"

- [ ] **Step 3: 写最小实现**
  ```python
  def function(input):
      return expected
  ```

- [ ] **Step 4: 运行测试，确认通过**
  Run: `pytest tests/path/test.py::test_name -v`
  Expected: PASS

- [ ] **Step 5: 提交**
  ```bash
  git add tests/path/test.py src/path/file.py
  git commit -m "feat: add specific feature"
  ```

### 禁止占位符
- 不能有 "TBD"、"TODO"、"implement later"
- 不能有 "Add appropriate error handling"（必须有具体代码）
- 不能有 "Similar to Task N"（必须重复完整代码）
- 不能有只描述不展示的步骤

### 自审清单
1. **规格覆盖** — 规格的每个要求都能找到对应的任务吗？
2. **占位符扫描** — 搜索任何 "TBD/TODO/类似" 模式
3. **类型一致性** — 后期任务的类型/方法名是否与早期一致？

---

## subagent-driven-development — 子 Agent 驱动执行

### 核心理念
Fresh subagent per task + 两层审查（规格合规 → 代码质量）= 高质量、快迭代

### 何时用
- ✅ 有实施计划
- ✅ 任务基本独立
- ✅ 同一会话内执行

### 每个任务的标准流程
1. 读取计划，提取所有任务（含完整上下文）
2. **分派实施 subagent**（implementer-prompt.md）
   - Agent 可以提问（回答后再继续）
   - Agent 实现、测试、提交、自审
3. **分派规格审查 subagent**（spec-reviewer-prompt.md）
   - 确认代码是否符合规格
   - ❌ 有问题 → 回给实施者修复 → 重新审查
4. **分派代码质量审查 subagent**（code-quality-reviewer-prompt.md）
   - 检查硬伤、复杂度、测试质量
   - ❌ 有问题 → 修复 → 重新审查
5. 任务标记完成，下一个任务
6. 所有任务完成后，**总代码审查**
7. 触发 finishing-a-development-branch

### 模型选择策略
| 任务类型 | 模型选择 |
|---|---|
| 机械性实现（1-2 文件，规格清晰） | 最便宜最快的模型 |
| 集成与判断（多文件协调、调试） | 标准模型 |
| 架构、设计、审查 | 最强的模型 |

### 状态处理
- **DONE**：进入规格审查
- **DONE_WITH_CONCERNS**：读关注点再决定
- **NEEDS_CONTEXT**：提供缺失上下文，重新分派
- **BLOCKED**：评估原因——上下文问题 / 推理不足 / 任务太大 → 对应处理

### 红线（Never）
- ❌ 在 main/master 分支直接开始实现
- ❌ 跳过审查
- ❌ 规格合规未通过就进入代码质量审查（顺序错误）
- ❌ 多个实施 subagent 并行（冲突）
- ❌ 让 subagent 自己读计划文件（提供完整文本）
- ❌ "close enough" 就通过规格审查

---

## test-driven-development — 测试驱动开发

### 铁律
```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

没有先看到测试失败，就不能写实现代码。

### 红-绿-重构循环

**RED**：写一个最小测试，展示应该发生什么
**Verify RED**：运行测试，确认失败（失败原因 = 缺少功能，不是 typo）
**GREEN**：写最简单的代码让测试通过（不要多，不要"改进"）
**Verify GREEN**：运行测试，确认通过（所有测试都通过）
**REFACTOR**：清理（仅在 green 之后，去除重复、改善命名）

### 为什么顺序重要
- 测试写完后立即通过 = 什么都没证明
- 先写测试再实现 = 强制先发现边界情况
- "我已经手动测试了" ≠ 系统化测试

### 常见借口（全部无视）
- "太简单不需要测试" → 简单代码也会崩，测试只需 30 秒
- "之后再说" → 测试通过证明不了任何东西
- "删除 X 小时工作太浪费" → 沉没成本谬误
- "TDD 太教条" → TDD 本身就是实用的：比调试快

### 遇到困难？
| 问题 | 解法 |
|---|---|
| 不知道怎么测 | 写出你希望 API 长什么样，先写断言 |
| 测试太复杂 | 设计太复杂，简化接口 |
| 什么都得 mock | 代码太耦合，用依赖注入 |
| 测试 setup 太大 | 提取 helpers，还复杂就简化设计 |

---

## 与我脑子的关系

**Superpowers 不能替代我的 Obsidian 脑子**：
- 脑子 = 知识存储 + 检索
- Superpowers = AI 写代码时的工作流约束

**可以借鉴到我的 AI 工作流**：
1. **给我下任务前，先用 brainstorming 方式问自己**：我要做什么？为什么？怎样算成功？
2. **AI 写代码前，要求它先写测试**（TDD 意识）
3. **AI 完成后，用 spec review 验收**——不是 AI 说 OK 就 OK
4. **复杂任务让 AI 出 plan**，审批后再执行

---

## 来源
- GitHub: https://github.com/obra/superpowers
- 博客首发: https://blog.fsck.com/2025/10/09/superpowers/
- X 推文: https://x.com/xiangxiang103/status/2046845848244617468
