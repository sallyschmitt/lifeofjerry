---
name: concise-planning
description: Generate clear, actionable, atomic checklists for coding tasks. Use when a user asks for a plan, needs to break down a task, or wants a structured approach to implementing a feature or fixing a bug. Produces verb-first action items with scope, validation steps, and open questions.
---

# Concise Planning

Turn a user request into a **single, actionable plan** with atomic steps.

---

## Workflow

### 1. Scan Context

- Read `README.md`, docs, and relevant code files
- Identify constraints (language, frameworks, tests)

### 2. Minimal Interaction

- Ask **at most 1–2 questions** and only if truly blocking
- Make reasonable assumptions for non-blocking unknowns

### 3. Generate Plan

Use the following structure:

- **Approach**: 1-3 sentences on what and why
- **Scope**: Bullet points for "In" and "Out"
- **Action Items**: A list of 6-10 atomic, ordered tasks (verb-first)
- **Validation**: At least one item for testing

---

## Plan Template

```markdown
# Plan

<High-level approach>

## Scope

- In:
- Out:

## Action Items

[ ] <Step 1: Discovery>
[ ] <Step 2: Implementation>
[ ] <Step 3: Implementation>
[ ] <Step 4: Validation/Testing>
[ ] <Step 5: Rollout/Commit>

## Open Questions

- <Question 1 (max 3)>
```

---

## Checklist Guidelines

- **Atomic**: Each step should be a single logical unit of work
- **Verb-first**: "Add...", "Refactor...", "Verify..."
- **Concrete**: Name specific files or modules when possible
- **Testable**: Include validation steps
- **Scoped**: Clear In/Out boundaries