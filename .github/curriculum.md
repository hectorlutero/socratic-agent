# 8–12 Week Interview Prep Curriculum

**Target:** Junior/Mid-level roles at mid-sized tech companies (8–12 weeks)  
**Focus:** Fullstack (frontend + DSA emphasis)  
**Language:** TypeScript + JavaScript  
**Cadence:** 4 days/week, 1–2 problems/day  
**Coaching Style:** Socratic (struggle-first, hints only when stuck)

---

## Overview

This curriculum is structured in **4 phases**, each building on the last. Each session follows the **Socratic Interview Coach** methodology:

1. You state the problem/approach
2. You code (I observe quietly)
3. Post-mortem: complexity, edge cases, transfer questions
4. Iterate or move to next problem

---

## Phase 1: Foundations (Weeks 1–3)

**Goal:** Master mental models, quick complexity analysis, and identify patterns.

### Week 1: Big-O + Two Pointers + Closures

**Daily Breakdown (3–4 sessions):**

| Day | Topic                      | Deliverable                                                              | Checkpoint                |
| --- | -------------------------- | ------------------------------------------------------------------------ | ------------------------- |
| 1   | Two Pointers (easy warmup) | Solve 1 easy (e.g., valid palindrome) in <10 min                         | Quick pattern recognition |
| 2   | Two Pointers (medium)      | Solve 1 medium (e.g., container with most water); force O(n) walkthrough | Explicit complexity       |
| 3   | Prefix Sum (medium)        | Solve 1 problem (e.g., subarray sum equals K); draw prefix diagram       | Tradeoff: space for speed |
| 4   | JS Closures Deep-Dive      | Predict closure output in 5 examples; explain inner/outer scope          | Mental model clarity      |

**Session 1.1 Example:**  
Problem: [LeetCode 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) (Two Sum II)  
Coaching: "What's your approach? Why two pointers? Walk me through the invariant."  
Post-mortem: "What breaks if the array isn't sorted?"

**Week 1 Goal:** ✅ Solve 2 DSA problems with explicit big-O; explain closures from first principles.

---

### Week 2: Stacks/Queues + Hashing + Generics

| Day | Topic                      | Deliverable                                                          | Checkpoint                         |
| --- | -------------------------- | -------------------------------------------------------------------- | ---------------------------------- |
| 1   | Monotonic Stack (medium)   | Solve 1 problem (e.g., next greater element)                         | Pattern: maintain decreasing stack |
| 2   | Hash Map Patterns (medium) | Solve 1 problem (e.g., group anagrams); compare with sorting         | Tradeoff: space vs time            |
| 3   | Interview-style mock       | Solve 1 problem under 20 min (time yourself)                         | Speed + accuracy                   |
| 4   | TypeScript Generics        | Write 3 generic functions (identity, array wrapper, key-value store) | Type safety + inference            |

