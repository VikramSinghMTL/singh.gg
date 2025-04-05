---
{"title":"Research Proposal","created":"2024-04-27","modified":"2024-09-13","dg-publish":true,"permalink":"/50-works/research/research-proposal/","dgPassFrontmatter":true,"updated":"2024-09-13"}
---


## ABSTRACT

## LIST OF TABLES

## LIST OF FIGURES

## LIST OF ACRONYMS

- CS: Computer Science
- PCR: Peer Code Review
- GBL: Games-based Learning
- SDT: Self-Determination Theory
- IMI: Intrinsic Motivation Inventory
- CRT: Code Review Taxonomy

## CHAPTER 1: PROBLEM STATEMENT


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/50-works/research/problem-statement/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





A fundamental part of professional software development [@li2006], Peer Code Review (PCR) involves developers evaluating each other's code based on style guides and best practices. These reviews often focus on aspects such as naming conventions, function scope, spacing, and documentation, and typically lead to a back-and-forth dialogue aimed at improving code quality. PCR is widely adopted in the industry as a key quality assurance practice, and educational research suggests it can also support student learning by encouraging reflection, collaboration, and analytical thinking [@race2001; @powell2009].

Despite these pedagogical benefits, a common challenge in CS education is that students are often unmotivated to provide high-quality peer feedback [@indriasari2021a]. This lack of motivation can stem from time constraints, unclear incentives, or uncertainty about the value of the review process.

In terms of Self-Determination Theory (SDT) [@deci1985; @deci1994], low motivation in PCR can be understood as the result of unmet psychological needs. The first of these is _autonomy_, or the perception that one's actions are self-directed and meaningful. In many peer feedback contexts, students report feeling that they are completing the activity out of obligation rather than intrinsic interest [@pintrich2003; @indriasari2021a]. They may not see the purpose of peer feedback beyond grading requirements, and the task itself may lack personal relevance or choice, leading to surface-level participation [@ramsden2003]. Additionally, structural features of the CEGEP system, most notably the R-score, which compares students’ academic performance relative to their peers, can reinforce a sense of external pressure and competition. Some students report that this system diminishes their sense of control and shifts their focus away from personal learning toward outperforming classmates [@dagres2017]. These pressures may reduce intrinsic motivation by making success feel contingent on circumstances outside the student’s control.

The second need, _competence_, refers to feeling capable of succeeding in a task. Students may avoid giving detailed feedback because they feel unqualified to assess someone else's code, particularly when their peers are at different skill levels [@bandura2012; @perez-quinones2009]. This perceived lack of expertise can reduce confidence and lead to vague or minimal comments that fail to foster learning, neither for the reviewer nor the recipient [@indriasari2020; @petersen2018].

Finally, _relatedness_ reflects the need to feel socially connected and respected within a learning environment. In peer review situations, students may feel isolated, especially if feedback is anonymized or asynchronous. They might be reluctant to critique others' work for fear of damaging relationships or being judged themselves [@powell2009; @indriasari2023]. Without a sense of shared purpose or community, the peer review process can feel impersonal and transactional rather than collaborative.

While logistical and interpersonal challenges can also impact the effectiveness of PCR [@falchikov2013a; @indriasari2023], the motivational barriers described above, low autonomy, competence, and relatedness, remain particularly challenging in traditional peer review settings. Therefore, what has been unveiled is a need to explore alternative instructional strategies that can better support these psychological needs and improve efficacy within the feedback process.


</div></div>


## CHAPTER 2: CONCEPTUAL FRAMEWORK


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/50-works/research/conceptual-framework/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





Providing effective code review feedback is a fundamental skill for Computer Science (CS) students as they prepare to enter the workforce [@sadowski2018]. From my experience as a professional software developer in the industry, I can attest to how important Peer Code Review (PCR) is for programmers. From my experience as a CS student, I know that traditional academic approaches do not always motivate learners, especially for the PCR process. Superficial feedback benefits neither the reviewer nor the reviewee and does little to improve code quality or encourage deep learning [@ramsden2003]. It is important to create an environment where feedback is constructive and empowers students as part of the development process [@hattie2007]. This is particularly beneficial for developing essential feedback skills in professional software developers. As a CS teacher, I have seen firsthand how unmotivated students can be during PCR sessions.

Low motivation during PCR in the classroom poses a significant challenge for educators aiming to maximize the effectiveness of PCR practices. As such, [[30 Permanent Notes/Self-Determination Theory\|Self-Determination Theory]] (SDT) is a meta-theory of human motivation and personality, grounded in psychological science, that provides a potential lens for understanding this phenomenon by highlighting the of three fundamental psychological needs (competence, autonomy, relatedness) for intrinsic motivation [@deci1985; @deci1994]. These terms are defined as: _competence_, where students may doubt their ability to provide valuable feedback or feel that the focus is solely on error-finding or quality-assurance testing; _autonomy_, where limited choices in how to conduct PCR (code to review, feedback format, etc.) may stifle student ownership; and _relatedness_, where a lack of community focus or a shared sense of purpose can diminish the feeling that PCR is a collaborative improvement process. Traditional PCR approaches may fail to adequately support these needs.

Game-Based Learning (GBL) offers a promising approach to address these motivational barriers hindering effective PCR. GBL prioritizes immersion, challenge, and (sometimes) social interaction [@papastergiou2009]. These elements have the potential to: _enhance competence_, where well-designed challenges and in-game rewards can build confidence as coding proficiency increases; _foster autonomy_, where GBL systems can offer choices within a structured learning experience, increasing student agency; and _promote relatedness_, where narrative and collaborative gameplay can make PCR feel more purposeful and community-oriented [@proulx2017; @uysal2016].

Students learn more effectively when they are agents in constructing their own knowledge, both individually and in collaboration with others [@vygotsky1978a]. This belief is foundational to my interest in the peer feedback process and aligns with a social-constructivist understanding of learning that emphasizes shared meaning-making through interaction. To encourage PCR, feedback systems must be intentionally designed to align with intended learning outcomes and assessment criteria [@biggs2012]. When learning outcomes related to professional behaviour and feedback literacy are clearly connected to assessment, students are more likely to see value in the process [@ladyshewsky2012].

As an avid player of both digital and analogue games, my experience in gaming also influences my interest in this topic. In the world of gaming, especially in multiplayer games, communication and teamwork are paramount for success. Similarly, in the area of PCR, effective communication and collaboration are essential for producing high-quality code. Furthermore, the problem-solving and critical thinking skills honed through gaming also translate to the world of programming and code review. The analytical mindset and attention to detail required in gaming parallel the skills needed for thorough code review [@schmitz2011]. Understanding how to motivate students in the context of PCR aligns with the principles of game design, where the goal is to create _meaningful play_ through game mechanics that link player action to future outcomes [@salen2003]. I believe my experience playing games and teaching CS provides me with a unique perspective on the dynamics of PCR and drives me to delve deeper into this topic.

This study examines students’ perceived motivation to give quality PCR feedback through the lens of SDT, focusing on how a meaningful GBL intervention might transform PCR into a more intrinsically motivating and valuable learning experience. The conceptual framework guiding this research is presented in [Figure 1], which illustrates how GBL and PCR contribute to the fulfillment of psychological needs, competence, autonomy, and relatedness, and how these, in turn, affect intrinsic motivation and improved feedback quality.

**Figure 1**

_Conceptual Framework_

```mermaid
flowchart TD
    %% Inputs
    GBL("`**Game-Based Learning**
    _Approach_`")
    PCR("`**Peer Code Review**
    _Activity_`")

    MP[\"`**Meaningful Play**
    _Design_`"/]

    A("Autonomy")
    C("Competence")
    R("Relatedness")

    %% Outcomes
    MOTIVATION[/"`Intrinsic Motivation`"\]
    FEEDBACK("`Improved Feedback Quality`")

     Define Actors
    actor Student
    actor Instructor
    participant Moodle
    participant Game

    rect rgb(180, 190, 254) # Light blue for Pre-Intervention (Async)
    Note over Student, Game: Pre-Intervention (Asynchronous, Week 9)
    Student->>Moodle: Submits peer feedback
    Instructor->>Moodle: Scrapes & scores feedback
    Moodle->>Instructor: Provides feedback quality scores
    Instructor->>Game: Assigns yellow action cards based on feedback quality
    end

    rect rgb(166, 227, 161) # Light green for Class Session 1 (Sync)
    Note over Student, Game: Intervention (Synchronous, Week 10)
    Instructor->>Student: Informed consent & Pre-test survey
    Instructor->>Student: Explains game rules & hands out cards
    Student->>Game: Plays first game session
    Instructor->>Student: Reveals feedback-based card distribution
    end

    rect rgb(249, 226, 175) # Light yellow for Post-Intervention (Async)
    Note over Student, Game: Intervention (Asynchronous, Week 11)
    Student->>Moodle: Submits second peer feedback
    Instructor->>Moodle: Scores updated feedback
    Moodle->>Instructor: Provides updated scores
    Instructor->>Game: Assigns new yellow action cards
    end

    rect rgb(243, 139, 168) # Light red for Class Session 2 (Sync)
    Note over Student, Game: Post-Intervention (Synchronous, Week 12)
    Instructor->>Student: Distributes updated game cards
    Student->>Game: Plays second game session
    Instructor->>Student: Post-test survey
    end
```

