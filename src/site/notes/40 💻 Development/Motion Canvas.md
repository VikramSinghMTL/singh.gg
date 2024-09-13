---
{"dg-publish":true,"permalink":"/40-development/motion-canvas/","noteIcon":"1","created":"Aug 29, 2024 17:17","updated":"Sep 12, 2024 23:24"}
---


## Motion Canvas

- A `<Circle>` can be represented by `<Square>` with rounded corners:

```jsx
<Rect size={200} radius={100} />
```

or a `<Spline>`:

```jsx
<Spline
	points={[
		[0, -150],
		[150, 0],
		[0, 150],
		[-150, 0],
	]}
	smoothness={0.6} // Necessary for some reason.
	lineJoin={'round'}
	closed
/>
```
