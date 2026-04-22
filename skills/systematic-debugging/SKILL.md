---
name: systematic-debugging
description: "Systematic debugging methodology. Find root causes before proposing fixes. Use for bugs, test failures, unexpected behavior, performance problems, or build failures. Enforces investigate-first with four phases: Root Cause Investigation, Pattern Analysis, Hypothesis Testing, Implementation."
---

# Systematic Debugging

**Core principle:** ALWAYS find root cause before attempting fixes. Symptom fixes are failure.

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

---

## When to Use

- Test failures
- Bugs in production
- Unexpected behavior
- Performance problems
- Build failures
- Integration issues

**ESPECIALLY when:**
- Under time pressure
- "Just one quick fix" seems obvious
- You've already tried multiple fixes
- You don't fully understand the issue

---

## The Four Phases

You MUST complete each phase before proceeding to the next.

### Phase 1: Root Cause Investigation

**BEFORE attempting ANY fix:**

1. **Read Error Messages Carefully**
   - Don't skip past errors or warnings
   - They often contain the exact solution
   - Read stack traces completely
   - Note line numbers, file paths, error codes

2. **Reproduce Consistently**
   - Can you trigger it reliably?
   - What are the exact steps?
   - Does it happen every time?
   - If not reproducible → gather more data, don't guess

3. **Check Recent Changes**
   - What changed that could cause this?
   - Git diff, recent commits
   - New dependencies, config changes
   - Environmental differences

4. **Gather Evidence in Multi-Component Systems**
   - For EACH component boundary:
     - Log what data enters
     - Log what data exits
     - Verify environment/config propagation
     - Check state at each layer
   - Run once to gather evidence showing WHERE it breaks
   - THEN analyze evidence to identify failing component

5. **Trace Data Flow**
   - Where does the bad value originate?
   - What called this with the bad value?
   - Keep tracing up until you find the source
   - Fix at source, not at symptom

### Phase 2: Pattern Analysis

1. **Find Working Examples**
   - Locate similar working code in same codebase
   - What works that's similar to what's broken?

2. **Compare Against References**
   - Read reference implementation COMPLETELY
   - Don't skim — read every line
   - Understand the pattern fully before applying

3. **Identify Differences**
   - What's different between working and broken?
   - List every difference, however small
   - Don't assume "that can't matter"

4. **Understand Dependencies**
   - What other components does this need?
   - What settings, config, environment?
   - What assumptions does it make?

### Phase 3: Hypothesis and Testing

1. **Form Single Hypothesis**
   - "I think X is the root cause because Y"
   - Write it down. Be specific, not vague.

2. **Test Minimally**
   - Make the SMALLEST possible change to test hypothesis
   - One variable at a time
   - Don't fix multiple things at once

3. **Verify Before Continuing**
   - Did it work? Yes → Phase 4
   - Didn't work? Form NEW hypothesis
   - DON'T add more fixes on top

4. **When You Don't Know**
   - Say "I don't understand X"
   - Don't pretend to know
   - Ask for help. Research more.

### Phase 4: Implementation

1. **Create Failing Test Case**
   - Simplest possible reproduction
   - Automated test if possible
   - MUST have before fixing

2. **Implement Single Fix**
   - Address the root cause identified
   - ONE change at a time
   - No "while I'm here" improvements
   - No bundled refactoring

3. **Verify Fix**
   - Test passes now?
   - No other tests broken?
   - Issue actually resolved?

4. **If Fix Doesn't Work**
   - If < 3 attempts: Return to Phase 1
   - **If ≥ 3 attempts: STOP and question the architecture**

5. **If 3+ Fixes Failed: Question Architecture**
   - Each fix reveals new shared state/coupling?
   - Fixes require "massive refactoring"?
   - Each fix creates new symptoms elsewhere?
   - **STOP. Discuss with your human partner.**
   - This is a wrong architecture, not a failed hypothesis.

---

## Red Flags — STOP and Follow Process

If you catch yourself thinking:
- "Quick fix for now, investigate later"
- "Just try changing X and see if it works"
- "Add multiple changes, run tests"
- "It's probably X, let me fix that"
- "I don't fully understand but this might work"

**ALL of these mean: STOP. Return to Phase 1.**