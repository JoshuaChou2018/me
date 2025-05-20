# CSC6113-Fall-2025 Automated Software Testing and Analysis


# CSC6113-Fall-2025: Automated Software Testing and Analysis

### Course Description

This course explores both foundational and cutting-edge techniques in software testing and analysis, with a focus on enhancing reliability, performance, and security. Topics include coverage metrics, metamorphic testing, mutation testing, combinatorial testing, fuzzing, and AIOps. Students will examine the application of these techniques across diverse domains such as machine translation, databases, mobile applications, and cloud computing. Emphasis is placed on recent research developments and practical implementation. By the end of the course, students will be able to critically analyze and apply these techniques through a hands-on course project.

<br>

### Teaching Team

Lecturer:

- Juexiao Zhou (juexiaozhou@cuhk.edu.cn). Office location: TBD. Office hours: TBD.

TAs:

- TBD
- TBD

<br>

### Course Time and Location

TBD (lecture)

TBD (lecture)

TBD (tutorial)

<br>

### Format

In-person. Slides will be available the day before the lecture.

<br>

### Logistics

#### Communications

- **Blackboard** is the main software to manage the course, and grading will be through Blackboard. 
- We will use **Feishu** (Group QR code will be released in the first lecture) for discussion. You can ask questions and discuss on Feishu. For personal matters, please send a private message to the instructor or the TA. You are also very welcome to send emails to the teaching team.

#### Grading

- **Homework (30%)**: Three graded homework (A1, A2, A3; 10%, 10%, 10%).
- **In-class quiz (10%)**: Two in-class quizzes (5% each). The questions will be simple, mainly for checking the participation. The exact date is in the schedule below.
- **Midterm exam (20%)**: A graded midterm exam with one bonus question (extra 1%). 
- **Project (20%)**: A graded individual project with a pre-defined or self-proposed topic. The project has three components: a midterm report (5%), a final report (10%), and a presentation (5%). 
- **Final exam (20%)**: A graded final exam with one bonus question (extra 1%).

**Bonus (5%)**:

- One bonus question in the Midterm exam (1%) and one bonus question in the Final exam (1%).
- Post-lecture surveys: 0.5% for each, and the maximum is 3%. I do encourage you to complete all of them so that I know your feedback and can adjust the course accordingly. Send your names to the TAs after completion. 

**Final Grading:** will be determined according to the distribution of all students.

- A class (A, A-): ~20%
- B class (B+, B, B-): ~60%
- C class (C+, C, C-): ~20%
- D class (D+, D-): accordingly.
- F class: accordingly.

#### Open-book quiz and exam policy

- All exams and quizzes are open-book. 
- You are allowed to take any **paper-based materials**. 
- However, no phone or computer is allowed. 
- Other communication tools are also not allowed. 
- Discussion is not allowed.

#### AI tools use policy

- You can use AI tools, including ChatGPT, in the project to polish your report. 
- However, you are required to submit both your own version and the one polished using AI tools. 
- You are required to write a statement about how you used AI tools and which part of the report. We will grade on the one you would like us to grade, but if you do not hand in your own version, we will not consider the submission complete.

#### Programming

