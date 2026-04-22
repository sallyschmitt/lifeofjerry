---
name: prompt-engineering
description: Expert prompt engineering patterns and optimization techniques. Use when improving prompts, designing system prompts, building template systems, optimizing LLM output quality, debugging agent behavior, or structuring few-shot examples. Covers chain-of-thought, progressive disclosure, template systems, error recovery, and prompt iteration.
---

# Prompt Engineering Patterns

Advanced prompt engineering techniques to maximize LLM performance, reliability, and controllability.

---

## Core Techniques

### 1. Few-Shot Learning

Teach the model by showing examples instead of explaining rules.

- Include 2-5 input-output pairs demonstrating desired behavior
- More examples improve accuracy but consume tokens
- Balance based on task complexity

```markdown
Extract key information from support tickets:

Input: "My login doesn't work and I keep getting error 403"
Output: {"issue": "authentication", "error_code": "403", "priority": "high"}

Input: "Feature request: add dark mode to settings"
Output: {"issue": "feature_request", "error_code": null, "priority": "low"}

Now process: "Can't upload files larger than 10MB, getting timeout"
```

### 2. Chain-of-Thought Prompting

Request step-by-step reasoning before the final answer.

- Zero-shot: Add "Let's think step by step"
- Few-shot: Include example reasoning traces
- Improves accuracy on analytical tasks by 30-50%

```markdown
Analyze this bug report and determine root cause.

Think step by step:
1. What is the expected behavior?
2. What is the actual behavior?
3. What changed recently that could cause this?
4. What components are involved?
5. What is the most likely root cause?

Bug: "Users can't save drafts after the cache update deployed yesterday"
```

### 3. Prompt Optimization

Systematically improve prompts through testing and refinement.

1. Start simple, measure performance
2. Test on diverse inputs including edge cases
3. Use A/B testing to compare variations
4. Track: accuracy, consistency, token usage

```markdown
Version 1 (Simple): "Summarize this article"
→ Inconsistent length, misses key points

Version 2 (Add constraints): "Summarize in 3 bullet points"
→ Better structure, but still misses nuance

Version 3 (Add reasoning): "Identify the 3 main findings, then summarize each"
→ Consistent, accurate, captures key information
```

### 4. Template Systems

Build reusable prompt structures with variables and modular components.

- Use for multi-turn conversations or role-based interactions
- Reduces duplication, ensures consistency

```python
template = """
Review this {language} code for {focus_area}.

Code:
{code_block}

Provide feedback on:
{checklist}
"""
```

### 5. System Prompt Design

Set global behavior and constraints that persist across the conversation.

- Define role, expertise level, output format
- Include safety guidelines
- Free up user message tokens for variable content

```markdown
System: You are a senior backend engineer specializing in API design.

Rules:
- Always consider scalability and performance
- Suggest RESTful patterns by default
- Flag security concerns immediately
- Provide code examples in Python
- Use early return pattern

Format responses as:
1. Analysis
2. Recommendation
3. Code example
4. Trade-offs
```

---

## Key Patterns

### Progressive Disclosure

Start simple, add complexity only when needed:

1. **Level 1**: Direct instruction — "Summarize this article"
2. **Level 2**: Add constraints — "Summarize in 3 bullet points, focusing on findings"
3. **Level 3**: Add reasoning — "Identify findings, then summarize each"
4. **Level 4**: Add examples — Include 2-3 input-output pairs

### Instruction Hierarchy

```
[System Context] → [Task Instruction] → [Examples] → [Input Data] → [Output Format]
```

### Error Recovery

Build prompts that gracefully handle failures:

- Include fallback instructions
- Request confidence scores
- Ask for alternative interpretations when uncertain
- Specify how to indicate missing information

---

## Best Practices

1. **Be Specific**: Vague prompts produce inconsistent results
2. **Show, Don't Tell**: Examples > descriptions
3. **Test Extensively**: Evaluate on diverse, representative inputs
4. **Iterate Rapidly**: Small changes can have large impacts
5. **Monitor Performance**: Track metrics in production
6. **Version Control**: Treat prompts as code
7. **Document Intent**: Explain why prompts are structured as they are

## Common Pitfalls

- **Over-engineering**: Starting with complex prompts before trying simple ones
- **Example pollution**: Using examples that don't match the target task
- **Context overflow**: Exceeding token limits with excessive examples
- **Ambiguous instructions**: Leaving room for multiple interpretations
- **Ignoring edge cases**: Not testing on unusual or boundary inputs