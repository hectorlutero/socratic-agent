# Commit Protocol for Interview Prep

**Purpose:** Create a streamlined, auditable history of your interview prep journey. Each commit is a checkpoint that ties directly to the curriculum phases.

---

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

---

## Type (Required)

Use one of these types:

| Type                 | When to Use                            | Example                                                        |
| -------------------- | -------------------------------------- | -------------------------------------------------------------- |
| `feat(dsa)`          | Solved a DSA problem                   | `feat(dsa): two-pointer approach - container with most water`  |
| `feat(js)`           | JavaScript concept deep-dive           | `feat(js): closures - scope chain and closure examples`        |
| `feat(ts)`           | TypeScript learning                    | `feat(ts): generics - implement identity and array wrapper`    |
| `feat(react)`        | React problem or concept               | `feat(react): useState and useEffect mental model`             |
| `feat(node)`         | Node.js learning                       | `feat(node): error handling - async/await propagation`         |
| `study(concept)`     | General study session                  | `study(concept): event loop - microtask vs macrotask`          |
| `mock(interview)`    | Timed mock interview                   | `mock(interview): medium DSA + React question - 45 min`        |
| `fix(dsa)`           | Retry a problem (failed first attempt) | `fix(dsa): permutations - optimized backtracking`              |
| `docs(progress)`     | Update progress tracking               | `docs(progress): week 2 checkpoint - all tests passing`        |
| `refactor(solution)` | Optimize a previous solution           | `refactor(solution): tree traversal - iterative BFS beats DFS` |

---

## Scope (Required)

Scope is the **curriculum phase/week** and **topic**:

- `week-1-dsa` — Week 1 DSA session
- `week-4-trees` — Week 4 Trees/Graphs session
- `phase-2` — Phase 2 checkpoint
- `week-6-mock` — Week 6 timed mock
- `phase-4` — Final capstone mock

Examples:

- `feat(week-1-dsa): two pointers`
- `mock(week-4-trees): timed mock BFS/DFS`
- `feat(phase-2): React reconciliation`

---

## Subject (Required)

**Keep it short (50 chars max).** Answer: "What did I learn or solve?"

✅ Good:

- `two-pointer approach - container with most water`
- `closures - scope chain + execution context`
- `React hooks - useState and useEffect lifecycle`

❌ Bad:

- `did a problem` (too vague)
- `implementing a solution` (no detail)
- `working on stuff` (meaningless)

---

## Body (Optional but Encouraged)

**Add context only if the commit is substantial.** Use 1–3 short lines:

```
<blank line>
- Insight: [key realization or pattern]
- Blocker: [what stumped you, if any]
- Time: [how long did this take]
- Next: [what to focus on next]
```

### Example Body

```
- Insight: Two pointers work when array is sorted; why?
- Blocker: initially thought O(n^2) was necessary
- Time: 22 min (within target)
- Next: practice monotonic stack problems
```

---

## Footer (Optional)

Use footers to link to:

- Progress file: `Progress: .github/progress.md`
- Week checkpoint: `Week: 2/12`
- Mock score: `Score: 85/100`

### Example Footer

```
Score: 78/100
Week: 4/12
Progress: .github/progress.md
```

---

## Commit Examples

### Example 1: DSA Problem Solution

```
feat(week-1-dsa): two-pointer approach - valid palindrome

- Insight: Why two pointers? Invariant at each step?
- Time: 8 min
- Next: move to container with most water (medium)

Week: 1/12
Progress: .github/progress.md
```

### Example 2: Concept Deep-Dive

```
feat(week-1-js): closures - scope chain and execution context

- Insight: closure captures variables, not values
- Blocker: hoisting vs closure timing
- Time: 15 min
- Next: understand event loop for async

Week: 1/12
Progress: .github/progress.md
```

### Example 3: Failed Attempt (Retry)

```
fix(week-2-dsa): monotonic stack - retry after initial misunderstanding

- Blocker: wasn't maintaining stack invariant correctly
- Insight: stack stores indices, not values; check heights
- Time: 18 min
- Next: consolidate with similar problems

Week: 2/12
Progress: .github/progress.md
```

### Example 4: Mock Interview

```
mock(week-6-mock): timed interview - hard DSA + React question

- Time: 45 min
- Score: 82/100
- Insight: time pressure makes me skip edge cases; review before coding
- Next: focus on edge case identification first

Week: 6/12
Progress: .github/progress.md
```

