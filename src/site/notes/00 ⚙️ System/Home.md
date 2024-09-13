---
{"dg-publish":true,"permalink":"/00-system/home/","title":"Home","tags":["gardenEntry"],"noteIcon":"1","created":"Aug 29, 2024 17:13","updated":"Sep 12, 2024 23:16"}
---


## Home

### Goals

- Task tracker that tells me what the next task I need to do is for a given project.
- Periodic check ins so that I can keep up with my goals.
- MTP Zettlekasten style folder that has all my knowledge and research.
- Notes about things I learn for my hobbies like web dev, game dev, fitness, meal prep recipes, video games, golfing, etc.
- Figure out how to have my courses in here, problem is there are way more than just markdown files i.e. source files and images. Is that okay for obsidian?
    - images and pdfs yes, source files no
    - Maybe the current JAC folder can stay, and what's in here is my own personal learnings about the course material? But then the course notes would be in the JAC folder and not here... Unless I have the course notes in here and not in JAC, and JAC is only source files?
- Should I have finances like taxes and receipts stuff in here?
    - If I go with PARA let's say, then I would actually have PARA folders in Drive, Proton, and Outlook to match across systems.
- Should I have the entirety of Drive in this HQ?
- Get Readwise Reader academic pricing and this will ensure that everything I need to read goes into one place.
    - The highlighting feature I'm not too sure about because why would I want a daily digest of a bunch of random notes? This part I still have to look into.
    - Is there a Zotero integration? Where do I keep my PDFs now, Zotero, or Readwise?
- Read Building a Second Brain

### Potential Strategies

- [Johnny.Decimal](https://johnnydecimal.com/)
- [PARA](https://fortelabs.com/blog/para/)
- [[20 Literature Notes/allen2010\|allen2010]]
- [PARA+GTD Obsidian setup](https://medium.com/@guywiener/para-gtd-obsidian-setup-d7f30b1dbb0c)
- [Daily notes template](https://www.reddit.com/r/ObsidianMD/comments/131pvv6/daily_notes_template_for_obsidian_task_edition/)
- [Publish](https://dg-docs.ole.dev/getting-started/01-getting-started/)

### Folder Structure

- 00 Inbox
- Fleeting notes/ideas/dump
- 10 Courses
    - [[Web Programming\|Web Programming]]
    - [[Game Programming\|Game Programming]]
- 20 JAC
- 30 Pedagogy
- 40 Health
- 50 Relationships
- 60 Home
- 70 Finances
- 80 Sherbrooke
- 90 Development
- 34 PKM
- 35 Computer Science
- 40 Archive

But like isn't the problem that everything is getting siloed now? How do I link my thinking? What if all the folders above were tags instead that I put in the front matter? Could the above folder structure instead be the main MOC where I can navigate to any other files? I think I need to read [this](https://www.eleanorkonik.com/yet-another-hot-take-on-folders-versus-tags/) first and get back to you.

Okay I read it and it's interesting. Eleanor argues that folders have always been and therefore always will be (Lindy effect) and I think this is true. Tagging is a newer feature and may not play well with other systems. I have to decide what tags I want and would be useful and to keep a **rigorous** list of them using some kind of tag index/glossary. Think of tags like enums for better structure. To link my thinking... maybe that could happen within specific folders? Like the MTP areas folder? Then the projects folder probably wouldn't have links, or would it, I don't know yet until I start populating it with stuff. Another idea could be that each area folder has its own MOC or each project folder has its own MOC? The MOC could then index all the notes in the folder instead of having subfolders... But this would mean that each area folder would just be a whole mess of notes then to achieve more of a "flat" structure, but at least that would be contained within a folder itself. [This chick](https://www.youtube.com/watch?v=LflU3FqZ6h4) has one giant flat structure and constructs dashboards and views from all of it but it is then extremely coupled to Notion which is bad. I think I could achieve the same but on like a "sub-topic" or "area" basis. Lots of good ideas in that video I think.

### Flows

1. Getting Things Done
    1. Capture tasks I think of during the day (Todoist)
        1. Keep the same PARA folder/project structure in Todoist
        2. Use the Taskcally integration to timebox tasks right away
    2. Maybe like a couple journal prompts to start the day?
        1. What do I want to accomplish today
        2. How do I feel (too general probably)
        3. Appreciations
2. Academia
    1. Read/annotate PDF journals with Zotero
    2. Extract annotations with mdnotes
    3. Send annotations to Obsidian MTP > Literature notes
    4. Synthesize annotations in own words, make permanent notes, use bibtex for in text citations
    5. Work on papers in MTP > Projects, use bibtex for in text citations
    6. Use pandoc to convert `.md` paper to `.docx`
3. Personal
    1. Read/annotate with Readwise Reader
    2. Import annotations to Obsidian with the Readwise plugin
    3. Make note in appropriate Areas or Resources folder

<https://betterhumans.pub/obsidian-tutorial-for-academic-writing-87b038060522>

<https://thesiswhisperer.com/2022/10/01/building-a-second-brain-for-academic-writing/>

<https://cft.vanderbilt.edu/learning-and-course-management-systems/>

### My Todoist Workflow

- Priorities
    - Red: Today
    - Orange: This week
    - Blue: This quarter
    - Grey: Someday
- Labels
    - @next
    - @waiting
    - @later
    - @10m
    - @30m
    - @1h
    - @long
- Filters
    - Today
    - This Week
    - This Quarter
- Projects
    - Personal
    - JAC
    - Sherbrooke

Every new task is given a priority which denotes what time frame in which it should be completed, a label for time approximation as well as a status, and an associated project/sub-project.

### My Nirvana Workflow

Friendship with Todoist over, now Nirvana is my best friend. It's much more geared towards GTD with the one killer feature being that it auto-updates next tasks as you check things off a project list. That sounds nuts but since next actions are the core of GTD, this is paramount.

| Category          | Tool                              | Projects | Areas | Resources | Archive |
| ----------------- | --------------------------------- | :------: | :---: | :-------: | :-----: |
| Email             | Proton + Outlook                  |  Inbox   |       |           |         |
| Todo              | Nirvana                           |    X     |   X   |           |         |
| Notes             | Obsidian                          |    X     |   X   |     X     |    X    |
| Cloud             | Google Drive (Proton Drive)       |    X     |   X   |     X     |    X    |
| Calendar          | Google Calendar (Proton Calendar) |    X     |   X   |           |         |
| Reference Manager | Zotero                            |          |       |     X     |         |
|                   | Braintoss                         |  Inbox   |       |           |         |

When I process my inbox, I do one of the following:

- Delete it if I'll never need it again.
- Archive it if I may need to search for it again.
- Send it to my task manager if I need to take some sort of action on it, or
- Save it to my note taking app if I need to remember it.

### [[00 ⚙️ System/Tag Taxonomy\|Tag Taxonomy]]
