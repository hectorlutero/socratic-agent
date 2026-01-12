function maxArea(h: number[]): number {
  // SCENARIO 1: Initialize two pointers at endpoints
  // Why? Maximum width at the start. We'll shrink width intelligently.
  let left = 0;
  let right = h.length - 1;
  let best = 0;

  // SCENARIO 2: Loop until pointers meet
  // Each iteration eliminates one line that can't be part of a better solution
  while (left < right) {
    // Calculate current container area
    // Water level is LIMITED by the shorter line (bottleneck)
    let height = h[left] < h[right] ? h[left] : h[right];
    let width = right - left;
    let area = height * width;

    // Only update best if we found something better
    if (area > best) best = area;

    console.log(
      `left: ${left}, right: ${right}, height: ${height}, width: ${width}, area: ${area}, best: ${best}`
    );

    // SCENARIO 3: Decision — which pointer to move?
    //
    // Example: h = [3, 5, 7], left=0 (h=3), right=2 (h=7)
    // - Current: min(3,7)=3, width=2, area=6
    //
    // Option A: Move right (taller line)
    //   - New: left=0, right=1 → min(3,5)=3, width=1, area=3
    //   - Width decreased, height SAME (still capped at 3)
    //   - Result: worse ❌
    //
    // Option B: Move left (shorter line)
    //   - New: left=1, right=2 → min(5,7)=5, width=1, area=5
    //   - Width decreased, BUT height INCREASED (5 > 3)
    //   - Result: might be better ✅
    //
    // KEY INSIGHT: Always move the shorter pointer
    // - Moving taller pointer: guaranteed same or worse (bottleneck unchanged)
    // - Moving shorter pointer: our only chance to find a taller boundary
    h[left] < h[right] ? left++ : right--;
  }

  return best;
}

// ========================================
// TEST CASES — Different Scenarios
// ========================================

// CASE 1: Mix of heights with clear optimal pair
// Expected: 49 (indices 1 and 8: min(8,7) * 7 = 49)
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected: 49

// CASE 2: Ascending order
// Expected: 6 (indices 0 and 2: min(3,7) * 2 = 6)
// Why not (1,2)? min(5,7)*1=5 is smaller
console.log(maxArea([3, 5, 7])); // Expected: 6

// CASE 3: All equal heights
// Expected: 1 (indices 0 and 1: min(1,1) * 1 = 1)
// Width shrinks to 1 before loop exits
console.log(maxArea([1, 1])); // Expected: 1

// CASE 4: All same heights (longer array)
// Expected: 15 (indices 0 and 3: min(5,5) * 3 = 15)
// Maximum width wins when heights are equal
console.log(maxArea([5, 5, 5, 5])); // Expected: 15

// ========================================
// COMPLEXITY ANALYSIS
// ========================================
// Time: O(n) — single pass, each pointer moves at most n times
// Space: O(1) — only a fixed number of variables (left, right, best, etc.)
//
// Why not O(n²)?
// Brute force would check all pairs: nested loops
// Two pointers eliminates candidates intelligently in one pass

// ========================================
// ❌ COMMON MISTAKES — What NOT to Do
// ========================================

// MISTAKE #1: Blindly overwriting `best` instead of comparing
// ❌ WRONG:
function maxAreaWrong1(h: number[]): number {
  let left = 0;
  let right = h.length - 1;
  let best = 0;

  while (left < right) {
    let height = Math.min(h[left], h[right]);
    let width = right - left;
    best = height * width; // ❌ NO COMPARISON! Last value wins
    h[left] < h[right] ? left++ : right--;
  }
  return best;
}
// Why it fails: [3, 5, 7]
// - Iteration 1: area=6, best=6 ✅
// - Iteration 2: area=5, best=5 ❌ (overwrote the better value)
// Result: returns 5 instead of 6

// ========================================

// MISTAKE #2: Moving BOTH pointers at once
// ❌ WRONG:
function maxAreaWrong2(h: number[]): number {
  let left = 0;
  let right = h.length - 1;
  let best = 0;

  while (left < right) {
    let height = Math.min(h[left], h[right]);
    let width = right - left;
    let area = height * width;
    if (area > best) best = area;
    left++; // ❌ Moving both!
    right--; // ❌ Skipping candidates
  }
  return best;
}
// Why it fails: [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Only checks pairs: (0,8), (2,6), (4,4)
// Misses optimal pair (1,8) entirely!
// Result: returns 8 instead of 49

// ========================================

