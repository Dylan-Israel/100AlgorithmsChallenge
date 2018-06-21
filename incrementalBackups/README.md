### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5)
---
One of the easiest ways to back up files is with an incremental backup. This method only backs up files that have changed since the last backup.

You are given a list of changes that were made to the files in your database, where for each valid i, changes[i][0] is the timestamp of the time the change was made, and changes[i][1] is the file id.

Knowing the timestamp of the last backup lastBackupTime, your task is to find the files which should be included in the next backup. Return the ids of the files that should be backed up as an array sorted in ascending order.

**Example**

For lastBackupTime = 461620205 and

changes = [[461620203, 1], 
           [461620204, 2], 
           [461620205, 6],
           [461620206, 5], 
           [461620207, 3], 
           [461620207, 5], 
           [461620208, 1]]
the output should be
incrementalBackups(lastBackupTime, changes) = [1, 3, 5].

Here's how the answer is calculated:

File with id = 1 was changed at 461620203 and 461620208, and since the last backup was at 461620205, it should be included in the next backup.
File with id = 2 was changed only at 461620204, so there's no need to back it up.
File with id = 3 was changed at 461620207, so it should be backed up next time.
File with id = 5 was changed at 461620206 and 461620207, so it should be included in the new backup as well.
File with id = 6 was changed at 461620205, so it can be ignored.

<img src='https://codefightsuserpics.s3.amazonaws.com/tasks/incrementalBackups/img/example.png?_tm=1490626049337'>

**Hints**
-   includes()
-   push()
-   sort()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] integer lastBackupTime**

A non-negative integer, the timestamp of the previous backup.

*Guaranteed constraints:*

4 · 108 ≤ lastBackupTime < 5 · 108

- **[input] array.array.integer changes**

Array of changes sorted lexicographically, where each change is given in the format as described above.
If for some i changes[i][0] = lastBackupTime, assume that the ith file was successfully backed up during the last backup.

*Guaranteed constraints:*

0 ≤ changes.length ≤ 100,
0 ≤ changes[i][0] ≤ 5 · 108,
0 ≤ changes[i][1] ≤ 100

-   **[output] array.integer**
Array of ids of the changes that should be backed up next time, sorted in ascending order.
