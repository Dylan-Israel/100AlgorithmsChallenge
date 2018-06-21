### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/code-arcade/labyrinth-of-nested-loops/MvX84CA5HN6GKqv7R/description)
---
Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

**Example**

For a0 = 16, the output should be
squareDigitsSequence(a0) = 9.

Here's how elements of the sequence are constructed:

-   a0 = 16
-   a1 = 1^2 + 6^2 = 37
-   a2 = 3^2 + 7^2 = 58
-   a3 = 5^2 + 8^2 = 89
-   a4 = 8^2 + 9^2 = 145
-   a5 = 1^2 + 4^2 + 52 = 42
-   a6 = 4^2 + 2^2 = 20
-   a7 = 2^2 + 0^2 = 4
-   a8 = 4^2 = 1^6, which has already occurred before (a0)

Thus, there are 9 elements in the sequence.

-   For a0 = 103, the output should be
squareDigitsSequence(a0) = 4.

The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.

**Hints**
-   includes()
-   push()
-   toString()
-   split()
-   map()
-   parseInt()
-   reduce()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] integer a0**

First element of a sequence, positive integer.

*Guaranteed constraints:*

1 ≤ a0 ≤ 650.

**[output] integer**