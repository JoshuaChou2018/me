# DDA3020-2025-Fall Machine Learning


### Course Description

This course provides an introduction to the field of machine learning, covering fundamental concepts, algorithms, and applications. Students will learn various machine learning techniques, including classic machine learning algorithms (Linear regression, Support Vector Machine, K-Means, etc.), and neural networks (MLP, CNN, RNN, Transformer). The course combines theoretical foundations with practical implementation, preparing students for advanced study and research in machine learning. 
By the end of this course, students will be able to:

- Understand the fundamental concepts and principles of machine learning.
- Implement and apply various machine learning algorithms.
- Analyze and solve real-world problems using machine learning techniques.
- Evaluate the performance of machine learning models.

<br>

### Teaching Team

#### Instructors

- Session 1: 
  - Prof. [Jicong Fan](https://sds.cuhk.edu.cn/en/teacher/331) (fanjicong@cuhk.edu.cn)
- Session 2: 
  - Prof. [Juexiao Zhou](https://www.joshuachou.ink/about/) (juexiao.zhou@gmail.com)
  - Office location: Zhixin Building 403b
  - Office hours: 10:00--11:00 am, Tuesday in the odd weeks (3/5/7/9/11/13)

#### TAs

- TBD
- TBD

<br>

### Course Time and Location

#### Session 1

| Day      | Start | End   | Location | Type    |
| -------- | ----- | ----- | -------- | ------- |
| Tuesday  | 13:30 | 15:00 | TB_104   | lecture |
| Thursday | 13:30 | 15:00 | TB_104   | lecture |

#### Session 2

| Day      | Start | End   | Location | Type    |
| -------- | ----- | ----- | -------- | ------- |
| Tuesday  | 15:30 | 17:00 | TxC201   | lecture |
| Thursday | 15:30 | 17:00 | TxC201   | lecture |



<br>

### Teaching Format

In-person. Slides will be available the day before the lecture.

<br>

### Logistics

#### Communications

- **Blackboard** is the main software to manage the course, and grading will be through Blackboard. 
- We will use **Feishu** (Group QR code will be released in the first lecture) for discussion. You can ask questions and discuss on Feishu. For personal matters, please send a private message to the instructor or TAs. You are also very welcome to send emails to the teaching team.

#### Grading

- **Written Assignment (30%)**: Three graded homeworks (W1, W2, W3; 10%, 10%, 10%).
- **Programming Assignment (20%)**: Two graded programming homeworks (P1, P2; 10%, 10%).
- **Course Project (10%)**: A graded individual project with a pre-defined topic. The project has two components: final code submission (5%) and a final report (5%). 
- **Final exam (40%)**: A graded final exam.

**Late Submission:**

- You have 2 weeks to independently complete each assignment (written & programming). 
- Late submission will get a discounted score: **(0, 48] hours →50%; (48, ∞) hours →0%**.

**Plagiarism:**

- Zero marks are given for the whole assignment (including written and programming) in the first plagiarism case. 
- Students will FAIL the whole course for repeated plagiarism. 
- Note: If there are heavy overlaps between two answers, then both will be identified as plagiarism (we don’t have time to distinguish). Thus, discussions are encouraged, but you must finish the assignment by yourself, and don’t share your answer with others.

**Final Grading:** will be determined according to the distribution of all students.

#### AI Tools Use Policy

- You can use AI tools, including ChatGPT, to polish your report if applicable. You are also encouraged to use AI tools to help with your learning.
- However, you are required to submit both your own version and the one polished using AI tools. 
- You are required to write a statement about how you used AI tools and which part of the report. We will grade the one you would like us to grade, but if you do not hand in your own version, we will not consider the submission complete.

#### Programming

- Python (the TA will prepare a recitation class to introduce it, mainly for the non-grading homework and your project) or any other languages that you are familiar with. For Python, we suggest you use [Colab](https://colab.research.google.com/notebooks/intro.ipynb). 

#### Projects

- The course project topic will be announced later.

#### Post-lecture Survey

- Deadline for each survey: **11:59 pm on the day before the next lecture**. 
- We do this because we could have time to answer the questions you mentioned in the survey. We also encourage you to complete all of them so that we know your feedback and can adjust the course accordingly.

<br>

### Course Schedule and Materials

| Week | Lecture | Date         | Location                   | Topic                                             | Slides | Notes | Reading | Important dates (All due at 11:59 pm) |
| ---- | ------- | ------------ | -------------------------- | ------------------------------------------------- | ------ | ----- | ------- | ------------------------------------- |
| W1   | 1       | Sep 2 (Tue)  | TB_104 (S1) /  TxC201 (S2) | Introduction                                      |        |       |         |                                       |
| W1   | 2       | Sep 4 (Thu)  | TB_104 (S1) /  TxC201 (S2) | Introduction                                      |        |       |         |                                       |
| W2   | 3       | Sep 9 (Tue)  | TB_104 (S1) /  TxC201 (S2) | Review: Probability, linear algebra, optimization |        |       |         |                                       |
| W2   | 4       | Sep 11 (Thu) | TB_104 (S1) /  TxC201 (S2) | Review: Probability, linear algebra, optimization |        |       |         |                                       |
| W3   | 5       | Sep 16 (Tue) | TB_104 (S1) /  TxC201 (S2) | Linear regression                                 |        |       |         | W1 + P1 release                       |
| W3   | 6       | Sep 18 (Thu) | TB_104 (S1) /  TxC201 (S2) | Linear regression                                 |        |       |         |                                       |
| W4   | 7       | Sep 23 (Tue) | TB_104 (S1) /  TxC201 (S2) | Logistic regression                               |        |       |         |                                       |
| W4   | 8       | Sep 25 (Thu) | TB_104 (S1) /  TxC201 (S2) | Logistic regression                               |        |       |         |                                       |
| W5   | 9       | Sep 30 (Tue) | TB_104 (S1) /  TxC201 (S2) | Support vector machine                            |        |       |         |                                       |
| W5   | 10      | Oct 9 (Thu)  | TB_104 (S1) /  TxC201 (S2) | Support vector machine                            |        |       |         |                                       |
| W6   | 11      | Oct 14 (Tue) | TB_104 (S1) /  TxC201 (S2) | Decision tree and random forest                   |        |       |         |                                       |
| W6   | 12      | Oct 16 (Thu) | TB_104 (S1) /  TxC201 (S2) | Decision tree and random forest                   |        |       |         | W2 + P2 release                       |
| W7   | 13      | Oct 21 (Tue) | TB_104 (S1) /  TxC201 (S2) | Neural networks I (MLP & CNN)                     |        |       |         |                                       |
| W7   | 14      | Oct 23 (Thu) | TB_104 (S1) /  TxC201 (S2) | Neural networks I (MLP & CNN)                     |        |       |         | Project release                       |
| W8   | 15      | Oct 28 (Tue) | TB_104 (S1) /  TxC201 (S2) | Neural networks II (RNN & Transformer)            |        |       |         |                                       |
| W8   | 16      | Oct 30 (Thu) | TB_104 (S1) /  TxC201 (S2) | Neural networks II (RNN & Transformer)            |        |       |         |                                       |
| W9   | 17      | Nov 4 (Tue)  | TB_104 (S1) /  TxC201 (S2) | Over-fitting, bias-variance trade-off             |        |       |         |                                       |
| W9   | 18      | Nov 6 (Thu)  | TB_104 (S1) /  TxC201 (S2) | Over-fitting, bias-variance trade-off             |        |       |         |                                       |
| W10  | 19      | Nov 11 (Tue) | TB_104 (S1) /  TxC201 (S2) | Performance evaluation                            |        |       |         |                                       |
| W10  | 20      | Nov 13 (Thu) | TB_104 (S1) /  TxC201 (S2) | Performance evaluation                            |        |       |         |                                       |
| W11  | 21      | Nov 18 (Tue) | TB_104 (S1) /  TxC201 (S2) | Introduction to unsupervised learning, K-means    |        |       |         | W3 release                            |
| W11  | 22      | Nov 20 (Thu) | TB_104 (S1) /  TxC201 (S2) | Introduction to unsupervised learning, K-means    |        |       |         |                                       |
| W12  | 23      | Nov 25 (Tue) | TB_104 (S1) /  TxC201 (S2) | Expectation Maximization                          |        |       |         |                                       |
| W12  | 24      | Nov 27 (Thu) | TB_104 (S1) /  TxC201 (S2) | Expectation Maximization                          |        |       |         |                                       |
| W13  | 25      | Dec 2 (Tue)  | TB_104 (S1) /  TxC201 (S2) | PCA                                               |        |       |         |                                       |
| W13  | 26      | Dec 4 (Thu)  | TB_104 (S1) /  TxC201 (S2) | PCA                                               |        |       |         |                                       |
| W14  | 27      | Dec 9 (Tue)  | TB_104 (S1) /  TxC201 (S2) | Review                                            |        |       |         |                                       |
| W14  | 28      | Dec 11 (Thu) | TB_104 (S1) /  TxC201 (S2) | Review                                            |        |       |         |                                       |
|      |         | TBD          | TBD                        | Final Exam                                        |        |       |         |                                       |

<br>

### Written Assignment 

- W1
- W2
- W3

<br>

### Programming Assignment

- P1
- P2

<br>

### Course Project

- TBD