// MISTAKE #3: Always moving the TALLER pointer (backwards logic)
// ❌ WRONG:
function maxAreaWrong3(h: number[]): number {
  let left = 0;
  let right = h.length - 1;
  let best = 0;

  while (left < right) {
    let height = Math.min(h[left], h[right]);
    let width = right - left;
    let area = height * width;
    if (area > best) best = area;

    // ❌ BACKWARDS! Moving taller pointer = always worse
    h[left] > h[right] ? left++ : right--;
  }
  return best;
}
// Why it fails: [3, 5, 7]
// - Iteration 1: left=0(3), right=2(7), area=6, move RIGHT (taller)
// - Iteration 2: left=0(3), right=1(5), area=3 (stuck at bottleneck)
// Never tries left=1, right=2 which gives area=5
// Result: returns 6 by luck, but misses opportunities in other cases

// ========================================

// MISTAKE #4: Starting both pointers at the LEFT
// ❌ WRONG:
function maxAreaWrong4(h: number[]): number {
  let left = 0;
  let right = 1; // ❌ Both start near the left
  let best = 0;

  while (right < h.length) {
    let height = Math.min(h[left], h[right]);
    let width = right - left;
    let area = height * width;
    if (area > best) best = area;

    if (h[left] < h[right]) {
      left++;
    } else {
      right++;
    }
  }
  return best;
}
// Why it fails: Doesn't start with maximum width
// Misses many candidate pairs entirely
// Result: incorrect for most inputs

// ========================================

// MISTAKE #5: Trying to find the two tallest lines first
// ❌ WRONG (O(n²) brute force):
function maxAreaWrong5(h: number[]): number {
  let best = 0;

  // ❌ Nested loops = O(n²)
  for (let i = 0; i < h.length; i++) {
    for (let j = i + 1; j < h.length; j++) {
      let height = Math.min(h[i], h[j]);
      let width = j - i;
      let area = height * width;
      if (area > best) best = area;
    }
  }
  return best;
}
// Why it's wrong: Works correctly BUT too slow!
// For 10,000 elements: 50 million operations vs 10,000
// Interview killer: correct but inefficient = FAIL

// ========================================

// MISTAKE #6: Forgetting the MIN (using max or sum)
// ❌ WRONG:
function maxAreaWrong6(h: number[]): number {
  let left = 0;
  let right = h.length - 1;
  let best = 0;

  while (left < right) {
    let height = Math.max(h[left], h[right]); // ❌ Should be MIN!
    let width = right - left;
    let area = height * width;
    if (area > best) best = area;
    h[left] < h[right] ? left++ : right--;
  }
  return best;
}
// Why it fails: Water overflows shorter side!
// Container can't hold more than the shorter boundary allows
// Result: wildly incorrect answers

// ========================================
// TEST MISTAKES (uncomment to see failures)
// ========================================

console.log("\n❌ TESTING COMMON MISTAKES:\n");

console.log("MISTAKE #1 (no comparison):", maxAreaWrong1([3, 5, 7]));
console.log("Expected: 6, Got:", maxAreaWrong1([3, 5, 7]), "❌\n");

console.log(
  "MISTAKE #2 (both pointers move):",
  maxAreaWrong2([1, 8, 6, 2, 5, 4, 8, 3, 7])
);
console.log(
  "Expected: 49, Got:",
  maxAreaWrong2([1, 8, 6, 2, 5, 4, 8, 3, 7]),
  "❌\n"
);

console.log("MISTAKE #3 (move taller):", maxAreaWrong3([1, 2, 4, 3]));
console.log(
  "Expected: 4, Got:",
  maxAreaWrong3([1, 2, 4, 3]),
  "(works by luck but wrong logic) ❌\n"
);

console.log(
  "MISTAKE #4 (start at left):",
  maxAreaWrong4([1, 8, 6, 2, 5, 4, 8, 3, 7])
);
console.log(
  "Expected: 49, Got:",
  maxAreaWrong4([1, 8, 6, 2, 5, 4, 8, 3, 7]),
  "❌\n"
);

console.log("MISTAKE #5 (brute force O(n²)):", maxAreaWrong5([3, 5, 7]));
console.log(
  "Expected: 6, Got:",
  maxAreaWrong5([3, 5, 7]),
  "✅ (correct but TOO SLOW) ❌\n"
);

console.log("MISTAKE #6 (using max instead of min):", maxAreaWrong6([3, 5, 7]));
console.log("Expected: 6, Got:", maxAreaWrong6([3, 5, 7]), "❌\n");
