# AI Entry

请任何 AI 代理在执行前先读取本文件。

## Read Order
1. `.ai/CLAUDE.md` — 监督/审核流程与规则
2. `.ai/codex.prompt.md` — Codex 执行任务的约束
3. `task.md` — TODO 任务清单

## When to Use
- Claude: 负责审查、合并、更新任务
- Codex: 负责实现 TODO 任务，仅改 `problems/**`

## Constraints
- 不要修改 `task.md` 里的任务描述
- 只在 `problems/**` 下新增或修改代码
