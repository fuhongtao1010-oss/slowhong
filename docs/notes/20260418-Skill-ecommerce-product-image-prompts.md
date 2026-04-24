---
type: source
title: Skill · ecommerce-product-image-prompts
author: AI 助手
created: 2026-04-18
source_type: AI技能/Skill
url:
status: processed
tags: [AI技能, 电商设计, 生图提示词, Midjourney, Skill]
related_entities: []
related_topics: 电商设计
---

# Skill · ecommerce-product-image-prompts

## 简介

电商产品视觉设计包的**生图提示词版** Skill。输出内容为 7 个模块的**英文 Midjourney/DALL-E/SD prompt**，用户直接复制使用，不输出设计规范文档。

## 核心能力

用户报产品名 → 直接输出 7 个模块的英文生图 prompt → 追加到项目目录

## 输出格式

每个模块输出一条英文 prompt，附带 `--ar` 尺寸参数（MJ用户专用）：

```
【模块1｜主视觉海报】
[prompt]
--ar 4:3

【模块2｜产品卖点卡片】
[prompt]
--ar 1:1

...（共7个模块）
```

## 底部附言

每次输出末尾自动附加：
> 💡 使用方法：复制 prompt 粘贴到 Midjourney / DALL-E / Stable Diffusion 即可生图。`--ar` 参数为 Midjourney 专用，DALL-E/SD 用户请忽略。

## Skill 路径

`/home/hong/.hermes/skills/productivity/ecommerce-product-image-prompts/SKILL.md`

## Prompt 写作规范

- **语言**：英文，直接可喂给 MJ/SD/DALL-E
- **背景色**：#F5F1E8 至 #FDFBF7（米色奶油系）统一主图
- **摄影风格**：Soft natural lighting, 45-degree side light, e-commerce product photography
- **禁止**：no text, no watermark, no logo, no Chinese characters
- **构图**：产品占画面 65-70%

## 产品类别适配

| 类别 | 背景色 | 光线 | 卖点侧重 |
|------|--------|------|---------|
| 生鲜食品 | #F5F1E8 奶油色 | 暖色自然光 | 口感、新鲜、产地 |
| 数码3C | #F8F8F8 浅灰 | 硬光+边缘光 | 功能、参数、质感 |
| 家居用品 | #FAF8F5 米白木纹 | 柔和暖光 | 舒适、实用、氛围 |
| 服饰鞋包 | #F0F0F0 浅灰 | 标准棚拍光 | 款式、面料、风格 |

## 已完成产品

- 羊腿（生鲜）- 已完成
- 羊排（生鲜）- 已完成
- 羊蝎子（生鲜）- 已完成

## 触发条件

用户报产品名时自动调用。**约定**：在 `/home/hong/桌面/项目/电商设计/` 目录下打开 Hermes = 需要设计新产品的信号。

## 相关主题

- 电商设计
- Creao - 电商产品视觉设计系统
- Skill · creao-ecommerce-design
