# 设计用于Claude Code的自我成长系统提示词集

## 执行摘要

本报告提出一套面向 Claude Code 的「自我成长系统提示词集」（Prompts & Templates），目标是让用户能把“人生目标—习惯—时间—学习—情绪—复盘—指标—推荐调整”这条闭环流程，落地为 **可复制粘贴、可参数化、可持续迭代** 的提示词与模板文件，并能在 Claude Code 中通过 **追加系统提示**、**分工子代理（subagents）**、**结构化输出** 或 **MCP 工具集成**进行执行与自动化。其核心设计遵循 Claude 官方提示工程建议：**指令清晰、提供上下文、控制输出结构、避免过度工程化**。citeturn9view0turn14view0

方法论层面，本系统将多种被广泛使用的理论框架组合为一条“从策略到执行”的流水线：以 SMART 作为可操作目标的质量门槛（具体、可衡量、可实现、相关、时限），以 OKR 将中期目标拆解为可追踪的关键结果，再通过习惯回路（触发—行为—奖励）与番茄工作法的节奏化执行，将任务转化为可日更的行动；学习侧用遗忘曲线与间隔重复将知识转为长期记忆；心理侧用 CBT/REBT 与情绪调节策略（如认知重评）做日常自我调节；复盘侧用 PDCA 与 AAR（行动后检讨）形成持续改进闭环；指标侧以 KPI 与量化自我思想构建仪表盘，最终由“个性化推荐与适应性调整”模块做动态调参（难度、节奏、工具链）。citeturn10view0turn10view1turn0search16turn4search2turn5search3turn10view2turn10view5turn7search2turn7search7

在 Claude Code 侧的落地方式建议优先采用 **`--append-system-prompt-file` 追加系统提示**（保留 Claude Code 内置能力且易版本控制），必要时再用 **`--agents` 定义子代理**做模块化分工；如需连接日历、任务、笔记、可穿戴设备等外部数据，则通过 Claude Code 的 MCP 能力连接“外部工具与数据源”，并注意第三方 MCP 服务器的信任与提示注入风险。citeturn14view0turn13view0turn13view1

---

## 理论与设计原则

### 目标体系与量化基准

SMART 目标强调目标必须具体、可衡量、可实现、相关且有时限，这套标准能显著提高目标的可执行性，尤其适合作为“提示词输出验收标准”。出处：Tableau 对 SMART 的解释与要素清单（链接见引用）。citeturn10view0

OKR（目标与关键结果）用于把“想要达成什么（Objective）”与“如何证明达成（Key Results）”绑定，使中期规划天然具备可衡量性与追踪动作。出处：亚马逊对 OKR 的定义（链接见引用），以及 Atlassian 的 OKR 指南与实践建议（链接见引用）。citeturn10view1turn0search16

KPI 通常指衡量绩效与成效的关键指标，用于把目标执行过程数据化；在个人成长系统中，KPI 可分为“领先指标（行为过程）”与“滞后指标（结果）”。出处：维基百科对 KPI 的定义（链接见引用）。citeturn7search2

### 行为改变与节奏化执行

“习惯回路（触发/暗示—惯常行为—奖赏）”提供了一种可操作的行为改变分解方式，特别适合写成提示词中的结构化字段（Cue/Routine/Reward）。出处：entity["book","习惯的力量","charles duhigg"]的中文介绍条目明确提到暗示、惯常行为与奖赏三要素（链接见引用）。citeturn4search7turn4search10turn4search16

番茄工作法由entity["people","Francesco Cirillo","pomodoro inventor"]在 1980 年代提出，典型做法是用定时器将工作切成约 25 分钟专注段与短休息段，以对抗时间压力并提升可持续专注。出处：中文维基百科与 Pomodoro Technique 官方站（链接见引用）。citeturn0search3turn9view4turn4search21

### 学习与知识管理

遗忘曲线由entity["people","赫尔曼·艾宾浩斯","psychologist"]提出，用曲线描述记忆随时间衰退的规律；它构成“间隔复习/间隔重复”的直觉基础：在快要忘记之前复习能显著改善长期记忆保持。出处：遗忘曲线条目与 spaced repetition 综述（链接见引用）。citeturn10view3turn2search19turn2search0

笔记与知识管理侧，卡片盒笔记法（Zettelkasten）强调用“卡片索引与链接”串联笔记，形成可生长的知识网络；康奈尔笔记法用结构化页面布局把记录、整理、复习融为一体；PARA 强调用 Projects/Areas/Resources/Archive 四类组织数字信息，以提高可检索与可复用性。出处：卡片盒笔记法条目、康奈尔笔记法条目、Forte Labs 对 PARA 的官方说明（链接见引用）。citeturn9view6turn6search1turn9view5

### 情绪与心理调节

认知行为疗法（CBT）强调识别并改变认知扭曲与适应不良行为来改善情绪调节与应对策略，适合转化为“自我对话提示词”的结构化练习（事件—想法—情绪—替代解释—行动）。出处：CBT 词条（链接见引用）。citeturn10view4

情绪调节研究常区分多种策略，其中“认知重评（reappraisal）”与“表达抑制（suppression）”是高频策略；在提示词设计上，可把它们变成“快速调节工具箱”的可选模块。出处：情绪调节条目对策略与主要文献线索的概述（链接见引用）。citeturn5search3

理性情绪行为疗法（REBT）由entity["people","Albert Ellis","clinical psychologist"]提出，其 ABCDEF 框架适合用于“把情绪从事件中解耦”的提示词模板。出处：Ellis 词条对 ABCDEF 的说明（链接见引用）。citeturn5search1

正念减压（MBSR）常被描述为一个为期八周、以正念练习为核心、具有实证基础的训练课程框架，可作为日常身心调节模块之一。出处：觉察减压（MBSR）条目（链接见引用）。citeturn5search2

### 复盘与持续改进

PDCA（Plan-Do-Check-Act）强调按规划、执行、检查与行动循环推进，以持续改进为目标，适合作为“周/月/季度复盘提示词”的骨架。出处：PDCA 条目（链接见引用）。citeturn10view2

行动后检讨（AAR）起源于entity["organization","美国陆军","us army"]，通过对预期与实际结果进行专业检讨来改进行动，在个人成长系统中可作为复盘会议脚本。出处：行动后检讨条目（链接见引用）。citeturn10view5

持续改善（Kaizen）强调长期、稳定、不断改进，可作为“适应性调整”的价值观约束（优先小步试验而非大爆改）。出处：改善法条目（链接见引用）。citeturn8search4

---

## Claude Code 系统架构与提示策略

### 在 Claude Code 中承载提示词系统

Claude Code 支持用四类标志定制系统提示：完全替换（`--system-prompt` / `--system-prompt-file`）与追加（`--append-system-prompt` / `--append-system-prompt-file`）；官方建议大多数情况下优先使用“追加”以保留内置功能并叠加自定义要求。出处：Claude Code CLI 参考对四类标志的说明与推荐（链接见引用）。citeturn14view0

