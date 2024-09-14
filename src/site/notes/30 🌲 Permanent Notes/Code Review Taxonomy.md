---
{"dg-publish":true,"permalink":"/30-permanent-notes/code-review-taxonomy/","title":"Code Review Taxonomy","tags":["computer-science","peer-feedback","🪴"],"created":"2024-08-30","updated":"2024-09-13"}
---


- **S+**: Comments in this category provided positive feedback about a speciﬁc element of the code.
    - Good use of functions.
    - There were 4 functions used in total in the programme which makes it easier to read.
    - The commenting is very descriptive which is good.
- **S−**: Comments in this category provided speciﬁc negative feedback about the functionality, style or correctness of the program.
    - The title is not printed to screen.
    - A large section of code in the main function is indented too far.
    - Indentation: Block of code starting from line 111 has one level of indentation too many.
- **S0**: Comments in this category were speciﬁc, but were not obviously positive or negative in tone.
    - Otherwise comments are there.
    - Values may or may not be correctly allocated, this is irrelevant to the marking.
- **SA**: Comments in this category provided speciﬁc advice to a student about how to improve their code.
    - Your code should have terminated when the solutions were printed out. This did not happen because you wrote y = +1, which does not increment y. Instead, you should use y = y + 1 or y++.
    - When you are reading in the data, you need to keep a counter of the # characters, and when that matches the required data-set, the following data can be read in.
    - To prevent the majority of your code existing within an else statement (for the null ﬁle pointer test), you could place a 'return 1'; or exit in the else statement and continue your code outside of the conditional.
- **G+**: Comments in this category are general comments that are positive. The comments do not relate to a speciﬁc element of style or requirement speciﬁed in the assignment.
    - Good style.
    - Codes works well. Well done!
    - Nicely done.
- **G−**: Comments in this category are general negative comments. They do not refer to any speciﬁc elements of code, but are instead comments directed at the overall quality (summary comments).
    - Almost all marks lost here due to incompleteness.
    - This code appears incomplete.
    - Does not seem to work very well.
- **G0**: Comments in this category are general comments that do not have either positive or negative connotations.
    - I don't know this!
- **GA**: Comments in this category provided general advice to peers, but did not refer to speciﬁcs within the code.
    - Be more careful.
- **PV**: Comments in this category were personal in tone in that they recognised that the comments, although being about a submission, were directed to another person. Many of these were combined with one of the other categories, linked with a general or speciﬁc criticism.
    - Honestly, programming is not that hard - I’m sure if you tried, you could do it.
    - I don't get what you are trying to do here.
- **OT**: Comments in this category were off-topic.
    - Any comments on my marking or comments my mail is xxxxxx@hotmail.com.

## 📚 References

1. [[20 Literature Notes/hamer2015\|hamer2015]]
