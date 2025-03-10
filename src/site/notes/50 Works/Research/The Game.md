---
{"title":"The Game","created":"2024-10-29","modified":"2025-03-09","dg-publish":true,"permalink":"/50-works/research/the-game/","dgPassFrontmatter":true,"updated":"2025-03-09"}
---


Since this is a game programming course, the goal is to build all required structures (State Machine, Sprite, Timer, Collision) to make a "game" by collecting and trading resources (Variable, Function, Array, Class) which are common coding entities. The first player to construct all structures wins the game.

## Turn Phases

1. Draw Phase:
	1. Draw one card from the deck.
	2. If you draw a resource card, add it to your hand.
	3. If you draw a setback card (e.g., “Bug”), follow its effects (e.g., lose half your resources or destroy your State Machine structure).
2. Action Phase:
	1. Build: If you have enough resources for a structure, you can spend them to construct it. Spent resources go into the discard pile.
	2. Trade (if you have a trade card): Trade different resources with another player and discard the card.
	3. Steal (if you have a steal card): Take a structure from another player, but you skip your next turn and discard the card.
3. End Phase:
	1. Check if you’ve built all the structures (if so, you win).
	2. If the deck is empty, shuffle the discard pile and use it as the new deck.

## Card Types

1. Resources:
	1. **Variable** < >: Used to build **Sprite** and **Timer**.
	2. **Function** (): Used to build **State Machine** and **Collision**.
	3. **Array** []: Used to build **Sprite** and **Timer**.
	4. **Class** { }: Used to build **State Machine** and **Collision**.
2. Setbacks:
	1. **Bug**: Lose half your resources or destroy your **State Machine**.
	2. **Alpha Male**: Lose half your resources or destroy your **Sprite**.
	3. **Procrastination**: Lose half your resources or destroy your **Timer**.
	4. **Self-Collision**: Lose half your resources or destroy your **Collision**.
3. Actions:
	1. **Trade Cards**: Allows players to exchange different resources with one another. Discard after use.
	2. **Steal Cards**: Take a structure from another player, but lose your next turn. Discard after use.
	3. **Nope Cards**: Stop any action from any player in any phase. This could be someone stealing from you, two other players trading, or if you draw a setback that you don't want to deal with. Discard after use.

## Seeding Trade/Steal Cards via Feedback

- Peer Feedback: Before playing, students provide feedback on peer code. Based on the quality of feedback (assessed via the code review taxonomy), players are awarded trade and steal cards.
- High-quality feedback results in more trade cards.
- Excellent feedback may grant a steal card.

This ties the gameplay to their code review skills, reinforcing the importance of good feedback.

Icons from [https://remixicon.com](https://remixicon.com) under [https://github.com/Remix-Design/remixicon/blob/master/License](https://github.com/Remix-Design/remixicon/blob/master/License)

## Short Rules

## Objective

Build all four structures (State Machine, Sprite, Timer, Collision) to win.

## Setup

1. Shuffle the resource and setback cards (NOT the structure or special cards) into a single deck, and place it in the middle.
2. Place the 4 structure piles, one for each structure, in the middle.
3. Each player draws 3 resource cards from the deck. If you draw a setback, shuffle it back into the deck.
4. Each player draws the special cards outlined on the right.

## Turn Phases

1. **Actions**: Take as many actions as you want each turn. Options:
	1. Use the resources from your hand to build a structure. Place the structure in front of you and discard the resources.
	2. Use a trade card to exchange resources with another player. Discard after use.
	3. Use a steal card to take a structure from another player. Discard after use, and skip your next turn.
2. **End Turn**: Draw one card from the deck to end your turn. If the card is a:
	1. **Resource**: Add it to your hand.
	2. **Setback**: Resolve it immediately, or use a nope card to cancel it. If hand size is odd, halve and round down.

At any point in the game, any player may use a nope card to stop any action (build structure, steal, trade, or setback). Discard after use. If noping a build, the builder must discard the resources they would have used to build the structure.