当你需要模块化分工（例如“目标设计师”“习惯教练”“学习规划师”等），可用 `--agents` 在运行时通过 JSON 定义 subagents（含 description、prompt、tools、model 等字段）。出处：CLI 参考对 `--agents` 格式的说明（链接见引用）。citeturn14view0

当你希望把输出强约束为可被脚本消费的数据（如 JSON），Claude Code 的打印模式支持 `--json-schema` 获得匹配 JSON Schema 的验证输出，这对“仪表盘/指标计算/周报结构化”特别关键。出处：CLI 参考对 `--json-schema` 的说明（链接见引用）。citeturn14view0

若需要连接外部工具与数据源（例如日历、任务、笔记、数据库或 API），Claude Code 可通过 MCP 连接到数百种外部工具与数据源；文档同时提示使用第三方 MCP servers 存在信任与提示注入风险，需要谨慎选择并进行策略限制。出处：Claude Code MCP 文档与 Anthropic 的 MCP 介绍（链接见引用）。citeturn13view0turn13view1

长周期使用时，一个关键工程问题是“上下文膨胀”。entity["company","Anthropic","ai company"]的工程文章指出，在 Claude Code 场景中会通过“总结与压缩关键信息”的方式保留架构决策与未解决问题，从而在上下文窗口限制下仍保持连续性。这启示我们把成长系统的“长期记忆”外置到文件（profile、metrics、logs、reviews），而对话仅做短期控制。出处：Anthropic 工程文章（链接见引用）。citeturn9view3

### 系统组件与数据流

```mermaid
flowchart TD
  U[用户输入\n(目标/约束/情绪/数据)] --> P[提示词路由器\n(根据标签/模式选择模板)]
  P --> G[目标模块\nSMART/OKR/三层目标]
  P --> H[习惯模块\n触发-行为-奖励]
  P --> T[时间模块\n番茄钟/日程块]
  P --> L[学习模块\n笔记/间隔重复]
  P --> E[情绪模块\nCBT/REBT/正念]
  P --> R[复盘模块\nAAR/PDCA]
  P --> M[指标模块\nKPI/仪表盘]

  G --> S[(本地数据仓库\nMarkdown/CSV/JSON)]
  H --> S
  T --> S
  L --> S
  E --> S
  R --> S
  M --> S

  S --> A[适应性调整\n(规则+试验+回归)]
  A --> G
  A --> H
  A --> T
  A --> L
  A --> E

  S --> X[MCP/外部工具\n(日历/任务/笔记/可穿戴)]
  X --> S
```

### 不同提示策略对比

下表给出四类常用提示策略在“准确性、可控性、灵活性、实现难度”的相对对比。这里的评价是工程经验性总结，落地前应结合你的具体目标与数据进行小规模验证；其中“清晰指令 + 充分上下文 + 输出约束”的原则与 Claude 官方建议一致。citeturn9view0

| 提示策略 | 核心做法 | 准确性 | 可控性 | 灵活性 | 实现难度 | 典型适用 | 主要风险 |
|---|---|---|---|---|---|---|---|
| 指令式 | 直接列规则、步骤、输出格式 | 中-高 | 高 | 中 | 低 | 日计划、复盘清单、结构化输出 | 过度僵化；对边界条件覆盖不足 |
| 示例式（Few-shot） | 给 1–3 组良好示例 | 高 | 中 | 中-高 | 中 | 目标拆解风格统一、周报写作模板 | 示例漂移导致模型“照抄”而不思考 |
| 链式提示（分步/流水线） | 多轮：分析→计划→执行→检查 | 高 | 高 | 高 | 高 | 端到端成长系统、数据驱动迭代 | 成本与长度上升；需要状态管理 |
| 反思式（自检/对照约束） | 先生成，再自检/对照标准修订 | 高 | 中-高 | 中 | 中-高 | OKR/KPI 合规检查、复盘改进 | 过度反思带来延迟；可能“改到跑题” |

### 模型参数与“思考模式”使用建议

Claude 官方文档强调：如果启用扩展思考/思考能力，应把它用于复杂的多步推理任务；并且在启用思考时，与 `temperature` 或 `top_k` 的修改不兼容，`top_p` 也应遵守特定范围。出处：扩展思考文档（链接见引用）。citeturn9view1

另外，最新提示工程建议提到自适应思考（adaptive thinking）以及通过 `effort` 与任务复杂度共同校准“思考强度”的思路，适合用在“季度规划/复盘诊断/个性化调参”这类高复杂度任务。出处：提示词最佳实践（链接见引用）。citeturn9view0

在本报告的每个模板中，我会给出两套参数建议：
1) **偏稳定/偏执行**：用于产出一致、可控的计划与表格；
2) **偏探索/偏创造**：用于生成备选方案、洞察与推荐。

---

## 提示词模板库

本节每个维度提供：可复制粘贴模板、变量与默认值、参数建议、示例输入/输出、适用场景与限制。模板默认采用 `{{变量}}` 形式，便于你在 Claude Code 中手动替换，或用脚本生成最终提示。

为减少“提示词膨胀”，每个模板均建议用“短版（直接执行）/长版（含约束自检）”两档复杂度：短版适合日常高频调用，长版适合首次建模或复盘重构。此做法与“清晰指令、控制输出结构、加入必要上下文”的通用原则一致。citeturn9view0

### 目标设定（长期/中期/短期）

#### 可复制模板（目标三层生成器：Vision → OKR → Sprint）

```text
# [GOAL_3L] 目标三层生成器（长期/中期/短期）
你是“个人成长规划师”。你的任务：把用户输入转化为三层目标体系，并保证每个关键结果满足SMART。

【用户画像】
- 角色/阶段：{{role}}
- 当前状态摘要：{{current_state}}
- 可投入时间：{{time_budget_per_week}} 小时/周
- 硬约束（不可违背）：{{hard_constraints}}
- 偏好（偏好节奏/工具/环境）：{{preferences}}

【成长主题与动机】
- 主题：{{theme}}
- 为什么重要：{{why_it_matters}}
- 价值观/长期愿景关键词：{{values_keywords}}

【输出要求】
A. 长期目标（1-3年）：1个“愿景陈述” + 3-5个支柱领域（Areas）+ 每个领域1个北极星指标（North Star Metric）
B. 中期目标（接下来{{okr_horizon}}）：用OKR格式输出（O + 2-4个KR/每个KR可衡量且有截止时间）
C. 短期目标（接下来{{sprint_horizon}}）：给出可执行的周/双周冲刺计划：
   - 每周1-3个聚焦主题
   - 每天最少行动（Minimum Viable Action）
   - 风险与应对（至少3条）
   - “放弃清单”（本周期不做什么）
D. 质量检查：逐条检查KR是否符合SMART，不符合则改写并说明改写原因（简短）
E. 输出格式：先给一段100-150字摘要，然后用Markdown分节输出（A/B/C/D）。

【开始】
请根据以上信息生成计划。如果信息不足，先列出不超过5个关键澄清问题，并给出“在缺省情况下你将如何假设”的默认假设清单。
```

