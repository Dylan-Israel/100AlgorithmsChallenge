### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/interview-practice/task/njfXsvjRthFKmMwLC)
---
Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.

**Example**
-   For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
containsCloseNums(nums, k) = true.

There are two 2s in nums, and the absolute difference between their positions is exactly 3.

-   For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be

containsCloseNums(nums, k) = false.

The absolute difference between the positions of the two 2s is 3, which is more than k.

**Hints**
-   Math.abs()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] array.integer nums**
    A string representing a positive integer without leading zeroes.

    *Guaranteed constraints:*

    0 ≤ nums.length ≤ 55000,
    -231 - 1 ≤ nums[i] ≤ 231 - 1.

- **[input] integer k**

   *Guaranteed constraints:*

    0 ≤ k ≤ 35000.

-   **[output] boolean**