### Example 5: Progress Update

```
docs(progress): week 2 checkpoint - foundations solid

- Completed: 2 stack/queue problems, 1 hash map, TS generics intro
- Status: Ready for Week 3 recursion
- Next: backtracking + React hooks

Week: 2/12
Progress: .github/progress.md
```

### Example 6: Refactor/Optimization

```
refactor(week-3-dsa): permutations - optimize backtracking

- Old approach: O(n! * n) with unnecessary copying
- New approach: O(n! * n) but swap in-place + cleaner
- Insight: in-place modifications reduce space waste
- Time: 12 min

Week: 3/12
Progress: .github/progress.md
```

---

## Commit Workflow (Daily)

### 1. Before You Start

Check the curriculum:

```bash
cat .github/curriculum.md | grep "Week X"
```

### 2. Code & Solve

Write your solution in a scratch file or LeetCode editor. Time yourself.

### 3. After You Finish

Update [.github/progress.md](.github/progress.md):

- Mark session as ✅ Complete (or ❌ Retry)
- Write time taken
- Add notes

### 4. Commit

```bash
git add .github/progress.md [any solution files]
git commit -m "feat(week-X-topic): problem name - key insight

- Insight: [what did you learn]
- Time: [how long]
- Next: [next topic]

Week: X/12
Progress: .github/progress.md"
```

---

## Commit Frequency

- **After each DSA problem:** 1 commit
- **After each concept deep-dive:** 1 commit
- **After each mock interview:** 1 commit
- **Weekly checkpoint:** 1 commit (summary)

**Target:** 3–5 commits per week (easily achievable with 4 days × 1–2 problems).

---

## Git Log View

At any point, see your progress:

```bash
git log --oneline --graph --all
```

Example output:

```
* abc1234 docs(progress): week 3 checkpoint - ready for phase 2
* def5678 mock(week-3-mock): timed interview - 78/100
* ghi9012 feat(week-3-react): custom hooks - useFetch pattern
* jkl3456 feat(week-3-dsa): backtracking - permutations optimized
* mno7890 feat(week-2-ts): generics - identity + array wrapper
* pqr2345 feat(week-2-dsa): hash map - group anagrams approach
* stu6789 feat(week-1-js): closures - scope chain clarity
* vwx0123 feat(week-1-dsa): two pointers - container with most water
* yzab456 initial: start interview prep - baseline scores logged
```

---

## Rules & Best Practices

1. **Be specific:** "two pointers" is better than "solved a problem"
2. **Capture insight:** What did you learn? Why did you get stuck?
3. **One commit per deliverable:** Don't batch a week into one commit
4. **Reference progress file:** Help future you (or a reviewer) quickly find context
5. **Keep bodies concise:** 3–5 lines max; focus on learning, not description
6. **Use consistent scope format:** `week-X-topic` makes history scannable
7. **Commit often:** Daily commits (3–5 per week) show steady progress

---

## Why This Matters

- **Accountability:** See your progress over 12 weeks
- **Reflection:** Commit messages force you to articulate what you learned
- **Pattern recognition:** Look back at Week 1 gaps vs Week 6 fluency
- **Interview talking point:** "Let me show you my prep history" (real edge case from learners)
- **Debugging:** If you get stuck on a topic, search history for similar problems

---

## Example: Full Week 1 Commit History

```
doc commit 1: docs(progress): week 1 kickoff - baseline scores
commit 2: feat(week-1-dsa): two pointers - valid palindrome
commit 3: feat(week-1-dsa): two pointers - container with most water
commit 4: feat(week-1-dsa): prefix sum - subarray sum equals K
commit 5: feat(week-1-js): closures - scope chain + execution context
commit 6: docs(progress): week 1 checkpoint - foundations solid
```

---

## Git Tips

### Amend last commit (typo in message)

```bash
git commit --amend
```

### View history with details

```bash
git log --pretty=format:"%h %s" -n 10
```

### Search commits

```bash
git log --grep="two pointers"
git log --grep="week-2"
```

### See changes from a specific commit

```bash
git show abc1234
```

---

## Questions?

Refer back to this protocol when you commit. Template:

```
<type>(<scope>): <subject>

- Insight:
- Blocker:
- Time:
- Next:

Week: /12
Progress: .github/progress.md
```

**Go build your history.** 🚀
