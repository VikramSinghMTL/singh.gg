---
{"title":"Research","created":"2025-04-04","modified":"2025-06-04","dg-permalink":"research","dg-publish":true,"permalink":"/research/","dgPassFrontmatter":true,"updated":"2025-06-04"}
---


## Making Peer Feedback Playable

<div style="display: flex; justify-content: center;">
  <iframe style="aspect-ratio: 16 / 9; width: 100% !important;" src="https://www.youtube.com/embed/n6z8iapyhXk" title="Making Peer Feedback Playable" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Setup

To replicate the system used in this study for automating feedback classification and assigning card-based incentives, follow the steps below.

1. Make a copy of the [cards](https://docs.google.com/presentation/d/1iLtf4P3dumrEqH4sYPbVLHRg1SqOXQRCOofv3R7TWHw/edit?usp=sharing) and print them out (double-sided since every second page are the backs of the cards) on standard 8.5x11" paper or card stock.
2. Download the [scripts](https://doi.org/10.5281/ZENODO.15178938) that will be used in the following steps.
3. Collect Peer Feedback Using Moodle
	- Use the Workshop activity in Moodle to set up a peer review cycle.
	- Ensure that students are required to submit both their work and feedback for at least three peers.
4. Download feedback in bulk using the Moodle `scraper.js` script to extract all peer feedback comments into a CSV format.
5. Classify Feedback Using ChatGPT
	- Use few-shot prompting to classify each comment using the [[50 Works/Research/Code Review Taxonomy\|Code Review Taxonomy]].
	- You can (and probably should) edit the taxonomy to fit your discipline (e.g., art critique, essay peer review, etc.).
6. Convert Classifications to Points
	- Each taxonomy category maps to a point value as described in the [[50 Works/Research/Methodology#Pre-Intervention Phase\|Methodology#Pre-Intervention Phase]].
	- You can either get the AI to do this or create a formula in Excel.
7. Assign Cards Based on Points
	- Use `card-assigner.js` to translate points into action cards (e.g., 3 = 1 steal card).
	- Show the output of the script to your students when it's time to play so they know who gets which cards.

## Game Rules

![Card Game Instructions.png](/img/user/00%20System/Assets/Card%20Game%20Instructions.png)

## Poster

![Thesis Poster.png](/img/user/00%20System/Assets/Thesis%20Poster.png)



- [[50 Works/Research/Abstract\|Abstract]]
- [[50 Works/Research/Closing Statement\|Closing Statement]]
- [[50 Works/Research/Code Review Taxonomy\|Code Review Taxonomy]]
- [[50 Works/Research/Conceptual Framework\|Conceptual Framework]]
- [[50 Works/Research/Conclusion\|Conclusion]]
- [[50 Works/Research/Consent Form\|Consent Form]]
- [[50 Works/Research/Data Analysis\|Data Analysis]]
- [[50 Works/Research/Data Collection Procedure\|Data Collection Procedure]]
- [[50 Works/Research/Discussion\|Discussion]]
- [[50 Works/Research/Game Intervention\|Game Intervention]]
- [[50 Works/Research/Intrinsic Motivation Inventory\|Intrinsic Motivation Inventory (IMI)]]
- [[50 Works/Research/Introduction\|Introduction]]
- [[50 Works/Research/Literature Review Outline\|Literature Review Outline]]
- [[50 Works/Research/Literature Review\|Literature Review]]
- [[50 Works/Research/Methodology\|Methodology]]
- [[50 Works/Research/Plotly\|Plotly]]
- [[50 Works/Research/Pre-Test & Post-Test\|Pre-Test & Post-Test]]
- [[50 Works/Research/Problem Statement\|Problem Statement]]
- [[50 Works/Research/Prompt Design\|Few-Shot Prompt Design for LLM Classification]]
- [[50 Works/Research/Research Proposal\|Research Proposal]]
- [[50 Works/Research/Results\|Results]]
- [[50 Works/Research/Structuring Knowledge\|Structuring Knowledge]]
- [[50 Works/Research/The Game\|The Game]]
- [[50 Works/Research/Thesis\|Thesis]]