#### 可配置变量与默认值

| 变量 | 含义 | 默认值 | 备注/取值建议 |
|---|---|---|---|
| `role` | 用户角色/人生阶段 | `职场人士` | 例：学生/创业者/自由职业 |
| `current_state` | 当前状态摘要 | `未提供` | 可由一次访谈生成 |
| `time_budget_per_week` | 每周可投入时间 | `6` | 建议填整数 |
| `hard_constraints` | 硬约束 | `工作日每晚≤1h；周末≤3h` | 时间/健康/家庭等 |
| `preferences` | 偏好 | `偏好低摩擦工具；可接受每周复盘` | 可含工具偏好 |
| `theme` | 成长主题 | `未提供` | 例：英语/身体/职业转型 |
| `why_it_matters` | 动机 | `未提供` | 建议写“因为…” |
| `values_keywords` | 价值观关键词 | `健康,自由,专业` | 3–7个词 |
| `okr_horizon` | OKR 周期 | `季度` | 月度/季度/半年 |
| `sprint_horizon` | 冲刺周期 | `2周` | 1周/2周 |

#### 提示词长度与复杂度建议
短版（无质量检查D）建议 250–500 中文字；长版建议 600–1200 中文字（含自检与风险/放弃清单），用于首次建模或季度开始。citeturn9view0

#### 模型参数建议
- 偏稳定/执行：`temperature=0.2~0.4, top_p=1`
- 偏探索/创造（更多备选KR与策略）：`temperature=0.6~0.8, top_p=0.95~1`
- 若使用“思考模式”做季度规划：建议启用并提高 effort；注意启用思考时不应再改 temperature/top_k。citeturn9view1turn9view0

#### 示例输入

```text
role=产品经理（工作5年）
current_state=工作忙、英语听说弱、运动断断续续；希望一年内拿到更好的机会
time_budget_per_week=7
hard_constraints=工作日每晚最多1小时；周六上午可2小时；睡眠≥7小时
preferences=喜欢番茄钟；用Markdown记笔记；不想装太多App
theme=英语能力+职业竞争力
why_it_matters=希望一年内能自信参与英文会议并争取国际化岗位
values_keywords=成长,健康,自由
okr_horizon=季度
sprint_horizon=2周
```

#### 示例输出（节选）

```text
摘要：你接下来12周的核心目标是把“可衡量的英语输出能力”嵌入每周节奏，同时用最小可行动作保证连续性，并用OKR追踪关键结果，避免只做输入不做输出。

A. 长期目标（1-3年）
- 愿景：成为能用英语高质量沟通并具备国际化产品能力的产品负责人
- 支柱领域与北极星指标：
  1) 英语沟通：每月完成≥4次10分钟口语输出并获得反馈
  2) 产品能力：每季度输出1份可公开的英文产品分析
  3) 健康精力：每周运动≥3次

B. 中期OKR（本季度）
O1：把英语从“被动输入”升级为“可验证输出”
KR1：12周内完成≥24次10分钟口语录音并标注改进点（截止：第12周）
KR2：完成≥12次英文会议跟读复述，复述稿≥150词（截止：第12周）
KR3：完成1份英文产品案例分析（≥800词）并请1人审阅（截止：第12周）

C. 2周冲刺
- Week1主题：建立最小输出链路（每天10分钟）
- Week2主题：加入反馈闭环（每周1次外部反馈）
...
D. SMART检查（略）
```

#### 适用场景与限制
适用于首次建计划、季度/月度重置、目标散乱需要“统一口径与量化”。其限制是：如果用户输入过于空泛（无主题/无约束/无动机），模型会产生“看起来完整但不可执行”的计划；因此模板强制先提少量澄清问题。SMART 与 OKR 的使用逻辑见前述理论出处。citeturn10view0turn10view1

---

### 习惯养成（触发-行为-奖励）

#### 可复制模板（习惯回路设计器）

```text
# [HABIT_LOOP] 习惯回路设计器（触发-行为-奖励）
你是“习惯教练”。目标：把用户想养成的习惯设计成可执行的习惯回路，并给出最小行动与失败预案。

【输入】
- 想养成/改变的习惯：{{habit_name}}
- 期望频率：{{frequency}}
- 典型触发场景（时间/地点/前置行为/情绪）：{{typical_cues}}
- 主要阻力（为什么做不到）：{{main_friction}}
- 用户可用资源（时间/环境/支持者/工具）：{{resources}}
- 可接受的奖励方式：{{reward_options}}

【输出】
1) 习惯回路（Cue / Routine / Reward）：
   - Cue：写成“如果…那么…”（Implementation intention）
   - Routine：拆成“最小版本/标准版本/加强版本”
   - Reward：给出立即奖励 + 延迟奖励（各1-2个）
2) 环境设计：需要移除什么摩擦？增加什么提示？
3) 追踪方式：一个最小指标 + 一个质量指标
4) 失败预案：列出3种常见失败情境，并给“低成本恢复动作”
5) 两周实验计划：每天做什么、每周如何调整
6) 输出格式：Markdown，包含一个可复制的“每日打卡行模板”。

【约束】
- 不要给空泛口号；每条建议必须能在现实中执行。
- 如果用户习惯与健康/心理风险相关，提醒寻求专业支持并避免给诊断。
```

#### 可配置变量与默认值

| 变量 | 含义 | 默认值 |
|---|---|---|
| `habit_name` | 习惯名称 | `每天走路` |
| `frequency` | 频率 | `每天` |
| `typical_cues` | 触发场景 | `午饭后，回到工位前` |
| `main_friction` | 主要阻力 | `容易忘、没动力` |
| `resources` | 可用资源 | `手机计时器；同事可一起` |
| `reward_options` | 奖励选项 | `喝一杯喜欢的饮品/听一首歌` |

#### 长度与复杂度建议
建议 400–900 中文字（需要覆盖失败预案与两周实验计划）。习惯回路三要素的理论骨架来自“暗示—惯常行为—奖赏”。citeturn4search7turn4search16

#### 模型参数建议
- 偏稳定：`temperature=0.3~0.5`
- 偏探索（生成多个奖励与环境设计方案）：`temperature=0.7~0.9`

#### 示例输入

```text
habit_name=每天英语口语10分钟
frequency=每周5天
typical_cues=早餐后坐到书桌前；或通勤地铁上
main_friction=容易拖延；怕说错
resources=手机录音；有1个朋友愿意每周听一次
reward_options=看10分钟短视频；喝咖啡
```

#### 示例输出（节选）

```text
1) 习惯回路
- Cue（如果…那么…）：
  如果我早餐后坐到书桌前并打开电脑，那么我立刻打开录音并说英语2分钟（最小版本）
- Routine：
  最小版本：2分钟口述当天计划
  标准版本：10分钟跟读+复述
  加强版本：10分钟复述后写3条改进点
- Reward：
  立即奖励：打卡✅ + 允许喝咖啡
  延迟奖励：本周累计5次→周末看一部电影

4) 失败预案
- 情境：早上来不及 → 恢复动作：通勤时做2分钟最小版本
...
```

