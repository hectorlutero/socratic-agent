# Interview Prep System

A structured 8–12 week curriculum for **fullstack interview prep** using the Socratic method. Learn DSA, JavaScript, TypeScript, React, and Node.js through guided problem-solving.

---

## 🎯 What Is This?

This system helps you prepare for junior/mid-level tech interviews at mid-sized companies and startups. It's built on the **Socratic Interview Coach** methodology:

- **You propose an approach** (I ask questions)
- **You code** (I observe quietly)
- **We discuss** complexity, edge cases, and patterns
- **You learn deeply** (not just memorize solutions)

**Timeline:** 8–12 weeks, 4 days/week, 1–2 problems/day.

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| [.github/curriculum.md](.github/curriculum.md) | **The roadmap** — what to study each week (4 phases) |
| [.github/progress.md](.github/progress.md) | **Your scoreboard** — track baseline, update after each session |
| [COMMIT_PROTOCOL.md](COMMIT_PROTOCOL.md) | **How to commit** — format for logging your progress |

---

## 🚀 How to Use (Simple Steps)

### Step 1: Pick a Topic
Open [.github/curriculum.md](.github/curriculum.md) and find today's topic (e.g., "Week 1, Day 1: Two Pointers").

### Step 2: Solve the Problem
- Use LeetCode or similar
- **Time yourself**
- Write down your approach before coding

### Step 3: Update Progress
Open [.github/progress.md](.github/progress.md) and update the corresponding session:
- Mark as ✅ Complete (or ❌ Retry)
- Write time taken
- Add any notes

### Step 4: Commit Your Work
Run:
```bash
git add .github/progress.md
git commit -m "feat(week-1-dsa): two pointers - container with most water

- Insight: Why does two pointers work?
- Time: 22 min
- Next: move to prefix sum

Week: 1/12
Progress: .github/progress.md"
```

See [COMMIT_PROTOCOL.md](COMMIT_PROTOCOL.md) for detailed commit format.

---

## 📊 The 4 Phases

| Phase | Weeks | Focus | Goal |
|-------|-------|-------|------|
| **Phase 1: Foundations** | 1–3 | Big-O, two pointers, closures, React intro | Master mental models |
| **Phase 2: Depth** | 4–6 | Trees/graphs, DP, event loop, interview mocks | Solve hard problems in 30 min |
| **Phase 3: Fullstack** | 7–9 | React hooks, Node APIs, fullstack design | System thinking |
| **Phase 4: Mocks & Polish** | 10–12 | Timed interviews, weak spot review | Interview-ready |

---

## 📝 Quick Workflow (Daily)

```
1. Check curriculum for today's topic
2. Solve the problem (time yourself)
3. Update progress.md (mark complete, write time/notes)
4. Commit using COMMIT_PROTOCOL.md format
5. Repeat
```

That's it! 3–5 commits per week, steady progress, visible history.

---

## 🎓 Your Baseline (January 4, 2026)

**Strengths:**
- Async/await (3/5) ✅
- DSA basics (2/5) ⚠️

**Critical Gaps:**
- React (1/5) 🔴
- DP, trees, graphs (0/5) 🔴
- TypeScript depth (1–2/5) 🔴
- Node.js (0–1/5) 🔴

**Pain Points:**
- Time management (rushing without analyzing big-O)
- Understanding complex concepts quickly
- Applying theory to practice

**Solution:** Phase 1 enforces 5-min approach before coding.

---

## 💡 Key Principles

### 1. **Socratic First**
I ask questions; you answer. Build deep understanding, not surface-level solutions.

### 2. **Struggle Over Shortcuts**
I give hints only if stuck. Aim to solve 80% of problems without help.

### 3. **Complexity Matters**
Always verbalize big-O, space tradeoffs, and edge cases *before* writing code.

### 4. **Real Interview Simulation**
Week 6 onwards: timed mocks with timer on. I observe; you explain after.

### 5. **Commit Your Learning**
Each commit captures what you learned, not just what you coded. Builds accountability.

---

## 📚 Where to Find Resources

