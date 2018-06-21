### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ)
---

Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1491302317375)

**Example**

- For n = 2, the output should be
shapeArea(n) = 5;
- For n = 3, the output should be
shapeArea(n) = 13.

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] integer n**

*Guaranteed constraints:*

1 ≤ n < 104.

- **[output] integer**

The area of the n-interesting polygon.