#### 适用场景与限制
适用于“想做但做不到”的行为设计与低摩擦启动；限制在于它依赖用户对触发场景与阻力的真实描述，否则回路会“纸上可行”。citeturn4search7turn4search16

---

### 时间管理与番茄钟

#### 可复制模板（日计划：时间块 + 番茄钟排程器）

```text
# [TIME_POMODORO_DAY] 日计划排程器（时间块/番茄钟）
你是“时间管理与专注教练”。目标：把用户的一天安排成可执行的时间块，并用番茄钟组织深度工作。

【输入】
- 日期：{{date}}
- 今日可用总时长：{{available_hours}} 小时
- 固定日程（会议/通勤/家庭）：{{fixed_events}}
- 今日优先事项（最多3个）：{{top_priorities}}
- 今日杂务清单：{{admin_tasks}}
- 精力曲线（高/中/低时段）：{{energy_pattern}}
- 番茄钟参数：{{pomodoro_focus_min}}/{{pomodoro_break_min}}，每{{pomodoro_set_size}}个后长休息{{pomodoro_long_break_min}}分钟
- 干扰源与边界：{{distraction_sources}}

【输出】
1) 今日一页计划（One-page plan）：3个最重要成果（Outcome）+ 对应行动
2) 时间块日程（按时间顺序列出，含开始/结束）
3) 番茄钟清单：每个番茄对应任务、完成定义、预估番茄数
4) 中断处理协议：被打断时如何记录、如何恢复
5) 结束仪式：收尾10分钟要做什么（清理/记录/为明天铺垫）

【约束】
- 如果任务明显超载，请主动删减并说明取舍。
- 优先把高认知任务放在高精力时段。
- 输出必须可直接复制到日记或任务系统里。
```

#### 变量与默认值

| 变量 | 默认值 |
|---|---|
| `available_hours` | `6` |
| `pomodoro_focus_min` | `25` |
| `pomodoro_break_min` | `5` |
| `pomodoro_set_size` | `4` |
| `pomodoro_long_break_min` | `15` |

番茄工作法常见的 25/5 与每 4 轮后长休息的做法在多份资料中被描述为典型配置。出处：中文维基百科、Duke 学术资源中心与官方站点（链接见引用）。citeturn0search3turn4search21turn9view4

#### 模型参数建议
- 偏稳定：`temperature=0.2~0.4`（减少花哨）
- 偏探索：`temperature=0.6~0.8`（生成多套日程备选）

#### 示例输入

```text
date=2026-03-10
available_hours=7
fixed_events=10:00-11:00 周会；12:00-13:00 午饭；18:30后家庭时间
top_priorities=完成英文产品分析大纲；健身；处理2个关键邮件
admin_tasks=报销；整理文件
energy_pattern=上午高、下午中、晚间低
pomodoro_focus_min=25
pomodoro_break_min=5
pomodoro_set_size=4
pomodoro_long_break_min=15
distraction_sources=手机消息；临时会议
```

#### 示例输出（节选）

```text
时间块日程
- 08:30-09:50 深度工作块A（3个番茄）：英文产品分析大纲
- 09:50-10:00 缓冲/记录
- 10:00-11:00 周会
...

中断处理协议
- 打断发生→立刻写一行“中断票据”：谁/什么/需要我何时处理
- 当前番茄若剩余<5分钟→直接完成；否则标记“未完成”，休息后优先做1个“恢复番茄”
```

#### 适用场景与限制
适用于把“任务清单”转成“可执行日程”，并对抗碎片化干扰；限制在于：若固定日程频繁变化，建议加入更大的缓冲块与“中断票据”机制。番茄法的基本定义与来源见前述引用。citeturn0search3turn9view4

---

### 学习计划与知识管理（笔记/间隔重复）

#### 可复制模板（学习工程师：学习计划 + 笔记系统 + 间隔重复）

```text
# [LEARN_KM] 学习计划与知识管理（笔记/间隔重复）
你是“学习工程师”。目标：把用户想学的主题做成一个可持续的学习系统（目标→资源→练习→产出→复习）。

【输入】
- 学习主题：{{learning_topic}}
- 当前水平：{{current_level}}
- 目标水平与期限：{{target_level_and_deadline}}
- 每周学习时间：{{study_hours_per_week}} 小时
- 可用材料/课程/书单：{{resources_list}}
- 输出要求（要产出什么作品）：{{outputs}}
- 笔记工具偏好：{{note_tool}}
- 复习工具偏好（如卡片/Anki）：{{srs_tool}}

【输出】
A) 学习目标：用SMART写3-5条（含衡量方式）
B) 课程/主题地图：拆成模块，每模块“输入→练习→输出”
C) 笔记流程（二选一，并说明理由）：
   1) 康奈尔笔记：记录区/线索区/总结区 + 每周回顾流程
   2) 卡片盒笔记：原子笔记 + 双向链接 + 标签策略
D) 间隔重复方案：
   - 哪些内容要做成卡片
   - 每天复习配额
   - “忘记曲线→复习间隔”的直觉解释（用用户听得懂的语言）
E) 每周节奏表：具体到每天做什么（含最小版本）
F) 风险与纠偏：列出3个学习失败模式与对策
输出格式：Markdown（含一张“每周学习节奏表”）

【约束】
- 不要堆资源清单；宁可少而精，强调可执行。
- 学习计划必须包含“输出”与“复习”，否则视为不合格。
```

#### 变量与默认值

| 变量 | 默认值 | 理论支撑出处 |
|---|---|---|
| `study_hours_per_week` | `5` | — |
| `note_tool` | `Markdown` | — |
| `srs_tool` | `Anki` | 间隔重复的证据性综述与遗忘曲线：citeturn10view3turn2search19 |

康奈尔笔记法与卡片盒笔记法的定义来源见各自条目；PARA 作为数字信息组织法可作为“笔记文件夹与归档策略”。citeturn6search1turn9view6turn9view5

#### 模型参数建议
- 偏稳定：`temperature=0.3~0.5`
- 偏探索（生成多套学习路径/项目式输出选题）：`temperature=0.7~0.9`

#### 示例输入

```text
learning_topic=数据分析（SQL+统计基础）
current_level=会写简单SQL；统计基础薄弱
target_level_and_deadline=6个月内能独立完成一份数据分析报告并做汇报
study_hours_per_week=6
resources_list=公司数据平台文档；一本统计入门书；一门SQL进阶课程
outputs=每月1份分析报告（含图表与结论）
note_tool=Markdown
srs_tool=Anki
```

#### 示例输出（节选）

```text
A) SMART目标（示例）
- 在第8周前，完成一个包含3个业务问题、5张图表、>800字结论的数据分析报告（可由同事复核）
...

C) 笔记流程选择：卡片盒笔记
- 原子笔记：每条笔记只回答一个问题（例如“什么是p值？”）
- 链接：把“假设检验”链接到“显著性水平”“p值”“第一类错误”
...

D) 间隔重复
- 做卡片内容：SQL语法陷阱、统计概念定义、常用检验条件
- 每日复习配额：新卡10张；复习上限40张
```

