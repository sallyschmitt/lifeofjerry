---
name: ai-agents-architect
description: Design and build autonomous AI agent systems. Use when creating agent architectures, designing tool use, implementing memory systems, planning multi-agent orchestration, setting up agent loops, or debugging agent behavior. Covers ReAct loops, Plan-and-Execute patterns, hierarchical memory, supervisor patterns, checkpoint recovery, and agent safety.
---

# AI Agents Architect

Expert in designing and building autonomous AI agents that can act independently while remaining controllable.

**Core principle:** Agents should fail loudly, not silently. Balance autonomy with oversight.

---

## Agent Patterns

### ReAct Loop
Reason-Act-Observe cycle for step-by-step execution

**When to use:** Simple tool use with clear action-observation flow

1. **Thought**: reason about what to do next
2. **Action**: select and invoke a tool
3. **Observation**: process tool result
4. **Repeat** until task complete or stuck
5. Always include **max iteration limits**

### Plan-and-Execute
Plan first, then execute steps

**When to use:** Complex tasks requiring multi-step planning

1. Planning phase: decompose task into steps
2. Execution phase: execute each step
3. Replanning: adjust plan based on results
4. Separate planner and executor models possible

### Tool Registry
Dynamic tool discovery and management

**When to use:** Many tools or tools that change at runtime

- Register tools with schema and examples
- Tool selector picks relevant tools for task
- Lazy loading for expensive tools
- Usage tracking for optimization

### Hierarchical Memory
Multi-level memory for different purposes

**When to use:** Long-running agents needing context

- **Working memory**: current task context
- **Episodic memory**: past interactions/results
- **Semantic memory**: learned facts and patterns
- Use RAG for retrieval from long-term memory

### Supervisor Pattern
Supervisor agent orchestrates specialist agents

**When to use:** Complex tasks requiring multiple skills

- Supervisor decomposes and delegates
- Specialists have focused capabilities
- Results aggregated by supervisor
- Error handling at supervisor level

### Checkpoint Recovery
Save state for resumption after failures

**When to use:** Long-running tasks that may fail

- Checkpoint after each successful step
- Store task state, memory, and progress
- Resume from last checkpoint on failure
- Clean up checkpoints on completion

---

## Sharp Edges (Critical)

### Agent loops without iteration limits
**Severity: CRITICAL**

Always set limits:
- `max_iterations` on agent loops
- `max_tokens` per turn
- Timeout on agent runs
- Cost caps for API usage
- Circuit breakers for tool failures

### Vague or incomplete tool descriptions
**Severity: HIGH**

Agents choose tools based on descriptions. Write complete specs:
- Clear one-sentence purpose
- When to use (and when not to)
- Parameter descriptions with types
- Example inputs and outputs
- Error cases to expect

### Tool errors not surfaced to agent
**Severity: HIGH**

Explicit error handling:
- Return error messages to agent
- Include error type and recovery hints
- Let agent retry or choose alternative
- Log errors for debugging

### Storing everything in memory
**Severity: MEDIUM**

Selective memory:
- Summarize rather than store verbatim
- Filter by relevance before storing
- Use RAG for long-term memory
- Clear working memory between tasks

### Agent has too many tools
**Severity: MEDIUM**

Curate tools per task:
- 5-10 tools maximum per agent
- Use tool selection layer for large tool sets
- Specialized agents with focused tools
- Dynamic tool loading based on task

### Multi-agent when single would work
**Severity: MEDIUM**

Justify multi-agent:
- Can one agent with good tools solve this?
- Is the coordination overhead worth it?
- Are the agents truly independent?
- Start with single agent, measure limits

### Agent internals not logged
**Severity: MEDIUM**

- Log thoughts, actions, observations
- Include timestamps and durations
- Log tool calls with inputs/outputs
- Store decision rationale