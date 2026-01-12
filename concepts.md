# DSA Concepts Reference

Quick reference for fundamental concepts used throughout the curriculum.

---

## Big-O Notation (Time Complexity)

Big-O describes **how runtime grows** as input size `n` increases. We ignore constants and focus on the dominant term.

| Notation   | Name         | Example                  | 10 elements | 100 elements | 1000 elements |
| ---------- | ------------ | ------------------------ | ----------- | ------------ | ------------- |
| O(1)       | Constant     | Array access by index    | 1           | 1            | 1             |
| O(log n)   | Logarithmic  | Binary search            | ~3          | ~7           | ~10           |
| O(n)       | Linear       | Single loop              | 10          | 100          | 1,000         |
| O(n log n) | Linearithmic | Merge sort, quick sort   | ~33         | ~664         | ~10,000       |
| O(n²)      | Quadratic    | Nested loops (all pairs) | 100         | 10,000       | 1,000,000     |
| O(2ⁿ)      | Exponential  | Recursive subsets        | 1,024       | 10³⁰         | ∞ (too big)   |

### Key Insight

When comparing algorithms:

- O(n) vs O(n²) for 100 elements: 100 vs 10,000 → **100× faster**
- O(n) vs O(n²) for 1,000 elements: 1,000 vs 1,000,000 → **1,000× faster**

The gap grows as input grows. That's why we care!

### How to Identify Big-O

1. **Single loop over n elements** → O(n)
2. **Nested loops (loop inside loop)** → O(n²)
3. **Loop that halves each time** → O(log n)
4. **No loops, direct access** → O(1)

---

## Space Complexity

Same notation, but measures **memory used**.

| Notation | Example                      |
| -------- | ---------------------------- |
| O(1)     | Fixed number of variables    |
| O(n)     | New array same size as input |
| O(n²)    | 2D matrix of size n×n        |

---

## Two Pointers Pattern

**When to use:** Array/string problems where you need to find pairs or compare elements from different positions.

**Setup:**

- `left` pointer starts at index 0
- `right` pointer starts at index `n - 1` (end)
- Move pointers inward based on some condition

**Why it works:**

- Starts with **maximum width** (endpoints)
- Each move eliminates candidates we know can't be optimal
- Single pass → O(n)

**Template:**

```typescript
function twoPointers(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  let result = 0;

  while (left < right) {
    // Calculate current value
    // Update result if better
    // Move the pointer that limits improvement
    if (someCondition) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}
```

**Used in:**

- [Day 1: Valid Palindrome](./problems/week-1.md#day-1--valid-palindrome-two-pointers)
- [Day 2: Max Water Container](./problems/week-1.md#day-2--max-water-between-two-lines-two-pointers)

---

## Container Problem — Geometry

Imagine a 2D side view:

```
Height (h[i])
  │
8 │     █           █
7 │     █           █   █
6 │     █   █       █   █
5 │     █   █   █   █   █
4 │     █   █   █   █   █
3 │     █   █   █   █   █   █
2 │     █   █   █   █   █   █
1 │ █   █   █   █   █   █   █
  └───────────────────────────→ Index
    0   1   2   3   4   5   6
```

**Variables:**

- `i` = index of left line
- `j` = index of right line (where `j > i`)
- `h[i]` = height of line at index `i`
- Width = `j - i`
- Water level = `min(h[i], h[j])` (limited by shorter line)

**Formula:**

```
Area = min(h[i], h[j]) × (j - i)
```

**Key insight:** We want to maximize area. Two factors:

1. Height (taller lines = more water)
2. Width (farther apart = more water)

Trade-off: Tallest lines might be close together. We need to balance both.

---

## Prefix Sum Pattern

**When to use:** Subarray sum queries, counting subarrays with target sum.

**Idea:** Precompute cumulative sums so any subarray sum = `prefix[j] - prefix[i]`.

**Used in:**

- [Day 3: Count Subarrays Summing to Target](./problems/week-1.md#day-3--count-subarrays-summing-to-target-prefix-sum--hashing)

---

## Closures (JavaScript)

**Definition:** A closure is a function that remembers variables from its outer scope, even after that outer function has returned.

**Mental model:**

1. When a function is created, it captures a reference to its surrounding scope
2. This captured scope stays alive as long as the inner function exists
3. Each call to the outer function creates a _new_ scope

**Used in:**

- [Day 4: Closures Drills](./problems/week-1.md#day-4--javascript-closures-drills)

---

## Quick Reference Links

- [Week 1 Problems](./problems/week-1.md)
- [Progress Tracker](./.github/progress.md)
- [Curriculum](./.github/curriculum.md)
