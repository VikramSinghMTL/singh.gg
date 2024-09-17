---
{"title":"Game Loop","created":"2024-08-22","modified":"2024-09-13","dg-publish":true,"permalink":"/40-software/game-programming/game-loop/","dgPassFrontmatter":true,"updated":"2024-09-13"}
---


A game, fundamentally, is an infinite loop, like a `while(true)`. During every iteration of that loop, we're repeatedly performing the following set of steps:

1. First, we're processing input. That is to say, we're constantly checking: has the user pressed a key on the keyboard, moved the joystick, moved/clicked the mouse, etc.?
2. Second, we need to respond to that input from the previous step by updating anything in the game that depends on that input (i.e., tracking movement, detecting collisions, etc.).
3. Third, we need to re-render anything that was updated in the previous step, so that the user can see visually on the screen that the game has changed and feel a sense of interactivity.

![Game-Loop.png](/img/user/00%20System/Assets/Game-Loop.png)[^1]

[^1]: [Game Programming Patterns](gameprogrammingpatterns.com/game-loop.html)