**Session 2.2 Example:**  
Problem: [LeetCode 49](https://leetcode.com/problems/group-anagrams/) (Group Anagrams)  
Coaching: "Two approaches: hash map vs sort. Which is better? Why?"  
Post-mortem: "Trade time for space: could we optimize memory instead?"

**Week 2 Goal:** ✅ Solve 2 DSA problems; write 1 generic TS function with constraints; identify time/space tradeoffs.

---

### Week 3: Recursion + Backtracking + React Hooks Intro

| Day | Topic                 | Deliverable                                                   | Checkpoint                |
| --- | --------------------- | ------------------------------------------------------------- | ------------------------- |
| 1   | Recursion Basics      | Solve 1 problem (e.g., fibonacci recursion, then memoization) | Understand call stack     |
| 2   | Backtracking (medium) | Solve 1 problem (e.g., permutations or subsets)               | Pruning logic             |
| 3   | Interview-style mock  | Solve 1 hard recursion problem under 25 min                   | Confidence under pressure |
| 4   | React Hooks Intro     | Build useState + useEffect mental model; write 1 simple hook  | Lifecycle clarity         |

**Session 3.2 Example:**  
Problem: [LeetCode 46](https://leetcode.com/problems/permutations/) (Permutations)  
Coaching: "Draw the recursion tree. When do we backtrack? Why remove from seen set?"  
Post-mortem: "Can we solve this iteratively? Space comparison?"

**Week 3 Goal:** ✅ Solve 2 recursion/backtracking problems; understand React hooks mental model; write 1 custom hook.

---

## Phase 2: Depth & Interview Readiness (Weeks 4–6)

**Goal:** Solve medium → hard problems in interview time (~25–30 min). Start timed mocks.

### Week 4: Trees/Graphs + Event Loop

| Day | Topic                   | Deliverable                                                                  | Checkpoint          |
| --- | ----------------------- | ---------------------------------------------------------------------------- | ------------------- |
| 1   | Tree Traversal (medium) | Solve 1 BFS or DFS problem (e.g., level order traversal)                     | Pattern recognition |
| 2   | Graph (medium)          | Solve 1 graph problem (e.g., number of islands, can reach destination)       | DFS/BFS on graphs   |
| 3   | Interview-style mock    | Solve 1 medium DSA in <30 min with correct big-O                             | Time management     |
| 4   | JS Event Loop Deep-Dive | Predict output of 3 examples with setTimeout + promises; explain queue order | Microtask mastery   |

**Session 4.1 Example:**  
Problem: [LeetCode 102](https://leetcode.com/problems/binary-tree-level-order-traversal/) (Level Order Traversal)  
Coaching: "How would you solve this recursively? Iteratively (BFS)? Which is clearer? Space difference?"  
Post-mortem: "Edge cases: null root, single node, very deep tree?"

**Week 4 Goal:** ✅ Solve 2 medium DSA in **25–30 min** with correct big-O; predict event loop output (3 examples); explain microtask queue.

**🎯 Week 4 Checkpoint:** Ready to solve medium LeetCode reliably in 25–30 min. Event loop mental model solid.

---

### Week 5: Dynamic Programming Intro + React Rendering

| Day | Topic                            | Deliverable                                                                         | Checkpoint                |
| --- | -------------------------------- | ----------------------------------------------------------------------------------- | ------------------------- |
| 1   | 1D DP (medium)                   | Solve 1 problem (e.g., house robber, climbing stairs); identify subproblems         | Base case + transition    |
| 2   | 2D DP (medium)                   | Solve 1 problem (e.g., unique paths, coin change); draw DP table                    | Memoization table         |
| 3   | Interview-style mock             | Solve 1 DP problem in <30 min                                                       | Pattern recognition speed |
| 4   | React Rendering + Reconciliation | Explain when React re-renders, key usage, memo optimization (mental model, no code) | Fiber tree understanding  |

**Session 5.1 Example:**  
Problem: [LeetCode 198](https://leetcode.com/problems/house-robber/) (House Robber)  
Coaching: "Define subproblems clearly: dp[i] = ?" "What's the transition? Base case?"  
Post-mortem: "Can we optimize space? Why?"

**Week 5 Goal:** ✅ Solve 2 DP problems; identify overlapping subproblems; explain React reconciliation + useEffect dependency array.

---

### Week 6: Hard DSA + TS Narrowing + Interview Mode

| Day | Topic                    | Deliverable                                                                                   | Checkpoint          |
| --- | ------------------------ | --------------------------------------------------------------------------------------------- | ------------------- |
| 1   | Hard DSA (combo pattern) | Solve 1 hard problem requiring 2+ patterns (e.g., tree + DP)                                  | Pattern synthesis   |
| 2   | Hard DSA (combo pattern) | Solve 1 hard problem; explain all design decisions                                            | Confidence at scale |
| 3   | Timed Mock (45 min)      | Solve 1 medium/hard DSA + explain cleanly; I observe silently                                 | Real interview sim  |
| 4   | TS Narrowing + Unions    | Write code with union types, type guards, discriminated unions (practical React/API examples) | Type-safe patterns  |

**Session 6.1 Example:**  
Problem: [LeetCode 124](https://leetcode.com/problems/binary-tree-maximum-path-sum/) (Binary Tree Max Path Sum)  
Coaching: (minimal hints; I observe) Post-mortem: "Walk me through your approach. Why did you track left/right max?"  
"What if node values are negative? Does your code handle it?"

**Week 6 Goal:** ✅ Solve 2 hard DSA in **30–35 min**; master union narrowing; complete first timed mock interview (45 min format).

**🎯 Week 6 Checkpoint:** Hard DSA solved reliably. Interview-mode ready. Should score 80%+ on mock.

---

## Phase 3: Fullstack Integration (Weeks 7–9)

**Goal:** Connect frontend and backend; fullstack thinking. Maintain DSA momentum.

### Week 7: React Deep-Dives + Custom Hooks

| Day | Topic                  | Deliverable                                                                          | Checkpoint             |
| --- | ---------------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| 1   | DSA (medium)           | Keep DSA sharp: solve 1 medium problem                                               | Maintain sharpness     |
| 2   | Custom Hooks           | Write 2 custom hooks (e.g., useFetch, useLocalStorage, usePrevious)                  | Hook patterns          |
| 3   | State Design           | Design state for a mini-app (e.g., todo list with filters); identify local vs global | Architectural thinking |
| 4   | useEffect Dependencies | Predict behavior of 3 useEffect examples; explain cleanup                            | Lifecycle mastery      |

**Session 7.2 Example:**  
Build a `useFetch` hook:

```typescript
const useFetch = (url: string) => {
  // return { data, loading, error }
};
```

Coaching: "When does this run? How do you handle cleanup? What if url changes?"

**Week 7 Goal:** ✅ Write 2 reusable custom hooks; design state for a small app; explain useEffect dependency lifecycle.

---

### Week 8: Node.js Fundamentals + API Design

| Day | Topic                    | Deliverable                                                                              | Checkpoint           |
| --- | ------------------------ | ---------------------------------------------------------------------------------------- | -------------------- |
| 1   | DSA (medium)             | Solve 1 medium problem                                                                   | DSA momentum         |
| 2   | Node API Design          | Design a REST API endpoint (routes, request/response, error handling); write pseudo-code | API patterns         |
| 3   | Error Handling + Logging | Write code for error propagation, async error handling, structured logging               | Production mindset   |
| 4   | Testing Intro            | Write 1 test for an API endpoint (unit or integration)                                   | Test-driven thinking |

**Session 8.2 Example:**  
Design a user registration endpoint:

- Route: `POST /api/users`
- Validation, error cases, response shape
- Coaching: "What errors can happen? How do you handle each? What's the HTTP status?"

**Week 8 Goal:** ✅ Design 1 REST API with error handling; write 1 test; explain async error propagation.

---

### Week 9: Fullstack Scenarios + Tradeoffs

| Day | Topic                           | Deliverable                                                                        | Checkpoint                |
| --- | ------------------------------- | ---------------------------------------------------------------------------------- | ------------------------- |
| 1   | DSA (hard)                      | Solve 1 hard problem                                                               | Maintain hard DSA fluency |
| 2   | Fullstack Feature Design        | Design a feature spanning React + Node (e.g., pagination API + infinite scroll UI) | Systems thinking          |
| 3   | Tradeoffs Discussion            | Discuss client vs server state, caching, error boundaries, performance             | Architectural depth       |
| 4   | Timed Mock (fullstack scenario) | Design a fullstack feature in 45 min; explain decisions                            | Integration confidence    |

**Session 9.2 Example:**  
Design pagination for a user list:

- Backend: `/api/users?page=1&limit=10` + total count
- Frontend: Infinite scroll component using `useFetch`
- Coaching: "Why paginate server-side? How do you handle scroll near the end? Cache behavior?"

**Week 9 Goal:** ✅ Design 1 fullstack feature; discuss architectural tradeoffs; score 75%+ on fullstack mock.

**🎯 Week 9 Checkpoint:** Fullstack thinking clear. Ready for system design conversations.

---

## Phase 4: Polish & Mock Interviews (Weeks 10–12)

**Goal:** Simulate real interviews under pressure; refine weak spots; build confidence.

### Week 10: Mixed Mocks + Weak Spot Review

| Session | Format                                           | Duration | Focus                       |
| ------- | ------------------------------------------------ | -------- | --------------------------- |
| 10.1    | Timed Mock: DSA (hard) + React Question          | 45 min   | Time management             |
| 10.2    | Timed Mock: Fullstack Scenario                   | 45 min   | Integration + communication |
| Review  | Analyze weak spots; re-solve 1 problem from each | –        | Pattern reinforcement       |

---

### Week 11: System Design Lite + Performance Deep-Dive

| Session | Format                                                          | Duration | Focus                  |
| ------- | --------------------------------------------------------------- | -------- | ---------------------- |
| 11.1    | Mock: System Design Lite + Node API Question                    | 45 min   | Architectural thinking |
| 11.2    | Mock: React Performance Problem (memoization, re-renders, etc.) | 45 min   | Optimization mindset   |
| Review  | Practice 1 weak area (DSA / React / Node)                       | –        | Confidence             |

---

### Week 12: Capstone + Final Polish

| Session | Format                                                                         | Duration | Focus           |
| ------- | ------------------------------------------------------------------------------ | -------- | --------------- |
| 12.1    | Capstone Mock: Full interview simulation (DSA + system design + communication) | 60 min   | End-to-end      |
| 12.2    | Weakest pattern review + final clarifications                                  | 30 min   | Safety net      |
| Prep    | Mock interview debrief; identify last-minute improvements                      | –        | Readiness check |

---

## Success Metrics by Phase

| Phase             | Metric                                                       | Target              |
| ----------------- | ------------------------------------------------------------ | ------------------- |
| Phase 1 (Week 3)  | Solve easy DSA, explain closures, React hooks mental model   | ✅ All clear        |
| Phase 2 (Week 6)  | Solve hard DSA in 30–35 min, interview-mode mock score 80%+  | ✅ Confident        |
| Phase 3 (Week 9)  | Design fullstack feature, discuss tradeoffs, mock score 75%+ | ✅ Systems thinking |
| Phase 4 (Week 12) | Capstone mock 85%+, handle pressure, clear communication     | ✅ Interview-ready  |

---

## How to Use This Curriculum

1. **Weekly:** Pick problems based on the schedule above; use `.github/progress.md` to track.
2. **Session Flow:** State problem → Attempt (no hints unless stuck) → Post-mortem (complexity, edge cases, transfer Q).
3. **Commit:** After each session, commit progress (see [COMMIT_PROTOCOL.md](./COMMIT_PROTOCOL.md)).
4. **Adjust:** If a topic is stuck, pause and dive deeper; curriculum is flexible.

---

## Problem Sources

- **LeetCode:** Primary source (free tier sufficient)
- **Interview Prep:** Mock interviews via [Pramp](https://www.pramp.com/), [CodeSignal](https://codesignal.com/), or similar
- **Concepts:** [JavaScript.info](https://javascript.info/), React docs, Node.js docs

---

## Notes

- **Pain Point:** Time management + rushing into code without analysis.  
  **Solution:** Enforce 5-min "approach + complexity" before writing.
- **Strength:** Solid async/await (3/5).  
  **Leverage:** Use this in Node and fullstack weeks.
- **Critical Gaps:** React (1/5) and DSA big-O (2/5).  
  **Priority:** Phase 1–2 must be solid before Phase 3.
