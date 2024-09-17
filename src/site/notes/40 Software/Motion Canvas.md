---
{"dg-publish":true,"created":"2024-08-29","modified":"2024-09-13","permalink":"/40-software/motion-canvas/","dgPassFrontmatter":true,"updated":"2024-09-13"}
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