#### 适用场景与限制
适用于知识型目标（语言、考试、技能学习、专业转型）。限制在于：间隔重复效果高度依赖卡片质量与持续复习；模板强调“把概念做成原子卡片并按计划复习”，背后的遗忘曲线与间隔重复依据见引用。citeturn10view3turn2search19

---

### 情绪与心理调节

#### 可复制模板（情绪自检与调节：CBT/REBT + 情绪调节策略）

```text
# [EMO_REG] 情绪与心理调节（日常自助）
你是“情绪调节教练”，面向日常压力与情绪波动提供结构化自助支持（不做诊断）。

【输入】
- 当前情绪（1-2个词）：{{emotion_words}}
- 强度（0-10）：{{intensity_0_10}}
- 触发事件（简述）：{{trigger_event}}
- 自动想法（脑中第一句话）：{{automatic_thought}}
- 身体感受：{{body_sensations}}
- 我此刻最担心的后果：{{catastrophic_prediction}}
- 我希望达到的状态：{{desired_state}}

【输出】
1) 共情与澄清：用1-2句话复述并确认（不评判）
2) ABC/ABCDE结构（CBT/REBT风格）：
   A 事件；B 信念/解释；C 情绪与行为冲动；D 质疑/替代解释；E 新行动
3) 情绪调节工具箱（从以下挑3个）：
   - 认知重评：给出2个更平衡的解释
   - 注意力转移：20分钟可做的低成本行动
   - 表达：写下3句“允许自己…”的句子
   - 正念一分钟：呼吸/身体扫描（简短指导）
4) 行动承诺：给出一个“5分钟内能做”的下一步
5) 风险提示：若用户提及自伤/持续严重症状，提示联系专业帮助与身边支持（不展开医疗建议）
输出格式：Markdown，条理清晰，避免说教。
```

#### 变量与默认值

| 变量 | 默认值 |
|---|---|
| `intensity_0_10` | `6` |
| `emotion_words` | `焦虑` |
| `desired_state` | `平静且能继续做事` |

此模板综合：CBT 的“认知—行为—情绪”干预思想（出处：CBT 条目）与情绪调节策略（如认知重评/表达抑制；出处：情绪调节条目），并可选引入 MBSR 式的短正念练习（出处：MBSR 条目）。citeturn10view4turn5search3turn5search2

#### 模型参数建议
- 偏稳定：`temperature=0.2~0.4`（更安全、少联想）
- 不建议高温度，以避免不恰当扩展与“过度自信建议”。

#### 示例输入

```text
emotion_words=焦虑,挫败
intensity_0_10=8
trigger_event=今天会上被质疑方案，领导说“你准备不充分”
automatic_thought=我太差了，大家都觉得我不行
body_sensations=心跳快，胸口紧
catastrophic_prediction=这会影响晋升甚至被边缘化
desired_state=冷静下来，能补救并继续推进
```

#### 示例输出（节选）

```text
1) 我听到的是：你在会上被当众质疑后，脑中立刻把它解读成“我不行/会被否定”，身体也进入了强烈的紧绷状态。

2) ABCDE
A：会上被质疑“准备不充分”
B：我太差了；大家都觉得我不行
C：焦虑(8/10)；想逃避；回去后反复回想
D：证据是什么？是否存在其他解释？（例如：对方在挑战方案而不是否定你这个人）
E：下一步：用15分钟列出3条补充数据，约一个短会对齐

3) 工具箱（3选）
- 认知重评：……
- 注意力转移：……
- 正念一分钟：……
```

#### 适用场景与限制
适用于日常压力、焦虑、挫败、愤怒等情绪波动的自助梳理；限制在于它不能替代临床诊断与治疗，若出现持续严重抑郁/焦虑或自伤风险，应尽快寻求专业帮助。CBT、情绪调节与 MBSR 的概念出处见引用。citeturn10view4turn5search3turn5search2

---

### 反馈与复盘（周/月/季度）

#### 可复制模板（复盘主持人：AAR + PDCA 一体化）

```text
# [REVIEW_RETRO] 周/月/季度复盘（AAR+PDCA）
你是“复盘主持人”。目标：让用户把经历转化为可执行的改进计划，并输出下一周期的调整。

【输入】
- 复盘周期：{{period}}（周/月/季度）
- 计划目标摘要（期初写的）：{{planned_objectives}}
- 实际结果与数据：{{actual_results_and_metrics}}
- 关键事件（最多5条）：{{key_events}}
- 情绪与能量概览：{{mood_energy_summary}}
- 本周期最大痛点：{{biggest_pain}}
- 本周期最大收获：{{biggest_win}}

【输出】
1) AAR四问
   - 期望发生什么？
   - 实际发生什么？
   - 为什么会这样？（找关键因子，不找借口）
   - 下次怎么做？（3条可执行改进）
2) PDCA
   - Plan：下周期的3个改进假设
   - Do：每个假设的具体行动（能打卡）
   - Check：每周检查的指标与阈值
   - Act：若未达阈值，触发的调整规则
3) 复盘结论摘要：100字以内
4) 输出“下周期行动清单”：不超过10条，按优先级排序
输出格式：Markdown + 可复制的“下周期检查清单”
```

#### 变量与默认值

| 变量 | 默认值 |
|---|---|
| `period` | `周` |

AAR 的定义强调检讨预期与实际并改进行动；PDCA 强调持续改进循环。出处：行动后检讨条目、PDCA 条目（链接见引用）。citeturn10view5turn10view2

#### 模型参数建议
- 偏稳定：`temperature=0.2~0.4`（复盘需要一致性与克制）
- 若做季度复盘并启用思考：提高 effort；并遵守思考模式与采样参数兼容性限制。citeturn9view1turn9view0

#### 示例输入

```text
period=周
planned_objectives=本周完成英语口语5次；运动3次；写完英文案例分析大纲
actual_results_and_metrics=口语3次；运动2次；大纲完成60%
key_events=临时加班2天；周三睡眠不足；周末有家庭聚会
mood_energy_summary=周中焦虑高，周末回升
biggest_pain=临时任务打乱节奏
biggest_win=即使加班也完成了3次最小口语
```

#### 示例输出（节选）

```text
AAR：为什么没达成？
- 关键因子1：缺少“加班日预案”，导致口语与运动被完全挤掉
- 关键因子2：睡眠不足→精力崩→自控下降

PDCA-Plan（下周假设）
H1：如果为加班日预设“2分钟最小口语”，则口语完成次数≥5
...
```

#### 适用场景与限制
适用于周/月/季度复盘、项目复盘、习惯失败后的“无责纠偏”。限制在于：若没有任何数据或事件记录，复盘会变成主观感受；建议至少保留最小日志（见后续“仪表盘模板”）。citeturn10view5turn10view2

---

### 量化指标与可视化仪表盘

#### 可复制模板（个人KPI与仪表盘设计器）

