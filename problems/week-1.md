# Week 1 — Problem Statements (Paraphrased)

These are concise, original descriptions to practice common patterns. They avoid copying any platform text.

> 📚 **Concepts Reference:** See [concepts.md](../concepts.md) for Big-O, two pointers, prefix sum, and closures explanations.

---

## Day 1 — Valid Palindrome (Two Pointers)

Given a string, check if it reads the same forward and backward when considering only letters and digits and ignoring case. Skip any non‑alphanumeric characters while comparing.

- Input example: `"A man, a plan, a canal: Panama"`
- Output: `true`
- Pattern: move `left` from start and `right` from end; skip non‑alphanumeric; compare lowercase.

---

## Day 2 — Max Water Between Two Lines (Two Pointers)

You are given an array of non‑negative integers `h`, where `h[i]` is the height of a vertical line at position `i`. Pick two positions `i < j` to form a container with the x‑axis. The area is `min(h[i], h[j]) * (j - i)`. Return the maximum possible area.

- Example: `h = [1, 2, 1]` → max area = `2` (lines at indices 0 and 2)
- Constraints: `h.length >= 2`, heights are integers ≥ 0
- Pattern: two pointers `l` and `r`; move the pointer at the shorter line inward to try to find a taller boundary; keep the best area.

---

## Day 3 — Count Subarrays Summing to Target (Prefix Sum + Hashing)

Given an integer array `nums` and an integer `target`, count how many contiguous subarrays have sum exactly equal to `target`.

- Example: `nums = [1, 1, 1]`, `target = 2` → `2`
- Pattern: prefix sum with a hashmap of seen sums; for each position with prefix `p`, add counts of `p - target`.

---

## Day 4 — JavaScript Closures Drills

Predict outputs and explain why:

1. What is logged?

```js
function makeCounter() {
  let c = 0;
  return () => ++c;
}
const a = makeCounter();
console.log(a());
console.log(a());
const b = makeCounter();
console.log(b());
```

2. Why are these different?

```js
let x = 1;
function f() {
  console.log(x);
}
(function () {
  let x = 2;
  f();
})();
```

3. Fix the bug so each timeout logs 0,1,2:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

Write your explanations in your own words.