*Note.* This diagram visualizes the chronological sequence of events in the study across four key phases. Time progresses from top to bottom. The entities on the top and bottom represent the roles or systems involved: Student, Instructor, Moodle (an online learning management system), and Game (the card-based peer feedback intervention). The arrows represent direct actions (e.g., submitting feedback or handing out game cards). Each coloured section represents a week in the semester, distinguishing asynchronous phases (done outside of class time) and synchronous phases (conducted during scheduled class time).

### Pre-Intervention Phase

Prior to this study, students had been engaging in traditional peer feedback activities since week 4 of the semester, using the Peer Code Review Rubric (Appendix A) as a reference for evaluating their peers' work. This rubric provided a structured framework that guided their feedback, ensuring consistency and clarity in their evaluations. These prior experiences with peer review helped establish a baseline understanding of feedback expectations before the intervention was introduced.

Prior to the intervention, students participated in asynchronous peer feedback through the Moodle Learning Management System's (LMS) Workshop activity [@moodle2024]. Each student provided feedback on three of their peers' work, and this feedback was extracted using a custom scraper (Appendix E) developed by the author. The extracted feedback was anonymized and analyzed using a Large Language Model (LLM) [@openai2024], which categorized comments based on a Code Review Taxonomy (Appendix B). The taxonomy classifies feedback into distinct categories that reflect specificity and constructiveness, such as "SA" (Specific Actionable), "G+" (General Positive), or "G0" (General Neutral).

To guide the LLM's classification, a *few-shot* approach (Appendix G) was used, in which the model was provided with a small number of labeled examples to infer how to apply the taxonomy to new comments. This strategy allows LLMs to generalize effectively without extensive training data [@anglin2024]. To increase confidence in the LLM's categorization, a subset of outputs was manually reviewed by the author. During this process, the prompting strategy and card-distribution scripts (Appendix E) were refined iteratively to improve classification consistency. While this verification process was informal and not independently validated, the reviewed samples showed a high level of agreement with the intended taxonomy categories, suggesting the LLM output was sufficiently reliable for the purposes of this exploratory study.

To quantify the quality of feedback for analysis, each taxonomy category was assigned a numerical score using a predefined conversion system (Table 1). These scores were then used to determine the number of cards received at the start of the game, introducing a performance-based starting condition for the intervention.

**Table 1**

*Numerical Conversion of Feedback Quality Scores*

| Code     | Description                       | Score |
| -------- | --------------------------------- | ----- |
| SA       | Specific Actionable               | 5     |
| S+/S-    | Specific Positive/Negative        | 4     |
| S0       | Specific Neutral                  | 3     |
| G+/G-/GA | General Positive/Negative/Advice  | 2     |
| G0/PV    | General Neutral/Placeholder Value | 1     |
| OT       | Off-topic/Irrelevant              | 0     |

Each student provided feedback to three peers, and the median of these three numerical scores was used as their individual feedback quality score in statistical analysis. The median was chosen to reduce the influence of outliers or inconsistencies in individual comments, providing a more robust measure of typical feedback quality for each student.

To ensure that the game could be reasonably completed within a class session, a simulation was developed (Appendix E) to play 1,000 rounds of the game under varying conditions. The results indicated that the average game lasted 13 turns, with the longest game reaching 24 turns. In terms of duration, the simulation estimated an average game time of 19 minutes, with the longest recorded game taking 35 minutes. These findings informed the design choices, such as the number of starting resources and the inclusion of time-limiting mechanics to maintain feasibility within the allotted class period.