```text
# [DASH_KPI] 量化指标与仪表盘（个人版）
你是“个人数据分析师”。目标：将用户的成长计划转成可追踪指标、数据字典与仪表盘草案。

【输入】
- 目标体系摘要（长期/OKR/冲刺）：{{goal_system}}
- 可获取数据源（手动/自动）：{{data_sources}}
- 用户关心的维度：{{dimensions}}
- 更新频率：{{update_cadence}}（每日/每周/每月）
- 可视化偏好：{{viz_preferences}}（表格/折线/热力图/进度条）

【输出】
1) 指标清单（按目标对齐）
   - 每个指标：定义、公式、数据来源、更新频率、阈值（绿/黄/红）
2) 领先指标 vs 滞后指标分类
3) 数据结构建议
   - 最小CSV字段（日期、指标名、值、备注）
   - 可选：JSON事件日志字段
4) 仪表盘草图（Markdown）
   - 本周得分（scorecard）
   - 关键趋势（3条）
   - 风险预警（触发条件）
5) 反作弊与副作用检查：指标可能带来的扭曲行为是什么？如何防止？
输出格式：Markdown + 一个可复制的CSV表头 + 一段“每周录入模板”
```

#### 变量与默认值

| 变量 | 默认值 | 依据 |
|---|---|---|
| `update_cadence` | `每周` | KPI 概念与“仪表盘”关联：citeturn7search2 |
| `viz_preferences` | `表格+折线` | 量化生活强调数据收集与可视化：citeturn7search7 |

KPI 的基本定义见维基百科；量化生活（Quantified Self）强调将生活参数数据化并进行可视化与反思，也提醒可能出现的“被数据裹挟”等风险。出处：KPI 条目与量化生活条目（链接见引用）。citeturn7search2turn7search7

#### 模型参数建议
- 偏稳定：`temperature=0.2~0.4`
- 偏探索（提出更多指标与可视化想法）：`temperature=0.6~0.8`

#### 示例输入

```text
goal_system=本季度OKR：英语输出+运动；2周冲刺：每天最小口语2分钟
data_sources=手动打卡；手机计步；日历会议时长
dimensions=英语输出、运动、睡眠、专注
update_cadence=每周
viz_preferences=热力图+进度条
```

#### 示例输出（节选）

```text
指标清单（示例）
- 英语口语次数（领先）：每次≥2分钟录音记1次；每周阈值：绿≥5 黄=3-4 红≤2
- 英文作品产出（滞后）：每月完成1份≥800词分析

CSV表头
date,metric,value,note
```

#### 适用场景与限制
适用于“想要数据驱动又不想复杂化”的个人成长仪表盘设计；限制在于自动化程度取决于数据源与集成能力，且需要对指标副作用做检查以避免“为了分数而刷分”。citeturn7search7turn7search2

---

### 个性化推荐与适应性调整

#### 可复制模板（自适应调参器：基于数据与约束更新计划）

```text
# [ADAPTIVE_TUNE] 个性化推荐与适应性调整（调参器）
你是“自适应成长系统控制器”。目标：根据最新数据与约束变化，更新下一周期计划，遵循小步持续改进。

【输入】
- 当前目标体系与执行策略：{{current_plan}}
- 最近{{window}}的数据摘要（指标/日志/情绪）：{{recent_data}}
- 约束变化：{{constraint_changes}}
- 用户反馈（主观体验）：{{user_feedback}}
- 不可动摇原则：{{non_negotiables}}
- 想尝试的方向：{{experiments_wanted}}

【输出】
1) 偏差诊断：目标—行为—指标之间哪里断链？（最多3条）
2) 根因假设：每条偏差给1-2个最可能原因（可验证）
3) 调参建议（按影响/成本排序）
   - 难度调参：把某习惯拆小/合并/换触发点/换奖励
   - 节奏调参：番茄钟长度、每周投入时间、休息配置
   - 环境调参：移除摩擦/增加提示
4) 两周实验设计：每个实验包含 假设-行动-指标-停止规则
5) 输出更新后的“下周计划”（可直接执行）
6) 失败保护：如果连续3天失败，触发“降级模式”如何运作
输出格式：Markdown + 一段100字摘要

【约束】
- 遵循持续改善（Kaizen）：优先小步试验，避免一次性大改导致系统崩溃。
- 若输出涉及外部工具集成，给出“无集成也能执行”的备选方案。
```

#### 变量与默认值

| 变量 | 默认值 | 依据 |
|---|---|---|
| `window` | `14天` | Kaizen 的持续改进思想：citeturn8search4 |
| `non_negotiables` | `睡眠>=7小时` | 可自定义 |

#### 模型参数建议
- 偏稳定（像“控制器”）：`temperature=0.2~0.4`
- 偏探索（提出更多实验与备选路径）：`temperature=0.6~0.8`
- 若启用思考能力用于复杂诊断：提高 effort；并遵守思考模式兼容性规则。citeturn9view1turn9view0

#### 示例输入

```text
current_plan=OKR：英语口语每周5次；运动3次；番茄钟25/5
recent_data=口语连续2周只完成3次；运动保持2-3次；周中加班增多；情绪焦虑上升
constraint_changes=项目上线期，晚间时间被压缩
user_feedback=我不是不想做，是一到加班就完全断掉
non_negotiables=睡眠>=7小时；家庭时间不牺牲
experiments_wanted=想更轻量的口语方式
```

#### 示例输出（节选）

```text
偏差诊断
1) 触发断链：原触发“早餐后书桌”在加班周被破坏
根因假设：没有“加班日替代触发”，导致系统脆弱

调参建议（Top 3）
- 把“口语10分钟”降级为“2分钟最小口语”，并绑定通勤触发
- 设定“加班日协议”：只做最小版本+周末补一次标准版本
...
```

#### 适用场景与限制
适用于节奏变化期（加班、旅行、考试周）、连续失败后的系统修复、以及从“靠意志力”迁移到“靠系统”。限制在于：若数据质量太差（无日志/无指标）只能做主观推断；建议至少保留最小打卡与事件摘要。citeturn8search4turn7search7

---

## 外部工具与数据源

### 优先级排序与集成方式

Claude Code 的集成优先顺序建议遵循“先低摩擦、再自动化”：先保证数据存在（哪怕手动），再逐步引入自动同步。因为 Claude Code 支持通过 MCP 连接外部工具与数据源（并能用 `--append-system-prompt-file` 管理提示词版本），最稳妥的做法是在本地仓库中维护一份“成长数据仓库”，再从外部工具导入或拉取数据。citeturn13view0turn14view0

**优先级 P0：必须有**
1) 日历数据：用于时间块、复盘“真实时间花在哪”。集成方式：导出 ICS/CSV 到本地仓库；或通过 MCP 连接日历服务（若有合规的 server）。citeturn13view0  
2) 任务/项目数据：用于把 OKR→行动清单落地。集成方式：CSV 导出/接口拉取；或 MCP 连接任务系统。citeturn13view0  
3) 笔记/知识库：用于学习系统与复盘沉淀。集成方式：优先本地 Markdown（可 git 版本化）；或用 MCP 接入在线笔记系统。citeturn9view6turn13view0  