- Python (the TA will prepare a recitation class to introduce it, mainly for the non-grading homework and your project) or any other languages that you are familiar with. For python, we suggest you to use [Colab](https://colab.research.google.com/notebooks/intro.ipynb). 

The programming assessments include a non-graded programming assignment (5%) and the implementation in the project (5%). The bonus is sufficient to cover all the programming credit in the project, if you really do not want to try hand-on experiments at all. We do encourage you try.

#### Projects

We will have individual projects. You can propose your project to us and seek our help, or we will predefine some projects for you to choose from. Some potential project topics:

- From reads to gene expression matrix processing pipeline
- Gene expression matrix processing pipeline
- Single-cell RNA-seq processing pipeline 
- Bio-image classification
- Cancer gene identification
- Gene enrichment analysis

Both a midterm report (1 page) and a final report should be submitted.

#### Late days

Each student will have **6 late days** to turn in the assignments, which can be used on A1, A2, A3, PA1, and the project midterm report. They cannot be used on the project final report and the scribing note. A maximum of 2 late days can be used for each assignment. Grades will be deducted by 25% for each additional late day.

#### Post-lecture survey

Deadline for each survey: **11:59pm on the day before the next lecture**. We do this because we could have time to answer the questions you mentioned in the survey. Please enter a “1” in the Google sheet: [Survey results](https://docs.google.com/spreadsheets/d/1xYWAb7NcAQWl1i3lEX4McRZ_bvnWel3fPE409UXp2Xw/edit?usp=sharing), once you have finished one survey. Usually, we will trust the 1s you fill in the Google sheet. But we will check the things in detail if the number of survey forms we received and the number of 1s on the Google sheet is not consistent.

### Course schedule and materials

| Lecture | Date         | Location | Topic                                                        | Slides | Notes | Reading | Important dates (All due at 11:59 pm) |
| ------- | ------------ | -------- | ------------------------------------------------------------ | ------ | ----- | ------- | ------------------------------------- |
| 1       | Sep 4 (Wed)  |          | Introduction to Software Testing & Automation                |        |       |         |                                       |
| 2       | Sep 6 (Fri)  |          | Unit Testing Frameworks                                      |        |       |         | PA0 posted                            |
| 3       | Sep 11 (Wed) |          | Hands-on with Automation Tools                               |        |       |         |                                       |
| 4       | Sep 13 (Fri) |          | Test Coverage Analysis                                       |        |       |         | A1 posted                             |
| 5       | Sep 20 (Fri) |          | Static Code Analysis                                         |        |       |         | PA0 due                               |
| 6       | Sep 25 (Wed) |          | Dynamic Code Analysis                                        |        |       |         |                                       |
| 7       | Sep 27 (Fri) |          | Mocking & Dependency Injection                               |        |       |         | A1 due                                |
| 8       | Oct 2 (Wed)  |          | Regression Testing & Continuous Integration (CI)             |        |       |         |                                       |
| 9       | Oct 4 (Fri)  |          | Automated Test Case Generation                               |        |       |         | A2 posted                             |
| 10      | Oct 9 (Wed)  |          | Test-Driven Development (TDD) & Behavior-Driven Development (BDD) |        |       |         |                                       |
| 11      | Oct 16 (Wed) |          | Security Testing & Maintainability Analysis                  |        |       |         |                                       |
| 12      | Oct 18 (Fri) |          |                                                              |        |       |         | Quiz, A2 due                          |
| 13      | Oct 23 (Wed) |          |                                                              |        |       |         | 8:30am-11:15am, Midterm exam          |
|         |              |          | Module 2 start                                               |        |       |         |                                       |
| 14      | Oct 25 (Fri) |          |                                                              |        |       |         |                                       |
| 15      | Oct 30 (Wed) |          |                                                              |        |       |         | PA1 posted                            |
| 16      | Nov 1 (Fri)  |          |                                                              |        |       |         |                                       |
| 17      | Nov 6 (Wed)  |          |                                                              |        |       |         |                                       |
| 18      | Nov 8 (Fri)  |          |                                                              |        |       |         | Project M-report (Proposal) due       |
|         |              |          | Module 3 start                                               |        |       |         |                                       |
| 19      | Nov 13 (Wed) |          |                                                              |        |       |         | A3 posted                             |
| 20      | Nov 15 (Fri) |          |                                                              |        |       |         | PA1 due                               |
| 21      | Nov 20 (Wed) |          |                                                              |        |       |         |                                       |
| 22      | Nov 22 (Fri) |          |                                                              |        |       |         | A3 due                                |
| 23      | Nov 27 (Wed) |          | Project Presentation                                         |        |       |         | Quiz                                  |
| 24      | Nov 29 (Fri) |          | Project Presentation                                         |        |       |         | Project report due on 2 Dec           |

### Assignments

- Programming Assignment 0: Get yourself familiar with [Colab](https://colab.research.google.com/notebooks/intro.ipynb), set up the environment and run a sample code.
- Assignment 1: Basic concept of data analytics-1
- Assignment 2: Basic concept of data analytics-2
- Programming Assignment 1: Application of DA to biology
- Assignment 3: DA in Personalized Genomics and Precision Medicine

