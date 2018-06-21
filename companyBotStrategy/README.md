### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/company-challenges/codefights/gJMBmTwHHMF8mbQvH)
---
All four trainers have solved the task correctly, so the answer is (3 + 6 + 4 + 5) / 4 = 4.5.
Each CodeFights Company Bot is trained by engineers from that specific company. The way it works is that a representative group of engineers from each company is identified as trainers before the bot goes live, and they CodeFight against the bot during a training phase. The current training algorithm is definitely more complex, but let's assume it works this way:

For each trainer we collect two pieces of information per task [answerTime, correctness], where correctness is 1 if the answer was correct, -1 if the answer was wrong, and 0 if no answer was given. In this case, the bot's correct answer time for a given task would be the average of the answer times from the trainers who answered correctly. Given all of the training information for a specific task, calculate the bot's answer time.

**Example**
-   For

    trainingData = [[3, 1],
                [6, 1],
                [4, 1],
                [5, 1]]
the output should be companyBotStrategy(trainingData) = 4.5.

-   For

    trainingData = [[4, 1],
                [4, -1],
                [0, 0],
                [6, 1]]
the output should be companyBotStrategy(trainingData) = 5.0.

Only the 1st and the 4th trainers (1-based) submitted correct solutions, so the answer is (4 + 6) / 2 = 5.0.

-   For

    trainingData = [[4, -1],
                [0, 0],
                [5, -1]]
the output should be companyBotStrategy(trainingData) = 0.0.

No correct answers were given for the task.

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] array.array.integer trainingData**
    The ith element of trainingData contains exactly 2 elements: trainingData[i][0] is the answer time for the ith person and trainingData[i][1] is correctness.

If a trainer answered correctly, then correctness equals 1;
If a trainer answered incorrectly, then correctness equals -1;
If a trainer didn't give any answer, answerTime and correctness both equal to 0.

*Guaranteed constraints:*

1 ≤ trainingData.length ≤ 20.

- **[output] float**

The time the bot will take to solve a specific task. Return 0 if none of the trainers answered correctly. Your output will be considered correct if its absolute error does not exceed 10-5 compared to our tests.