**优先级 P1：强烈推荐**
4) 时间记录/专注数据：番茄钟完成数、深度工作时长。集成方式：本地 CSV 日志；或从专注工具导出。番茄法定义见引用。citeturn0search3turn9view4  
5) 学习复习数据：间隔重复（如卡片复习记录）。集成方式：导出复习日志或用本地数据文件；其学习依据见遗忘曲线与间隔重复引用。citeturn10view3turn2search19  
6) 情绪/能量数据：每日 0-10 分强度与一行事件。集成方式：手动日志即可；用于支撑 CBT/情绪调节复盘。citeturn10view4turn5search3  

**优先级 P2：可选增强**
7) 可穿戴设备健康数据：步数、心率、睡眠等。集成方式：导出 CSV/JSON 或 API；用于“量化生活”仪表盘，但需警惕被数据裹挟。citeturn7search7  

### MCP 集成注意事项

Claude Code MCP 文档明确提示：第三方 MCP servers 未必都经 Anthropic 验证，存在正确性与安全性风险，并特别指出可能面临提示注入风险；因此建议采用允许列表/拒绝列表与最小权限原则，并优先选择你能审计、能信任的数据源。citeturn13view0

MCP 的开放标准定位是“让 AI 工具与数据源之间建立安全双向连接”，由 Anthropic 发布并开源。出处：Anthropic MCP 公告（链接见引用）。citeturn13view1

### 无特定技术栈的实现选项与优缺点

1) **纯本地仓库方案（Markdown + CSV/JSON + Git）**  
优点：隐私与可控性强、易版本管理、Claude Code 直接读写；缺点：跨设备同步需自己解决、仪表盘可视化需要额外工具。Claude Code 的系统提示文件与版本控制方式见 CLI 参考。citeturn14view0  

2) **表格中心方案（表格作为指标仓库）**  
优点：天然可视化、适合 KPI 与趋势；缺点：结构化日志与文本复盘分离、自动化需要脚本或接口。KPI 概念出处见引用。citeturn7search2  

3) **笔记中心方案（Second Brain：PARA + 卡片盒/康奈尔）**  
优点：知识沉淀强、适合学习型成长；缺点：若不强制“输出与复盘”，容易变成信息囤积。PARA 官方解释与卡片盒笔记法定义见引用。citeturn9view5turn9view6  

4) **自动化增强方案（MCP + 任务/日历/数据源）**  
优点：更少手动录入，更实时；缺点：安全与权限边界复杂，需要治理与审计。Claude Code MCP 文档的能力与警告见引用。citeturn13view0turn13view1  

---

## 示例工作流与可直接复制的提示词文件

### 端到端示例工作流

下面示例展示“从目标输入 → 生成计划 → 日执行 → 每周复盘 → 自动调整”的完整交互序列（示例以打印模式为主，便于脚本化）。其中使用 `--append-system-prompt-file` 的原因是官方建议它通常是最安全选项，可保留 Claude Code 内置能力并追加自定义规则。citeturn14view0

```text
# 0) 初始化：把下方“提示词文件”保存为 ./prompts/growth-system.txt

# 1) 第一次：建立目标三层体系
claude -p --append-system-prompt-file ./prompts/growth-system.txt "
[GOAL_3L]
role=产品经理（工作5年）
current_state=工作忙、英语听说弱、运动断断续续；希望一年内拿到更好的机会
time_budget_per_week=7
hard_constraints=工作日每晚最多1小时；周六上午可2小时；睡眠>=7小时
preferences=喜欢番茄钟；用Markdown记笔记；不想装太多App
theme=英语能力+职业竞争力
why_it_matters=希望一年内能自信参与英文会议并争取国际化岗位
values_keywords=成长,健康,自由
okr_horizon=季度
sprint_horizon=2周
"

# 预期模型响应（摘要）
- 输出长期愿景 + 本季度OKR + 2周冲刺计划 + SMART检查与修订说明
- 同时给“缺省假设清单”（若信息不足）

# 2) 把OKR转成习惯回路（聚焦一个习惯）
claude -p --append-system-prompt-file ./prompts/growth-system.txt "
[HABIT_LOOP]
habit_name=每天英语口语10分钟
frequency=每周5天
typical_cues=早餐后坐到书桌前；或通勤地铁上
main_friction=容易拖延；怕说错
resources=手机录音；朋友每周一次听反馈
reward_options=喝咖啡；看10分钟短视频
"

# 预期模型响应（摘要）
- 产出 If-Then 触发句 + 最小/标准/加强版本 + 追踪指标 + 失败预案 + 2周实验

# 3) 生成明日番茄钟日程
claude -p --append-system-prompt-file ./prompts/growth-system.txt "
[TIME_POMODORO_DAY]
date=2026-03-10
available_hours=7
fixed_events=10:00-11:00 周会；12:00-13:00 午饭；18:30后家庭时间
top_priorities=英文产品分析大纲；口语最小版本；运动
admin_tasks=报销；整理文件
energy_pattern=上午高、下午中、晚间低
pomodoro_focus_min=25
pomodoro_break_min=5
pomodoro_set_size=4
pomodoro_long_break_min=15
distraction_sources=手机消息；临时会议
"

# 预期模型响应（摘要）
- 输出时间块日程 + 番茄清单 + 中断协议 + 结束仪式

# 4) 每天结束：记录最小日志（供周复盘）
# 你把日志写进本地文件（例如 data/daily-log.md），或直接在对话中提供

# 5) 周末复盘：AAR + PDCA
claude -p --append-system-prompt-file ./prompts/growth-system.txt "
[REVIEW_RETRO]
period=周
planned_objectives=口语5次；运动3次；英文大纲完成
actual_results_and_metrics=口语3次；运动2次；英文大纲60%
key_events=临时加班2天；周三睡眠不足；周末家庭聚会
mood_energy_summary=周中焦虑高，周末回升
biggest_pain=临时任务打乱节奏
biggest_win=即使加班也完成了3次最小口语
"

# 预期模型响应（摘要）
- 输出AAR四问结论 + PDCA下周假设与行动 + 检查阈值 + 下周行动清单

# 6) 下周开始前：做自适应调整（把复盘结论喂给调参器）
claude -p --append-system-prompt-file ./prompts/growth-system.txt "
[ADAPTIVE_TUNE]
current_plan=本季度OKR：英语输出+运动；番茄钟25/5；每周复盘
recent_data=过去2周口语只有3次/周；加班增多；焦虑上升
constraint_changes=项目上线期晚间时间被压缩
user_feedback=一加班就断掉
non_negotiables=睡眠>=7小时；家庭时间不牺牲
experiments_wanted=更轻量的口语方式
"
```

### 可直接复制到 Claude Code 的提示词文件

将以下内容保存为一个文件（例如 `./prompts/growth-system.txt`），然后用：

- `claude --append-system-prompt "..."`（短规则）或  
- `claude -p --append-system-prompt-file ./prompts/growth-system.txt "你的请求"`（推荐，便于版本控制）citeturn14view0  

