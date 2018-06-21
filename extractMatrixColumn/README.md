### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/code-arcade/list-backwoods/zwXiykHLor6eKHaLY)
---
Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).

**Example**

For matrix = [[1, 1, 1, 2], 
          [0, 5, 0, 4], 
          [2, 1, 3, 6]]

          and column = 2, the output should be
          extractMatrixColumn(matrix, column) = [1, 0, 3].

**Hints**
-   push()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] array.array.integer matrix**
2-dimensional array of integers representing a rectangular matrix.

*Guaranteed constraints:*
1 ≤ matrix.length ≤ 4,
1 ≤ matrix[0].length ≤ 4,
0 ≤ matrix[i][j] ≤ 300.

- **[input] integer column**
An integer not greater than the number of matrix columns.

*Guaranteed constraints:*
0 ≤ column ≤ matrix[i].length - 1.

- **[output] array.integer**