- **Problems:** [LeetCode](https://leetcode.com/) (free tier sufficient)
- **Concepts:** [JavaScript.info](https://javascript.info/), React docs, Node.js docs
- **Mocks:** [Pramp](https://www.pramp.com/), [CodeSignal](https://codesignal.com/)

---

## ⏱️ Your Schedule (Example Week 1)

| Day | Topic | Problem | Time | Next |
|-----|-------|---------|------|------|
| Mon | Two Pointers (easy) | Valid Palindrome | <10 min | Update progress.md, commit |
| Tue | Two Pointers (medium) | Container with Most Water | <30 min | Update progress.md, commit |
| Wed | Prefix Sum (medium) | Subarray Sum Equals K | <30 min | Update progress.md, commit |
| Fri | JS Closures | Concept deep-dive | – | Predict 5 examples, commit |

**4 days/week × 1–2 problems = 3–5 commits/week.**

---

## 🔄 Update Progress Like This

After solving a problem, open [.github/progress.md](.github/progress.md):

**Before:**
```
| 1.1 | Two Pointers | TBD | – | ⏳ Pending | – |
```

**After:**
```
| 1.1 | Two Pointers | Valid Palindrome | 8 min | ✅ Complete | Two-pointer invariant clear |
```

Then commit it!

---

## 🎯 Week 1 Checkpoint (End of Week 1)

Before moving to Week 2, confirm:
- ✅ Solved 2 DSA problems with explicit big-O
- ✅ Explained closures + scope from first principles
- ✅ Identified 1 time/space tradeoff in each problem

If any ❌, slow down and retry. **Quality over speed.**

---

## 🚨 Common Pitfalls

| Pitfall | Fix |
|---------|-----|
| "I'll code first, analyze later" | Enforce 5-min approach before writing |
| "I'll skip commits" | Commit after each session (takes 1 min) |
| "I'll batch Week 1 into one commit" | Commit per problem (builds history) |
| "I'll solve faster by skipping edge cases" | Always ask: "What breaks?" before coding |
| "I'll move to Phase 2 without Phase 1 solid" | Respect checkpoints; quality > speed |

---

## 📞 How This Session Works

When you're ready to practice:

1. **Tell me the topic** (e.g., "Let's start Week 1 Day 1: Two Pointers")
2. **I'll ask:** "Restate the problem. What's your approach?"
3. **You code** (I stay quiet unless you ask for hints)
4. **Post-mortem:** We discuss complexity, edge cases, patterns
5. **Next:** Move to the next problem or concept

Example:
```
You: "I'm ready for two pointers"
Me: "Restate the problem. What's your approach?"
You: [explain your idea]
Me: "Walk me through the invariant."
You: [code, test, finish]
Me: "What breaks if input is empty? What's the complexity?"
```

---

## 🗂️ Folder Structure

```
socratic-agent/
├── README.md                    ← You are here
├── COMMIT_PROTOCOL.md           ← How to commit
├── .github/
│   ├── copilot-instructions.md ← Persona + rules
│   ├── curriculum.md            ← 8-12 week plan
│   └── progress.md              ← Your scoreboard
└── .git/                        ← Git history
```

---

## ✅ Quick Start Checklist

- [ ] Read this README (you just did!)
- [ ] Open [.github/curriculum.md](.github/curriculum.md) — scan Week 1
- [ ] Open [.github/progress.md](.github/progress.md) — see the baseline
- [ ] Skim [COMMIT_PROTOCOL.md](COMMIT_PROTOCOL.md) — understand commit format
- [ ] Pick **Week 1, Day 1 topic** (e.g., Two Pointers easy problem)
- [ ] Solve and time it
- [ ] Update progress.md
- [ ] Commit with the format from COMMIT_PROTOCOL.md
- [ ] Start a session: "Ready for Week 1 Day 1"

---

## 🎓 Success Looks Like

**After 4 weeks (Phase 1–2):**
- Solve medium LeetCode in 25–30 min with correct big-O ✅
- Explain closures, event loop, React hooks from first principles ✅
- Identify DSA patterns (two pointers, stack, DP) quickly ✅

**After 12 weeks (all phases):**
- Solve hard LeetCode consistently in 30–35 min ✅
- Timed mock interview score 85%+ ✅
- Design fullstack features with confidence ✅
- **Ready for interviews** 🚀

---

## 🤔 FAQ

**Q: How often should I commit?**  
A: After each problem or concept (3–5 commits/week). Keeps history scannable and reinforces learning.

**Q: What if I get stuck?**  
A: Ask me a question. I'll ask clarifying questions in return. If truly blocked, I'll give a hint (Socratic method: build understanding, not give answers).

**Q: Can I skip a week?**  
A: No. Phases build on each other. Phase 1 (weeks 1–3) must be solid before Phase 2.

**Q: What if I'm slower than the timeline?**  
A: Adjust: 5 days/week instead of 4, or extend the timeline. Quality over speed.

**Q: Should I use JavaScript or TypeScript?**  
A: **Prefer TypeScript.** It's listed as a preference, and fullstack roles expect TS knowledge. Interviews allow both.

---

## 🚀 Ready?

**Pick a starting topic:**
- DSA (two pointers, big-O reasoning) ← **Recommended for most**
- JavaScript (closures, scope)
- React (hooks mental model)

Tell me which one, and let's begin! 📚

---

*Last updated: January 4, 2026*