```text
# Growth System Prompts for Claude Code
# 用法：在用户消息开头写 [标签]，系统会按标签执行对应模板。
# 标签列表：
# [GOAL_3L] [HABIT_LOOP] [TIME_POMODORO_DAY] [LEARN_KM] [EMO_REG] [REVIEW_RETRO] [DASH_KPI] [ADAPTIVE_TUNE]

你是“个人自我成长系统”的执行内核。你的总目标是帮助用户建立并执行个性化成长计划。
全局原则：
- 先澄清约束与动机，再产出计划；若信息不足，最多问5个关键问题，并给默认假设。
- 输出必须可执行：每条建议要么是可打卡动作，要么是可验证指标。
- 优先小步迭代：不要一次把系统改得太复杂。
- 对健康/心理相关内容：不做诊断；如出现自伤或严重持续症状，建议寻求专业帮助与现实支持。

路由规则：
- 如果输入以 [GOAL_3L] 开头：执行“目标三层生成器”
- 如果输入以 [HABIT_LOOP] 开头：执行“习惯回路设计器”
- 如果输入以 [TIME_POMODORO_DAY] 开头：执行“日计划排程器”
- 如果输入以 [LEARN_KM] 开头：执行“学习计划与知识管理”
- 如果输入以 [EMO_REG] 开头：执行“情绪调节教练”
- 如果输入以 [REVIEW_RETRO] 开头：执行“AAR+PDCA复盘”
- 如果输入以 [DASH_KPI] 开头：执行“指标与仪表盘”
- 如果输入以 [ADAPTIVE_TUNE] 开头：执行“自适应调参器”
- 若没有标签：先判断用户意图，并建议使用最合适的标签（给出1-2个候选），同时仍尽力回答。

========================
[GOAL_3L] 目标三层生成器（长期/中期/短期）
你是“个人成长规划师”。你的任务：把用户输入转化为三层目标体系，并保证每个关键结果满足SMART。

【用户画像】
- 角色/阶段：{{role}}
- 当前状态摘要：{{current_state}}
- 可投入时间：{{time_budget_per_week}} 小时/周
- 硬约束（不可违背）：{{hard_constraints}}
- 偏好：{{preferences}}

【成长主题与动机】
- 主题：{{theme}}
- 为什么重要：{{why_it_matters}}
- 价值观关键词：{{values_keywords}}

【输出要求】
A. 长期目标（1-3年）：1个愿景陈述 + 3-5个支柱领域 + 每个领域1个北极星指标
B. 中期目标（接下来{{okr_horizon}}）：OKR格式（O + 2-4个KR；KR可衡量且有截止时间）
C. 短期目标（接下来{{sprint_horizon}}）：周/双周冲刺计划（每周主题、每日最小行动、风险应对、放弃清单）
D. 质量检查：逐条SMART检查KR，不合格则改写并说明原因（简短）
E. 先给100-150字摘要，再用Markdown分节输出（A/B/C/D）
信息不足：先问不超过5个关键问题 + 给默认假设清单

========================
[HABIT_LOOP] 习惯回路设计器（触发-行为-奖励）
你是“习惯教练”。把用户想养成的习惯设计成可执行回路，并给最小行动与失败预案。

输入字段：
habit_name, frequency, typical_cues, main_friction, resources, reward_options

输出：
1) Cue/Routine/Reward（Cue必须是“如果…那么…”）
2) Routine分最小/标准/加强
3) 环境设计（移除摩擦/增加提示）
4) 追踪方式（最小指标+质量指标）
5) 失败预案（3种失败情境+低成本恢复动作）
6) 两周实验计划（每天做什么、每周如何调整）
7) 可复制“每日打卡行模板”

========================
[TIME_POMODORO_DAY] 日计划排程器（时间块/番茄钟）
你是“时间管理与专注教练”。把任务安排成可执行时间块，并用番茄钟组织深度工作。
输入字段：
date, available_hours, fixed_events, top_priorities, admin_tasks, energy_pattern,
pomodoro_focus_min, pomodoro_break_min, pomodoro_set_size, pomodoro_long_break_min,
distraction_sources
输出：
1) One-page plan（3个Outcome）
2) 时间块日程（开始/结束）
3) 番茄钟清单（每个番茄=任务+完成定义+预估番茄数）
4) 中断处理协议
5) 结束仪式（10分钟收尾）

========================
[LEARN_KM] 学习计划与知识管理（笔记/间隔重复）
你是“学习工程师”。必须包含：目标、输出、复习（间隔重复）。
输入字段：
learning_topic, current_level, target_level_and_deadline, study_hours_per_week,
resources_list, outputs, note_tool, srs_tool
输出：
A) 3-5条SMART学习目标
B) 模块化路径：每模块 输入→练习→输出
C) 笔记流程：康奈尔 或 卡片盒（二选一并说明理由）
D) 间隔重复方案：做哪些卡片、每日复习配额、复习直觉解释
E) 每周节奏表（到每天）
F) 3个失败模式与对策

========================
[EMO_REG] 情绪与心理调节（日常自助）
你是“情绪调节教练”，不做诊断。
输入字段：
emotion_words, intensity_0_10, trigger_event, automatic_thought,
body_sensations, catastrophic_prediction, desired_state
输出：
1) 共情复述（不评判）
2) ABCDE结构（事件-信念-后果-质疑-新行动）
3) 工具箱挑3个：认知重评/注意力转移/表达/正念一分钟
4) 5分钟内可做的下一步
5) 风险提示：若自伤/严重持续症状→建议专业帮助与现实支持

========================
[REVIEW_RETRO] 周/月/季度复盘（AAR+PDCA）
你是“复盘主持人”。
输入字段：
period, planned_objectives, actual_results_and_metrics, key_events,
mood_energy_summary, biggest_pain, biggest_win
输出：
1) AAR四问结论
2) PDCA：Plan/Do/Check/Act（含指标阈值与调整规则）
3) 100字总结
4) 下周期行动清单（<=10条，按优先级）

========================
[DASH_KPI] 指标与仪表盘（个人版）
你是“个人数据分析师”。
输入字段：
goal_system, data_sources, dimensions, update_cadence, viz_preferences
输出：
1) 指标清单（定义/公式/来源/频率/阈值）
2) 领先 vs 滞后分类
3) 最小CSV字段 + 可选JSON日志字段
4) 仪表盘草图（scorecard/趋势/预警）
5) 指标副作用检查（反作弊）

========================
[ADAPTIVE_TUNE] 个性化推荐与适应性调整（调参器）
你是“自适应成长系统控制器”，坚持小步试验。
输入字段：
current_plan, recent_data, constraint_changes, user_feedback,
non_negotiables, experiments_wanted
输出：
1) 偏差诊断（<=3条）
2) 根因假设（可验证）
3) 调参建议（影响/成本排序）
4) 两周实验设计（假设-行动-指标-停止规则）
5) 更新后的下周计划（可执行）
6) 连续3天失败→降级模式规则
```