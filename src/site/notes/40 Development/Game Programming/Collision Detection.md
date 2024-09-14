---
{"title":"Collision Detection","created":"2024-09-02","modified":"2024-09-13","dg-publish":true,"permalink":"/40-development/game-programming/collision-detection/","dgPassFrontmatter":true,"updated":"2024-09-13"}
---


AABB Collision Detection relies on all colliding entities to have "axis-aligned bounding boxes", which simply means their collision boxes contain no rotation in our world space, which allows us to use a simple formula to test for collision:

```javascript
if (
	rect1.x < rect2.x + rect2.width &&
	rect2.x < rect1.x + rect1.width &&
	rect1.y < rect2.y + rect2.height &&
	rect2.y < rect1.y + rect1.height
) {
	// collision is true
} else {
	// collision is false
}
```

- The formula is checking if the two boxes are colliding in any way.
- We can use AABB Collision Detection to detect whether, for example, a player is colliding with an enemy and react accordingly.