<div class="js-plotly-plot"><div class="plot-container plotly"><div class="user-select-none svg-container" style="position: relative; width: 700px; height: 450px;"><svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="450" style="background: rgb(255, 255, 255);"><defs id="defs-8064e6"><g class="clips"><clipPath id="clip8064e6xyplot" class="plotclip"><rect width="540" height="270"></rect></clipPath><clipPath class="axesclip" id="clip8064e6x"><rect x="80" y="0" width="540" height="450"></rect></clipPath><clipPath class="axesclip" id="clip8064e6y"><rect x="0" y="100" width="700" height="270"></rect></clipPath><clipPath class="axesclip" id="clip8064e6xy"><rect x="80" y="100" width="540" height="270"></rect></clipPath></g><g class="gradients"></g><g class="patterns"></g></defs><g class="bglayer"></g><g class="draglayer cursor-crosshair"><g class="xy"><rect class="nsewdrag drag" data-subplot="xy" x="80" y="100" width="540" height="270" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="nwdrag drag cursor-nw-resize" data-subplot="xy" x="60" y="80" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="nedrag drag cursor-ne-resize" data-subplot="xy" x="620" y="80" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="swdrag drag cursor-sw-resize" data-subplot="xy" x="60" y="370" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="sedrag drag cursor-se-resize" data-subplot="xy" x="620" y="370" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="ewdrag drag cursor-ew-resize" data-subplot="xy" x="134" y="370.5" width="432" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="wdrag drag cursor-w-resize" data-subplot="xy" x="80" y="370.5" width="54" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="edrag drag cursor-e-resize" data-subplot="xy" x="566" y="370.5" width="54" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="nsdrag drag cursor-ns-resize" data-subplot="xy" x="59.5" y="127" width="20" height="216" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="sdrag drag cursor-s-resize" data-subplot="xy" x="59.5" y="343" width="20" height="27" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="ndrag drag cursor-n-resize" data-subplot="xy" x="59.5" y="100" width="20" height="27" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect></g></g><g class="layer-below"><g class="imagelayer"></g><g class="shapelayer"></g></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"></g><g class="imagelayer"></g></g><g class="gridlayer"><g class="x"></g><g class="y"><path class="ygrid crisp" transform="translate(0,325.78)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path><path class="ygrid crisp" transform="translate(0,281.55)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path><path class="ygrid crisp" transform="translate(0,237.33)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path><path class="ygrid crisp" transform="translate(0,193.1)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path><path class="ygrid crisp" transform="translate(0,148.88)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path><path class="ygrid crisp" transform="translate(0,104.66)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path></g></g><g class="zerolinelayer"><path class="yzl zl crisp" transform="translate(0,370)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"></path></g><path class="xlines-below"></path><path class="ylines-below"></path><g class="overlines-below"></g><g class="xaxislayer-below"></g><g class="yaxislayer-below"></g><g class="overaxes-below"></g><g class="plot" transform="translate(80,100)" clip-path="url(#clip8064e6xyplot)"><g class="barlayer mlayer"><g class="trace bars" shape-rendering="crispEdges" style="opacity: 0.8;"><g class="points"><g class="point"><path d="M0,270V268H15V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M15,270V263H30V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M30,270V248H45V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M45,270V195H60V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M60,270V177H75V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M75,270V84H90V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M90,270V27H105V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M105,270V14H120V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M120,270V62H135V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M135,270V38H150V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M150,270V122H165V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M165,270V111H180V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M180,270V131H195V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M195,270V142H210V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M210,270V179H225V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M225,270V210H240V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M240,270V230H255V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M255,270V232H270V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M270,270V248H285V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M285,270V255H300V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M300,270V255H315V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M315,270V263H330V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M330,270V266H345V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M345,270V263H360V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M360,270V270H375V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M375,270V266H390V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M390,270V268H405V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M405,270V270H420V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M420,270V270H435V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M435,270V268H450V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M450,270V268H465V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M465,270V270H480V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M480,270V270H495V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M495,270V270H510V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M510,270V270H525V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g><g class="point"><path d="M525,270V268H540V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;"></path></g></g></g></g></g><g class="overplot"></g><path class="xlines-above crisp" d="M0,0" style="fill: none;"></path><path class="ylines-above crisp" d="M0,0" style="fill: none;"></path><g class="overlines-above"></g><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="10" data-math="N" transform="translate(80,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;">10</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="15" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(155,0)">15</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="20" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(230,0)">20</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="25" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(305,0)">25</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="30" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(380,0)">30</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="35" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(455,0)">35</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="40" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(530,0)">40</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="45" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(605,0)">45</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="0" data-math="N" transform="translate(0,370)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="20" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,325.78)">20</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="40" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,281.55)">40</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="60" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,237.33)">60</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="80" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,193.1)">80</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="100" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,148.88)">100</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="120" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,104.66)">120</text></g></g><g class="overaxes-above"></g></g></g><g class="polarlayer"></g><g class="smithlayer"></g><g class="ternarylayer"></g><g class="geolayer"></g><g class="funnelarealayer"></g><g class="pielayer"></g><g class="iciclelayer"></g><g class="treemaplayer"></g><g class="sunburstlayer"></g><g class="glimages"></g></svg><div class="gl-container"></div><svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="450"><defs id="topdefs-8064e6"><g class="clips"></g></defs><g class="indicatorlayer"></g><g class="layer-above"><g class="imagelayer"></g><g class="shapelayer"><path data-index="0" fill-rule="evenodd" d="M224.67,370L224.67,100" clip-path="url(#clip8064e6x)" style="opacity: 1; stroke: rgb(255, 165, 0); stroke-opacity: 1; fill: rgb(0, 0, 0); fill-opacity: 0; stroke-dasharray: 3px, 3px; stroke-width: 2px;"></path><path data-index="1" fill-rule="evenodd" d="M215,370L215,100" clip-path="url(#clip8064e6x)" style="opacity: 1; stroke: rgb(0, 128, 0); stroke-opacity: 1; fill: rgb(0, 0, 0); fill-opacity: 0; stroke-dasharray: 9px, 9px; stroke-width: 2px;"></path></g></g><g class="infolayer"><g class="g-gtitle"><text class="gtitle" x="350" y="50" text-anchor="middle" dy="0em" data-unformatted="Distribution of Game Durations (1000 Simulations)" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 17px; fill: rgb(68, 68, 68); opacity: 1; font-weight: normal; white-space: pre;">Distribution of Game Durations (1000 Simulations)</text></g><g class="g-xtitle"><text class="xtitle" x="350" y="422" text-anchor="middle" data-unformatted="Game Duration (minutes)" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 14px; fill: rgb(68, 68, 68); opacity: 1; font-weight: normal; white-space: pre;">Game Duration (minutes)</text></g><g class="g-ytitle"><text class="ytitle" transform="rotate(-90,42,235)" x="42" y="235" text-anchor="middle" data-unformatted="Frequency" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 14px; fill: rgb(68, 68, 68); opacity: 1; font-weight: normal; white-space: pre;">Frequency</text></g><g class="annotation" data-index="0" style="opacity: 1;"><g class="annotation-text-g" transform="rotate(0,224.67,95.99999999999999)"><g class="cursor-pointer" transform="translate(175,86)"><rect class="bg" x="0.5" y="0.5" width="99" height="18" style="stroke-width: 1px; stroke: rgb(0, 0, 0); stroke-opacity: 0; fill: rgb(0, 0, 0); fill-opacity: 0;"></rect><text class="annotation-text" text-anchor="middle" data-unformatted="Mean: 19.6 min" data-math="N" x="49.8828125" y="14" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(255, 165, 0); fill-opacity: 1; white-space: pre;">Mean: 19.6 min</text></g></g></g><g class="annotation" data-index="1" style="opacity: 1;"><g class="annotation-text-g" transform="rotate(0,215,82.49999999999997)"><g class="cursor-pointer" transform="translate(160,73)"><rect class="bg" x="0.5" y="0.5" width="110" height="18" style="stroke-width: 1px; stroke: rgb(0, 0, 0); stroke-opacity: 0; fill: rgb(0, 0, 0); fill-opacity: 0;"></rect><text class="annotation-text" text-anchor="middle" data-unformatted="Median: 19.0 min" data-math="N" x="55.265625" y="14" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(0, 128, 0); fill-opacity: 1; white-space: pre;">Median: 19.0 min</text></g></g></g></g><g class="menulayer"></g><g class="zoomlayer"></g></svg><div class="modebar-container" style="position: absolute; top: 0px; right: 0px; width: 100%;"><div id="modebar-8064e6" class="modebar modebar--hover ease-bg"><div class="modebar-group"><a rel="tooltip" class="modebar-btn" data-title="Download plot as a png" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m500 450c-83 0-150-67-150-150 0-83 67-150 150-150 83 0 150 67 150 150 0 83-67 150-150 150z m400 150h-120c-16 0-34 13-39 29l-31 93c-6 15-23 28-40 28h-340c-16 0-34-13-39-28l-31-94c-6-15-23-28-40-28h-120c-55 0-100-45-100-100v-450c0-55 45-100 100-100h800c55 0 100 45 100 100v450c0 55-45 100-100 100z m-400-550c-138 0-250 112-250 250 0 138 112 250 250 250 138 0 250-112 250-250 0-138-112-250-250-250z m365 380c-19 0-35 16-35 35 0 19 16 35 35 35 19 0 35-16 35-35 0-19-16-35-35-35z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a></div><div class="modebar-group"><a rel="tooltip" class="modebar-btn active" data-title="Zoom" data-attr="dragmode" data-val="zoom" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m1000-25l-250 251c40 63 63 138 63 218 0 224-182 406-407 406-224 0-406-182-406-406s183-406 407-406c80 0 155 22 218 62l250-250 125 125z m-812 250l0 438 437 0 0-438-437 0z m62 375l313 0 0-312-313 0 0 312z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Pan" data-attr="dragmode" data-val="pan" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m1000 350l-187 188 0-125-250 0 0 250 125 0-188 187-187-187 125 0 0-250-250 0 0 125-188-188 186-187 0 125 252 0 0-250-125 0 187-188 188 188-125 0 0 250 250 0 0-126 187 188z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Box Select" data-attr="dragmode" data-val="select" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m0 850l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m285 0l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m-857-286l0-143 143 0 0 143-143 0z m857 0l0-143 143 0 0 143-143 0z m-857-285l0-143 143 0 0 143-143 0z m857 0l0-143 143 0 0 143-143 0z m-857-286l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m285 0l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Lasso Select" data-attr="dragmode" data-val="lasso" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1031 1000" class="icon" height="1em" width="1em"><path d="m1018 538c-36 207-290 336-568 286-277-48-473-256-436-463 10-57 36-108 76-151-13-66 11-137 68-183 34-28 75-41 114-42l-55-70 0 0c-2-1-3-2-4-3-10-14-8-34 5-45 14-11 34-8 45 4 1 1 2 3 2 5l0 0 113 140c16 11 31 24 45 40 4 3 6 7 8 11 48-3 100 0 151 9 278 48 473 255 436 462z m-624-379c-80 14-149 48-197 96 42 42 109 47 156 9 33-26 47-66 41-105z m-187-74c-19 16-33 37-39 60 50-32 109-55 174-68-42-25-95-24-135 8z m360 75c-34-7-69-9-102-8 8 62-16 128-68 170-73 59-175 54-244-5-9 20-16 40-20 61-28 159 121 317 333 354s407-60 434-217c28-159-121-318-333-355z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a></div><div class="modebar-group"><a rel="tooltip" class="modebar-btn" data-title="Zoom in" data-attr="zoom" data-val="in" data-toggle="false" data-gravity="n"><svg viewBox="0 0 875 1000" class="icon" height="1em" width="1em"><path d="m1 787l0-875 875 0 0 875-875 0z m687-500l-187 0 0-187-125 0 0 187-188 0 0 125 188 0 0 187 125 0 0-187 187 0 0-125z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Zoom out" data-attr="zoom" data-val="out" data-toggle="false" data-gravity="n"><svg viewBox="0 0 875 1000" class="icon" height="1em" width="1em"><path d="m0 788l0-876 875 0 0 876-875 0z m688-500l-500 0 0 125 500 0 0-125z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Autoscale" data-attr="zoom" data-val="auto" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m250 850l-187 0-63 0 0-62 0-188 63 0 0 188 187 0 0 62z m688 0l-188 0 0-62 188 0 0-188 62 0 0 188 0 62-62 0z m-875-938l0 188-63 0 0-188 0-62 63 0 187 0 0 62-187 0z m875 188l0-188-188 0 0-62 188 0 62 0 0 62 0 188-62 0z m-125 188l-1 0-93-94-156 156 156 156 92-93 2 0 0 250-250 0 0-2 93-92-156-156-156 156 94 92 0 2-250 0 0-250 0 0 93 93 157-156-157-156-93 94 0 0 0-250 250 0 0 0-94 93 156 157 156-157-93-93 0 0 250 0 0 250z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Reset axes" data-attr="zoom" data-val="reset" data-toggle="false" data-gravity="n"><svg viewBox="0 0 928.6 1000" class="icon" height="1em" width="1em"><path d="m786 296v-267q0-15-11-26t-25-10h-214v214h-143v-214h-214q-15 0-25 10t-11 26v267q0 1 0 2t0 2l321 264 321-264q1-1 1-4z m124 39l-34-41q-5-5-12-6h-2q-7 0-12 3l-386 322-386-322q-7-4-13-4-7 2-12 7l-35 41q-4 5-3 13t6 12l401 334q18 15 42 15t43-15l136-114v109q0 8 5 13t13 5h107q8 0 13-5t5-13v-227l122-102q5-5 6-12t-4-13z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a></div></div></div><svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="450"><g class="hoverlayer"></g></svg></div></div></div>

<div class="js-plotly-plot"><div class="plot-container plotly"><div class="user-select-none svg-container" style="position: relative; width: 700px; height: 450px;"><svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="450" style="background: rgb(255, 255, 255);"><defs id="defs-20efca"><g class="clips"><clipPath id="clip20efcaxyplot" class="plotclip"><rect width="540" height="270"></rect></clipPath><clipPath class="axesclip" id="clip20efcax"><rect x="80" y="0" width="540" height="450"></rect></clipPath><clipPath class="axesclip" id="clip20efcay"><rect x="0" y="100" width="700" height="270"></rect></clipPath><clipPath class="axesclip" id="clip20efcaxy"><rect x="80" y="100" width="540" height="270"></rect></clipPath></g><g class="gradients"></g><g class="patterns"></g></defs><g class="bglayer"></g><g class="draglayer cursor-crosshair"><g class="xy"><rect class="nsewdrag drag" data-subplot="xy" x="80" y="100" width="540" height="270" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="nwdrag drag cursor-nw-resize" data-subplot="xy" x="60" y="80" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="nedrag drag cursor-ne-resize" data-subplot="xy" x="620" y="80" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="swdrag drag cursor-sw-resize" data-subplot="xy" x="60" y="370" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="sedrag drag cursor-se-resize" data-subplot="xy" x="620" y="370" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="ewdrag drag cursor-ew-resize" data-subplot="xy" x="134" y="370.5" width="432" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="wdrag drag cursor-w-resize" data-subplot="xy" x="80" y="370.5" width="54" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="edrag drag cursor-e-resize" data-subplot="xy" x="566" y="370.5" width="54" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="nsdrag drag cursor-ns-resize" data-subplot="xy" x="59.5" y="127" width="20" height="216" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="sdrag drag cursor-s-resize" data-subplot="xy" x="59.5" y="343" width="20" height="27" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect class="ndrag drag cursor-n-resize" data-subplot="xy" x="59.5" y="100" width="20" height="27" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect></g></g><g class="layer-below"><g class="imagelayer"></g><g class="shapelayer"></g></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"></g><g class="imagelayer"></g></g><g class="gridlayer"><g class="x"></g><g class="y"><path class="ygrid crisp" transform="translate(0,315.43)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path><path class="ygrid crisp" transform="translate(0,260.85)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path><path class="ygrid crisp" transform="translate(0,206.28)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path><path class="ygrid crisp" transform="translate(0,151.7)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"></path></g></g><g class="zerolinelayer"><path class="yzl zl crisp" transform="translate(0,370)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"></path></g><path class="xlines-below"></path><path class="ylines-below"></path><g class="overlines-below"></g><g class="xaxislayer-below"></g><g class="yaxislayer-below"></g><g class="overaxes-below"></g><g class="plot" transform="translate(80,100)" clip-path="url(#clip20efcaxyplot)"><g class="barlayer mlayer"><g class="trace bars" shape-rendering="crispEdges" style="opacity: 0.8;"><g class="points"><g class="point"><path d="M0,270V119H32V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M32,270V52H64V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M64,270V14H95V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M95,270V116H127V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M127,270V132H159V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M159,270V191H191V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M191,270V232H222V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M222,270V241H254V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M254,270V259H286V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M286,270V260H318V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M318,270V268H349V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M349,270V268H381V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M381,270V270H413V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M413,270V268H445V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M445,270V270H476V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M476,270V270H508V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g><g class="point"><path d="M508,270V268H540V270Z" style="vector-effect: non-scaling-stroke; opacity: 1; stroke-width: 0px; fill: rgb(255, 127, 14); fill-opacity: 1;"></path></g></g></g></g></g><g class="overplot"></g><path class="xlines-above crisp" d="M0,0" style="fill: none;"></path><path class="ylines-above crisp" d="M0,0" style="fill: none;"></path><g class="overlines-above"></g><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="10" data-math="N" transform="translate(95.88,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;">10</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="15" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(254.71,0)">15</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="20" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(413.53,0)">20</text></g><g class="xtick"><text text-anchor="middle" x="0" y="383" data-unformatted="25" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(572.35,0)">25</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="0" data-math="N" transform="translate(0,370)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="50" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,315.43)">50</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="100" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,260.85)">100</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="150" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,206.28)">150</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" data-unformatted="200" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,151.7)">200</text></g></g><g class="overaxes-above"></g></g></g><g class="polarlayer"></g><g class="smithlayer"></g><g class="ternarylayer"></g><g class="geolayer"></g><g class="funnelarealayer"></g><g class="pielayer"></g><g class="iciclelayer"></g><g class="treemaplayer"></g><g class="sunburstlayer"></g><g class="glimages"></g></svg><div class="gl-container"></div><svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="450"><defs id="topdefs-20efca"><g class="clips"></g></defs><g class="indicatorlayer"></g><g class="layer-above"><g class="imagelayer"></g><g class="shapelayer"><path data-index="0" fill-rule="evenodd" d="M178.5,370L178.5,100" clip-path="url(#clip20efcax)" style="opacity: 1; stroke: rgb(0, 0, 255); stroke-opacity: 1; fill: rgb(0, 0, 0); fill-opacity: 0; stroke-dasharray: 3px, 3px; stroke-width: 2px;"></path><path data-index="1" fill-rule="evenodd" d="M159.41,370L159.41,100" clip-path="url(#clip20efcax)" style="opacity: 1; stroke: rgb(0, 128, 0); stroke-opacity: 1; fill: rgb(0, 0, 0); fill-opacity: 0; stroke-dasharray: 3px, 3px; stroke-width: 2px;"></path></g></g><g class="infolayer"><g class="g-gtitle"><text class="gtitle" x="350" y="50" text-anchor="middle" dy="0em" data-unformatted="Distribution of Turns to Win (1000 Simulations)" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 17px; fill: rgb(68, 68, 68); opacity: 1; font-weight: normal; white-space: pre;">Distribution of Turns to Win (1000 Simulations)</text></g><g class="g-xtitle"><text class="xtitle" x="350" y="422" text-anchor="middle" data-unformatted="Turns" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 14px; fill: rgb(68, 68, 68); opacity: 1; font-weight: normal; white-space: pre;">Turns</text></g><g class="g-ytitle"><text class="ytitle" transform="rotate(-90,42,235)" x="42" y="235" text-anchor="middle" data-unformatted="Frequency" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 14px; fill: rgb(68, 68, 68); opacity: 1; font-weight: normal; white-space: pre;">Frequency</text></g><g class="annotation" data-index="0" style="opacity: 1;"><g class="annotation-text-g" transform="rotate(0,178.5,95.99999999999999)"><g class="cursor-pointer" transform="translate(125,86)"><rect class="bg" x="0.5" y="0.5" width="107" height="18" style="stroke-width: 1px; stroke: rgb(0, 0, 0); stroke-opacity: 0; fill: rgb(0, 0, 0); fill-opacity: 0;"></rect><text class="annotation-text" text-anchor="middle" data-unformatted="Mean: 12.6 turns" data-math="N" x="54.24609375" y="14" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(0, 0, 255); fill-opacity: 1; white-space: pre;">Mean: 12.6 turns</text></g></g></g><g class="annotation" data-index="1" style="opacity: 1;"><g class="annotation-text-g" transform="rotate(0,159.41,82.49999999999997)"><g class="cursor-pointer" transform="translate(100,73)"><rect class="bg" x="0.5" y="0.5" width="118" height="18" style="stroke-width: 1px; stroke: rgb(0, 0, 0); stroke-opacity: 0; fill: rgb(0, 0, 0); fill-opacity: 0;"></rect><text class="annotation-text" text-anchor="middle" data-unformatted="Median: 12.0 turns" data-math="N" x="59.6328125" y="14" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(0, 128, 0); fill-opacity: 1; white-space: pre;">Median: 12.0 turns</text></g></g></g></g><g class="menulayer"></g><g class="zoomlayer"></g></svg><div class="modebar-container" style="position: absolute; top: 0px; right: 0px; width: 100%;"><div id="modebar-20efca" class="modebar modebar--hover ease-bg"><div class="modebar-group"><a rel="tooltip" class="modebar-btn" data-title="Download plot as a png" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m500 450c-83 0-150-67-150-150 0-83 67-150 150-150 83 0 150 67 150 150 0 83-67 150-150 150z m400 150h-120c-16 0-34 13-39 29l-31 93c-6 15-23 28-40 28h-340c-16 0-34-13-39-28l-31-94c-6-15-23-28-40-28h-120c-55 0-100-45-100-100v-450c0-55 45-100 100-100h800c55 0 100 45 100 100v450c0 55-45 100-100 100z m-400-550c-138 0-250 112-250 250 0 138 112 250 250 250 138 0 250-112 250-250 0-138-112-250-250-250z m365 380c-19 0-35 16-35 35 0 19 16 35 35 35 19 0 35-16 35-35 0-19-16-35-35-35z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a></div><div class="modebar-group"><a rel="tooltip" class="modebar-btn active" data-title="Zoom" data-attr="dragmode" data-val="zoom" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m1000-25l-250 251c40 63 63 138 63 218 0 224-182 406-407 406-224 0-406-182-406-406s183-406 407-406c80 0 155 22 218 62l250-250 125 125z m-812 250l0 438 437 0 0-438-437 0z m62 375l313 0 0-312-313 0 0 312z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Pan" data-attr="dragmode" data-val="pan" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m1000 350l-187 188 0-125-250 0 0 250 125 0-188 187-187-187 125 0 0-250-250 0 0 125-188-188 186-187 0 125 252 0 0-250-125 0 187-188 188 188-125 0 0 250 250 0 0-126 187 188z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Box Select" data-attr="dragmode" data-val="select" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m0 850l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m285 0l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m-857-286l0-143 143 0 0 143-143 0z m857 0l0-143 143 0 0 143-143 0z m-857-285l0-143 143 0 0 143-143 0z m857 0l0-143 143 0 0 143-143 0z m-857-286l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z m285 0l0-143 143 0 0 143-143 0z m286 0l0-143 143 0 0 143-143 0z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Lasso Select" data-attr="dragmode" data-val="lasso" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1031 1000" class="icon" height="1em" width="1em"><path d="m1018 538c-36 207-290 336-568 286-277-48-473-256-436-463 10-57 36-108 76-151-13-66 11-137 68-183 34-28 75-41 114-42l-55-70 0 0c-2-1-3-2-4-3-10-14-8-34 5-45 14-11 34-8 45 4 1 1 2 3 2 5l0 0 113 140c16 11 31 24 45 40 4 3 6 7 8 11 48-3 100 0 151 9 278 48 473 255 436 462z m-624-379c-80 14-149 48-197 96 42 42 109 47 156 9 33-26 47-66 41-105z m-187-74c-19 16-33 37-39 60 50-32 109-55 174-68-42-25-95-24-135 8z m360 75c-34-7-69-9-102-8 8 62-16 128-68 170-73 59-175 54-244-5-9 20-16 40-20 61-28 159 121 317 333 354s407-60 434-217c28-159-121-318-333-355z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a></div><div class="modebar-group"><a rel="tooltip" class="modebar-btn" data-title="Zoom in" data-attr="zoom" data-val="in" data-toggle="false" data-gravity="n"><svg viewBox="0 0 875 1000" class="icon" height="1em" width="1em"><path d="m1 787l0-875 875 0 0 875-875 0z m687-500l-187 0 0-187-125 0 0 187-188 0 0 125 188 0 0 187 125 0 0-187 187 0 0-125z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Zoom out" data-attr="zoom" data-val="out" data-toggle="false" data-gravity="n"><svg viewBox="0 0 875 1000" class="icon" height="1em" width="1em"><path d="m0 788l0-876 875 0 0 876-875 0z m688-500l-500 0 0 125 500 0 0-125z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Autoscale" data-attr="zoom" data-val="auto" data-toggle="false" data-gravity="n"><svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em"><path d="m250 850l-187 0-63 0 0-62 0-188 63 0 0 188 187 0 0 62z m688 0l-188 0 0-62 188 0 0-188 62 0 0 188 0 62-62 0z m-875-938l0 188-63 0 0-188 0-62 63 0 187 0 0 62-187 0z m875 188l0-188-188 0 0-62 188 0 62 0 0 62 0 188-62 0z m-125 188l-1 0-93-94-156 156 156 156 92-93 2 0 0 250-250 0 0-2 93-92-156-156-156 156 94 92 0 2-250 0 0-250 0 0 93 93 157-156-157-156-93 94 0 0 0-250 250 0 0 0-94 93 156 157 156-157-93-93 0 0 250 0 0 250z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a><a rel="tooltip" class="modebar-btn" data-title="Reset axes" data-attr="zoom" data-val="reset" data-toggle="false" data-gravity="n"><svg viewBox="0 0 928.6 1000" class="icon" height="1em" width="1em"><path d="m786 296v-267q0-15-11-26t-25-10h-214v214h-143v-214h-214q-15 0-25 10t-11 26v267q0 1 0 2t0 2l321 264 321-264q1-1 1-4z m124 39l-34-41q-5-5-12-6h-2q-7 0-12 3l-386 322-386-322q-7-4-13-4-7 2-12 7l-35 41q-4 5-3 13t6 12l401 334q18 15 42 15t43-15l136-114v109q0 8 5 13t13 5h107q8 0 13-5t5-13v-227l122-102q5-5 6-12t-4-13z" transform="matrix(1 0 0 -1 0 850)"></path></svg></a></div></div></div><svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="450"><g class="hoverlayer"></g></svg></div></div></div>

### Intervention Phase

During a synchronous class session, students first completed the informed consent form (Appendix C), followed by a pre-test (Appendix D) that measured their perceived autonomy, competence, and relatedness in relation to peer feedback, along with baseline questions about their gaming habits and attitudes. They were then placed into groups of four and received physical card decks for gameplay. The instructor displayed a table assigning yellow action cards to each student, prompting curiosity about the distribution.

Students played the card game (Appendix F) under standard conditions, engaging with mechanics centred on resource collection, strategic decision-making, and competition. Although peer feedback was not a direct action within the game, it was embedded in the game structure: students' starting resources (yellow action cards) were determined by the quality of their feedback in the previous peer review activity. Each student's feedback was analyzed and scored using a code review taxonomy (Appendix B), and their score was used to assign an initial advantage in the game. Since the course was Game Programming, the game's entities (e.g., State Machine, Timer, Collision, Sprite) were drawn from foundational development concepts covered in class, enhancing topical relevance and familiarity. This feedback-performance link was revealed after the first game session during a debriefing, where students were shown how their starting cards were derived from their peer feedback scores. This design choice created a delayed but meaningful incentive for quality feedback, connecting academic effort to in-game success.

### Post-Intervention Phase

Following the first game session, students completed another asynchronous peer feedback activity through the Moodle LMS, knowing that their feedback quality would impact their performance in a future game session. The second iteration of the game followed the same structure as the first, with students receiving yellow action cards based on their new feedback quality scores. After playing the game for the second time, students completed the post-test survey (Appendix D), measuring changes in their perceptions of competence, autonomy, and relatedness in relation to peer feedback, along with two open-ended question to solicit suggestions about game mechanics and any comments about the game influencing their motivation.

## Instruments

### Code Review Taxonomy (RQ1)

The Code Review Taxonomy (Appendix B) was used to operationalize the concept of feedback quality for RQ1, which asked whether the game-based learning intervention improved the quality of peer code review. This taxonomy categorized feedback comments into distinct types [@hamer2015; @indriasari2023]. Feedback was classified as either positive or negative, depending on whether it reinforced correct implementation or identified issues. Additionally, comments were categorized based on whether they provided actionable advice or suggestions for improvement. The taxonomy also distinguished between general feedback, which addressed broader coding concepts, and code-specific feedback, which focused on particular lines of code or implementation details. These categories provided a structured framework for analyzing feedback quality.

While no formal psychometric validation (e.g., inter-rater reliability or construct validity) is reported for this taxonomy, it has been used in multiple studies in computing education to analyze the quality of peer code review comments. Indriasari et al. (2023) adopted the taxonomy from Hamer et al. (2015), noting that it aligns with characteristics of effective written feedback outlined in broader feedback literature, such as specificity, constructive suggestions, and reinforcement of strengths [@voelkel2020; @gehringer2017]. This alignment with pedagogical goals supports its use as a practical framework for categorizing feedback in this context.

### Intrinsic Motivation Inventory (RQ2)

The Intrinsic Motivation Inventory (IMI) was used to address RQ2, which focused on whether the intervention influenced students' motivation as conceptualized by SDT. The IMI is a validated Likert-style survey that assesses SDT sub-scales for competence, autonomy, relatedness [@ryan1983]. It utilizes a 5-point scale (1 = *not at all true* to 5 = *very true*). Survey questions were adapted to reflect the PCR experience with the full list of pre-test and post-test questions included in Appendix D. For example, competence-related questions asked whether students thought their feedback was useful for others. Autonomy-related questions asked students whether they felt they had choices in how they provided peer feedback or whether they had input in deciding how to evaluate their peers' work. Relatedness was assessed through questions that explored whether students felt connected to their peers during the peer review process and whether they felt comfortable giving feedback.

The IMI has demonstrated strong validity and internal consistency across multiple domains [@mcauley1989]. The SDT research community recognizes that minor wording adjustments and even shorter versions can be used without compromising reliability [@self-determinationtheory]. This flexibility makes the IMI particularly well-suited to educational contexts like this one, where survey fatigue and contextual relevance are concerns.

## Data Analysis

Data analysis was organized around the two research questions, each targeting a distinct dependent variable. The independent variable was the implementation of the game-based learning intervention, specifically, the peer feedback card game played by the students in weeks 10 and 12.

To address RQ1, which asked whether the intervention improved the quality of peer feedback, the dependent variable was students' feedback quality scores. Each student provided feedback to three peers in both the pre- and post-intervention phases. To account for variability across different peer reviews, the median feedback quality score from each student's three evaluations was used for the analysis. Because these scores were ordinal, the Wilcoxon Signed-Rank Test was used to assess pre-post differences.

To address RQ2, which investigated whether the intervention influenced students' perceived competence, autonomy, and relatedness, the dependent variables were the sub-scale scores from the adapted IMI. Independent *t*-tests were conducted on the mean scores for each sub-scale, as the pre- and post-tests were completed anonymously and thus could not be paired. Perceived autonomy was measured using items Q5, Q6, Q8, and Q9; however, Q6 was excluded from analysis due to ambiguous wording, and Q9 was reverse-scored. Perceived competence was measured using Q2, Q3, and Q4, while relatedness was measured using Q1 and Q7.

A significance level of $\alpha=.05$ was used for all inferential statistical analyses. Descriptive statistics, including mean and median scores, were also calculated for each variable to illustrate overall trends in student motivation and feedback quality over time.

In addition to quantitative data, students’ open-ended responses from the post-test survey were analyzed using thematic coding. Responses were reviewed inductively to identify emergent themes related to students’ motivation, perceptions of the game’s mechanics, and suggestions for improvement. This qualitative data supported interpretation of the quantitative results and helped contextualize student experiences during the intervention.

## Ethical Considerations

This study received ethical approval from both the Université de Sherbrooke (Appendix H) on April 16, 2024 and John Abbott College (Appendix I) on May 14, 2024. The researcher also completed the Tri-Council Policy Statement: Ethical Conduct for Research Involving Humans (TCPS 2: CORE 2022) training (Appendix J) on March 23, 2024, which certifies adherence to Canadian standards for research ethics. Data collection took place during Weeks 9 to 12 of the Fall 2024 semester. The results were analyzed during the Winter 2025 term, and the thesis was written in parallel to complete the requirements for submission to the Université de Sherbrooke by Spring 2025. This schedule ensured that all research activities were conducted within the approved ethical review period.

The researcher's dual role as both instructor and investigator raised potential concerns regarding coercion and power dynamics. To mitigate this, explicit informed consent was obtained (Appendix C), and students were informed that participation was entirely voluntary and would not affect their grades. They had the option to withdraw at any time without penalty. Students were given a clear explanation of the study's purpose, procedures, potential risks and benefits, and methods of data collection and use, thereby ensuring informed decision-making.

Anonymity and confidentiality were maintained throughout the process. Pre- and post-test survey responses were collected anonymously to protect students' motivational data. Feedback quality data, however, was linked to individual students to enable the intervention's game mechanic; in these cases, only the researcher had access to identifiable data. Before analysis, all peer feedback was anonymized and scrubbed of identifying details. All data were stored securely on Canadian servers via the Moodle LMS and Microsoft Forms.

The dissemination of findings poses minimal risk to participants. All results are reported in aggregate or anonymized form to ensure that individual students cannot be identified. No quotations or specific feedback samples are attributed to individual students. Findings will be shared through academic presentations, conferences, journals, and the final thesis submission, with no foreseeable negative impact on participants.


</div></div>


## CHAPTER 5: CLOSING STATEMENT

## Appendix A: PCR RUBRIC

==Replace with clean code rubric==

## Appendix B: CODE REVIEW TAXONOMY


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/50-works/research/code-review-taxonomy/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">

<div class="markdown-embed-title">

# Code Review Taxonomy

</div>




- **S+**: Comments in this category provided positive feedback about a speciﬁc element of the code.
- **S−**: Comments in this category provided speciﬁc negative feedback about the functionality, style or correctness of the program.
- **S0**: Comments in this category were speciﬁc, but were not obviously positive or negative in tone.
- **SA**: Comments in this category provided speciﬁc advice to a student about how to improve their code.
- **G+**: Comments in this category are general comments that are positive. The comments do not relate to a speciﬁc element of style or requirement speciﬁed in the assignment.
- **G−**: Comments in this category are general negative comments. They do not refer to any speciﬁc elements of code, but are instead comments directed at the overall quality (summary comments).
- **G0**: Comments in this category are general comments that do not have either positive or negative connotations.
- **GA**: Comments in this category provided general advice to peers, but did not refer to speciﬁcs within the code.
- **OT**: Comments in this category were off-topic.


</div></div>


## Appendix C: CONSENT FORM


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/50-works/research/consent-form/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





## Purpose

This project is being conducted by Vikram Singh, a Computer Science Teacher at John Abbott College, for the completion of a Master's Degree in College Teaching, accredited by the Université de Sherbrooke. This study explores how different approaches to peer code review affect student motivation and feedback quality.

## Procedure

1. Before beginning the activity, you'll complete a short survey regarding your perspectives on peer feedback.
2. You will participate in a brief card game related to your course material.
3. After the card game, you'll complete a survey about your experience.
4. Your feedback on the course assignments, along with survey responses, will be analyzed to better understand factors influencing feedback quality and student motivation in peer code review.

## Potential Risks & Benefits

There are no known risks for participation in this study.

By investigating what makes peer code review motivating (or not), your participation could lead to the design of interventions that make peer code review a more engaging and beneficial process for everyone. Your participation could help students develop stronger feedback skills, crucial for both their success in CS courses and future careers. The findings could provide valuable information to your instructor and others about how to refine peer code review practices, potentially leading to widespread changes that enhance the learning experience for many CS students. For your interest, the results of the study will be sent to you after the study has been completed, if so desired.

## Confidentiality

Your participation in this study is confidential in the following ways:

1. Your name will not appear in the research results.
2. The researcher/teacher will never know if you agree or do not agree to participate in this study, therefore the choice to participate or not has no impact on your final grade, nor on any future interaction with your teacher.
3. The survey results will be anonymous and kept for five years in Microsoft OneDrive behind two-factor authentication.
4. The Microsoft Forms questionnaire will be completed anonymously and your personal information will not be revealed. The servers for Microsoft Forms and OneDrive are stored in Canada and therefore your data is protected by Canadian laws.

Your participation in this research is completely voluntary. You have the right to not consent or withdraw consent at any time. If you have any questions about the content or methods of this study, please feel free to contact the teacher/researcher, Vikram Singh, at [vikram.singh@johnabbott.qc.ca](mailto:vikram.singh@johnabbott.qc.ca) or the supervisor, Paul Darvasi, at [paul.darvasi@usherbrooke.ca](mailto:paul.darvasi@usherbrooke.ca).

If you have any questions about your rights or treatment during this study, please contact the Research and Innovation Officer at JAC, Teresa Hackett, at [teresa.hackett@johnabbott.qc.ca](mailto:teresa.hackett@johnabbott.qc.ca).

## Statement of Consent

I attest that I have read the above information and freely consent to participate in the study on peer code review within the context of my 420-5P6 Game Programming course during the Fall 2024 semester at John Abbott College. I understand that my peer feedback data from the course assignments, which may include identifiable information, will be used to facilitate the card game activity and subsequent analysis. I also acknowledge that while this data may be referenced during the activity, my name or any other personal identifiers will not appear in the final research report.

- Student Name
- Student ID
- Date

I wish to receive the results of the study. My email is:


</div></div>


## Appendix D: INTRINSIC MOTIVATION INVENTORY


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/50-works/research/intrinsic-motivation-inventory/" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">





## Scale Description

The Intrinsic Motivation Inventory (IMI) is a multidimensional measurement device intended to assess participants' subjective experience related to a target activity in laboratory experiments. It has been used in several experiments related to intrinsic motivation and self-regulation (e.g., Ryan, 1982; Ryan, Mims & Koestner, 1983; Plant & Ryan, 1985; Ryan, Connell, & Plant, 1990; Ryan, Koestner & Deci, 1991; Deci, Eghrari, Patrick, & Leone, 1994). The instrument assesses participants' interest/enjoyment, perceived competence, effort, value/usefulness, felt pressure and tension, and perceived choice while performing a given activity, thus yielding six subscale scores. Recently, a seventh subscale has been added to tap the experiences of relatedness, although the validity of this subscale has yet to be established. The **interest/enjoyment subscale is considered the self-report measure of intrinsic motivation**; thus, although the overall questionnaire is called the Intrinsic Motivation Inventory, it is only the one subscale that assesses intrinsic motivation, per se. As a result, the interest/enjoyment subscale often has more items on it that do the other subscales. The perceived choice and perceived competence concepts are theorized to be positive predictors of both self-report and behavioral measures of intrinsic motivation, and pressure/tension is theorized to be a negative predictor of intrinsic motivation. Effort is a separate variable that is relevant to some motivation questions, so is used it its relevant. The value/usefulness subscale is used in internalization studies (e.g., Deci et al, 1994), the idea being that people internalize and become self-regulating with respect to activities that they experience as useful or valuable for themselves. Finally, the relatedness subscale is used in studies having to do with interpersonal interactions, friendship formation, and so on.

The IMI consists of varied numbers of items from these subscales, all of which have been shown to be factor analytically coherent and stable across a variety of tasks, conditions, and settings. The general criteria for inclusion of items on subscales have been a factor loading of at least 0.6 on the appropriate subscale, and no cross loadings above 0.4. Typically, loadings substantially exceed these criteria. Nonetheless, we recommend that investigators perform their own factor analyses on new data sets. Past research suggests that order effects of item presentation appear to be negligible, and the inclusion or exclusion of specific subscales appears to have no impact on the others. Thus, it is rare that all items have been used in a particular experiment. Instead, experimenters have chosen the subscales that are relevant to the issues they are exploring.

The IMI items have often been modified slightly to fit specific activities. Thus, for example, an item such as "I tried very hard to do well at this activity" can be changed to "I tried very hard to do well on these puzzles" or "...in learning this material" without effecting its reliability or validity. As one can readily tell, there is nothing subtle about these items; they are quite face-valid. However, in part, because of their straightforward nature, caution is needed in interpretation. We have found, for example, that correlations between self-reports of effort or interest and behavioral indices of these dimensions are quite modest--often around 0.4. Like other self-report measures, there is always the need to appropriately interpret how and why participants report as they do. Egoinvolvements, self-presentation styles, reactance, and other psychological dynamics must be considered. For example, in a study by Ryan, Koestner, and Deci (1991), we found that when participants were ego involved, the engaged in pressured persistence during a free choice period and this behavior did not correlate with the self-reports of interest/enjoyment. In fact, we concluded that to be confident in one's assessment of intrinsic motivation, one needs to find that the free-choice behavior and the self-reports of interest/enjoyment are significantly correlated.

Another issue is that of redundancy. Items within the subscales overlap considerably, although randomizing their presentation makes this less salient to most participants. Nonetheless, shorter versions have been used and been found to be quite reliable. The incremental R for every item above 4 for any given factor is quite small.

Still, it is very important to recognize that multiple item subscales consistently outperform single items for obvious reasons, and they have better external validity.

On The Scale page, there are five sections. First, the full 45 items that make up the 7 subscales are shown, along with information on constructing your own IMI and scoring it. Then, there are four specific versions of the IMI that have been used in past studies. This should give you a sense of the different ways it has been used. These have different numbers of items and different numbers of subscales, and they concern different activities. First, there is a standard, 22-item version that has been used in several studies, with four subscales: interest/ enjoyment, perceived competence, perceived choice, and pressure/tension. Second, there is a short 9-item version concerned with the activity of reading some text material; it has three subscales: interest/enjoyment, perceived competence, and pressure/tension. Then, there is the 25-item version that was used in the internalization study, including the three subscales of value/usefulness, interest/enjoyment, and perceived choice. Finally, there is a 29-item version of the interpersonal relatedness questionnaire that has five subscales: relatedness, interest/enjoyment, perceived choice, pressure/tension, and effort.

Finally, McAuley, Duncan, and Tammen (1987) did a study to examine the validity of the IMI and found strong support for its validity.

### References

Deci, E. L., Eghrari, H., Patrick, B. C., & Leone, D. (1994). Facilitating internalization: The selfdetermination theory perspective. _Journal of Personality_, _62_, 119-142.

McAuley, E., Duncan, T., & Tammen, V. V. (1987). Psychometric properties of the Intrinsic Motivation Inventory in a competitive sport setting: A confirmatory factor analysis. _Research Quarterly for Exercise and Sport, 60,_ 48-58.

Plant, R. W., & Ryan, R. M. (1985). Intrinsic motivation and the effects of self-consciousness, selfawareness, and ego-involvement: An investigation of internally-controlling styles. _Journal of Personality_, _53_, 435-449.

Ryan, R. M. (1982). Control and information in the intrapersonal sphere: An extension of cognitive evaluation theory. _Journal of Personality and Social Psychology_, _43_, 450-461.

Ryan, R. M., Connell, J. P., & Plant, R. W. (1990). Emotions in non-directed text learning. _Learning and Individual Differences_, _2_, 1-17.

Ryan, R. M., Koestner, R., & Deci, E. L. (1991). Varied forms of persistence: When free-choice behavior is not intrinsically motivated. _Motivation and Emotion_, _15_, 185-205.

Ryan, R. M., Mims, V., & Koestner, R. (1983). Relation of reward contingency and interpersonal context to intrinsic motivation: A review and test using cognitive evaluation theory. _Journal of Personality and Social Psychology_, _45_, 736-750.

## The Scales

THE POST-EXPERIMENTAL INTRINSIC MOTIVATION INVENTORY

(Below are listed all 45 items that can be used depending on which are needed.)

For each of the following statements, please indicate how true it is for you, using the following scale:

```
         1    2    3    4    5    6    7
not at all true | somewhat true | very true
```

### Interest/Enjoyment

- I enjoyed doing this activity very much.
- This activity was fun to do.
- I thought this was a boring activity. (R)
- This activity did not hold my attention at all. (R)
- I would describe this activity as very interesting. I thought this activity was quite enjoyable.
- While I was doing this activity, I was thinking about how much I enjoyed it.

### Perceived Competence

- I think I am pretty good at this activity.
- I think I did pretty well at this activity, compared to other students. After working at this activity for awhile, I felt pretty competent.
- I am satisfied with my performance at this task. I was pretty skilled at this activity.
- This was an activity that I couldn't do very well. (R)

### Effort/Importance

- I put a lot of effort into this.
- I didn't try very hard to do well at this activity. (R)
- I tried very hard on this activity.
- It was important to me to do well at this task. I didn't put much energy into this. (R)

### Pressure/Tension

- I did not feel nervous at all while doing this. (R)
- I felt very tense while doing this activity.
- I was very relaxed in doing these. (R)
- I was anxious while working on this task.
- I felt pressured while doing these.

### Perceived Choice

- I believe I had some choice about doing this activity.
- I felt like it was not my own choice to do this task. (R)
- I didn't really have a choice about doing this task. (R)
- I felt like I had to do this. (R)
- I did this activity because I had no choice. (R)
- I did this activity because I wanted to.
- I did this activity because I had to. (R)

### Value/Usefulness

- I believe this activity could be of some value to me.
- I think that doing this activity is useful for _blank_.
- I think this is important to do because it can _blank_.
- I would be willing to do this again because it has some value to me.
- I think doing this activity could help me to _blank_.
- I believe doing this activity could be beneficial to me.
- I think this is an important activity.

### Relatedness

- I felt really distant to this person. (R)
- I really doubt that this person and I would ever be friends. (R)
- I felt like I could really trust this person.
- I'd like a chance to interact with this person more often.
- I'd really prefer not to interact with this person in the future. (R)
- I don't feel like I could really trust person. (R)
- It is likely that this person and I could become friends if we interacted a lot.
- I feel close to this person.

**Constructing the IMI for your study.** First, decide which of the variables (factors) you want to use, based on what theoretical questions you are addressing. Then, use the items from those factors, randomly ordered. If you use the value/usefulness items, you will need to complete the three items as appropriate. In other words, if you were studying whether the person believes an activity is useful for improving concentration, or becoming a better basketball player, or whatever, then fill in the blanks with that information. If you do not want to refer to a particular outcome, then just truncate the items with its being useful, helpful, or important.

**Scoring information for the IMI.** To score this instrument, you must first reverse score the items for which an (R) is shown after them. To do that, subtract the item response from 8, and use the resulting number as the item score. Then, calculate subscale scores by averaging across all of the items on that subscale. The subscale scores are then used in the analyses of relevant questions.

---

The following is a 22 item version of the scale that has been used in some lab studies on intrinsic motivation. It has four subscales: interest/enjoyment, perceived choice, perceived competence, and pressure/tension. The interest/enjoyment subscale is considered the self-report measure of intrinsic motivation; perceived choice and perceived competence are theorized to be positive predictors of both self-report and behavioral measures of intrinsic motivation. Pressure tension is theorized to be a negative predictor of intrinsic motivation. Scoring information is presented after the questionnaire itself.

## TASK EVALUATION QUESTIONNAIRE

For each of the following statements, please indicate how true it is for you, using the following scale:

```
         1    2    3    4    5    6    7
not at all true | somewhat true | very true
```

1. While I was working on the task I was thinking about how much I enjoyed it.
2. I did not feel at all nervous about doing the task.
3. I felt that it was my choice to do the task.
4. I think I am pretty good at this task.
5. I found the task very interesting.
6. I felt tense while doing the task.
7. I think I did pretty well at this activity, compared to other students.
8. Doing the task was fun.
9. I felt relaxed while doing the task.
10. I enjoyed doing the task very much.
11. I didn't really have a choice about doing the task.
12. I am satisfied with my performance at this task.
13. I was anxious while doing the task.
14. I thought the task was very boring.
15. I felt like I was doing what I wanted to do while I was working on the task.
16. I felt pretty skilled at this task.
17. I thought the task was very interesting.
18. I felt pressured while doing the task.
19. I felt like I had to do the task.
20. I would describe the task as very enjoyable.
21. I did the task because I had no choice.
22. After working at this task for awhile, I felt pretty competent.

**Scoring information**. Begin by reverse scoring items # 2, 9, 11, 14, 19, 21. In other words, subtract the item response from 8, and use the result as the item score for that item. This way, a higher score will indicate more of the concept described in the subscale name. Thus, a higher score on pressure/tension means the person felt more pressured and tense; a higher score on perceived competence means the person felt more competent; and so on. Then calculate subscale scores by averaging the items scores for the items on each subscale. They are as follows. The (R) after an item number is just a reminder that the item score is the reverse of the participant's response on that item.

- Interest/enjoyment: 1, 5, 8, 10, 14 (R), 17, 20
- Perceived competence: 4, 7, 12, 16, 22
- Perceived choice: 3, 11 (R), 15, 19 (R), 21 (R)
- Pressure/tension: 2 (R), 6, 9 (R), 13, 18

The subscale scores can then be used as dependent variables, predictors, or mediators, depending on the research questions being addressed.

---

### TEXT MATERIAL QUESTIONNAIRE I

For each of the following statements, please indicate how true it is for your, using the following scale as a guide:

```
         1    2    3    4    5    6    7
not at all true | somewhat true | very true
```

1. While I was reading this material, I was thinking about how much I enjoyed it.
2. I did not feel at all nervous while reading.
3. This material did not hold my attention at all.
4. I think I understood this material pretty well.
5. I would describe this material as very interesting.
6. I think I understood this material very well, compared to other students.
7. I enjoyed reading this material very much.
8. I felt very tense while reading this material.
9. This material was fun to read.

**Scoring information**. Begin by reverse scoring items # 2 and 3. In other words, subtract the item response from 8, and use the result as the item score for that item. This way, a higher score will indicate more of the

concept described in the subscale name. Then calculate subscale scores by averaging the items scores for the items on each subscale. They are shown below. The (R) after an item number is just a reminder that the item score is the reverse of the participant's response on that item.

- Interest/enjoyment: 1, 3 (R), 5, 7, 9
- Perceived competence: 4, 6
    Pressure/tension: 2 (R), 8

---

The next version of the questionnaire was used for a study of internalization with an uninteresting computer task (Deci et al., 1994).

### ACTIVITY PERCEPTION QUESTIONNAIRE

The following items concern your experience with the task. Please answer all items. For each item, please indicate how true the statement is for you, using the following scale as a guide:

```
         1    2    3    4    5    6    7
not at all true | somewhat true | very true
```

1. I believe that doing this activity could be of some value for me.
2. I believe I had some choice about doing this activity.
3. While I was doing this activity, I was thinking about how much I enjoyed it.
4. I believe that doing this activity is useful for improved concentration.
5. This activity was fun to do.
6. I think this activity is important for my improvement.
7. I enjoyed doing this activity very much.
8. I really did not have a choice about doing this activity.
9. I did this activity because I wanted to.
10. I think this is an important activity.
11. I felt like I was enjoying the activity while I was doing it.
12. I thought this was a very boring activity.
13. It is possible that this activity could improve my studying habits.
14. I felt like I had no choice but to do this activity.
15. I thought this was a very interesting activity.
16. I am willing to do this activity again because I think it is somewhat useful.
17. I would describe this activity as very enjoyable.
18. I felt like I had to do this activity.
19. I believe doing this activity could be somewhat beneficial for me.
20. I did this activity because I had to.
21. I believe doing this activity could help me do better in school.
22. While doing this activity I felt like I had a choice.
23. I would describe this activity as very fun.
24. I felt like it was not my own choice to do this activity.
25. I would be willing to do this activity again because it has some value for me.

**Scoring information**. Begin by reverse scoring items # 8, 12, 14, 18, 20, and 24 by subtracting the item response from 8 and using the result as the item score for that item. Then calculate subscale scores by averaging the items scores for the items on each subscale. They are shown below. The (R) after an item number is just a reminder that the item score is the reverse of the participant's response on that item.

- Interest/enjoyment: 3, 5, 7, 11, 12 (R), 15, 17, 23
- Value/usefulness: 1, 4, 6, 10, 13, 16, 19, 21, 25
- Perceived choice: 2, 8 (R), 9, 14 (R), 18 (R), 20 (R), 22, 24 (R)

---

### SUBJECT IMPRESSIONS QUESTIONNAIRE

The following sentences describe thoughts and feelings you may have had regarding the other person who participated in the experiment with you. For each of the following statement please indicate how true it is for you, using the following scale as a guide:

```
         1    2    3    4    5    6    7
not at all true | somewhat true | very true
```

1. While I was interacting with this person, I was thinking about how much I enjoyed it.
2. I felt really distant to this person.
3. I did not feel at all nervous about interacting with this person.
4. I felt like I had choice about interacting with this person.
5. I would describe interacting with this person as very enjoyable.
6. I really doubt that this person and I would ever become friends.
7. I found this person very interesting.
8. I enjoyed interacting with this person very much.
9. I felt tense while interacting with this person.
10. I really feel like I could trust this person.
11. Interacting with this person was fun.
12. I felt relaxed while interacting with this person.
13. I'd like a chance to interact more with this person.
14. I didn't really have a choice about interacting with this person.
15. I tried hard to have a good interaction with this person.
16. I'd really prefer not to interact with this person in the future.
17. I was anxious while interacting with this person.
18. I thought this person was very boring.
19. I felt like I was doing what I wanted to do while I was interacting with this person.
20. I tried very hard while interacting with this person.
21. I don't feel like I could really trust this person.
22. I thought interacting with this person was very interesting.
23. I felt pressured while interacting with this person.
24. I think it's likely that this person and I could become friends.
25. I felt like I had to interact with this person.
26. I feel really close to this person.
27. I didn't put much energy into interacting with this person.
28. I interacted with this person because I had no choice.
29. I put some effort into interacting with this person.

**Scoring information**. Begin by reverse scoring items # 2, 3, 6, 12, 14, 16, 18, 21, 25, 27, and 28 by subtracting the item response from 8 and using the result as the item score for that item. Then calculate subscale scores by averaging the items scores for the items on each subscale. They are shown below. The (R) after an item number is just a reminder that the item score is the reverse of the participant's response on that item.

- Relatedness: 2 (R), 6 (R), 10, 13, 16 (R), 21 (R), 24, 26
- Interest/enjoyment: 1, 5, 7, 8, 11, 18 (R), 22
- Perceived choice: 4, 14 (R), 19, 25 (R), 28 (R)
- Pressure/tension: 3 (R), 9, 12 (R), 17, 23
- Effort: 15, 20, 27 (R), 29


</div></div>

