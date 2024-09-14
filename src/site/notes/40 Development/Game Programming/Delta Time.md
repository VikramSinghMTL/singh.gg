---
{"dg-publish":true,"permalink":"/40-development/game-programming/delta-time/","title":"Delta Time","created":"2024-08-22","updated":"2024-09-13"}
---


> [!note]
> The content for this section was taken from Drew Coleman.[^1] If you want a more in-depth explanation about delta time, I highly recommend reading the article in its entirety!

Combining the previous two sections, we paint (and repaint) on a 2D canvas over and over again until the game stops. This repainting is what gives the illusion of things being moved on the screen. But, how fast is the repainting happening? This depends on the hardware your game is running on. You may have heard the terms "30 FPS" and "60 FPS" before. FPS stands for "frames per second". A "frame" is a single painting of our animation.

![Frame-Rates.gif](/img/user/00%20System/Assets/Frame-Rates.gif)[^2]

For example, if our hardware runs at 3 frames per second, this means that in one second, we have 3 repaints.

![Delta-Time-3-FPS.png](/img/user/00%20System/Assets/Delta-Time-3-FPS.png)

In other words, we have 1 repaint (roughly) every 0.33 seconds (1/3). Our **delta time** in this case is 0.33 seconds.

One of the problems that **delta time** solves is making a game feel the same on different hardware.

## Why Frame Rate Dependency is Bad

A game that is frame rate dependent is one in which parts of the game is tied specifically to the number of frames the device the game is running on can draw.

Let's look at one area in a game which shouldn't be frame rate dependent, **movement**. When we are describing movement it's in terms of the distance we travel over some specified time, like pixels per second (p/s), or kilometers per hour (kmph). If our game is frame rate dependent, then the speed at which our objects move is tied to the frame rate which means the speed of our game objects will be different on different hardware.

![Delta-Time-30-FPS.png](/img/user/00%20System/Assets/Delta-Time-30-FPS.png)

Assuming we have a spaceship and we want it to move at 10p/s, if we knew our game ran at 30fps on our device, then we would want it to move at 0.33333 pixels per frame.

![Delta-Time-60-FPS.png](/img/user/00%20System/Assets/Delta-Time-60-FPS.png)

However, as soon as we run our game on a different device then the speed at which our ship moves will no longer be at 10p/s. On a device that can run our game at 60fps, we would have moved 20p/s. This is because we would be moving at 0.33333 pixels per frame, but the number of paints we're doing in 1 second has **doubled**!

## Delta Time to the Rescue

> **TL;DR**: Any time you change the position of something on the screen, scale it by delta time.

Delta time is the solution to solving our problem, freeing our code from the frame rate, making it frame rate independent.

How using delta time does this is quite simple. If we first look at the problem of running our game on different hardware devices that run the game at different frames per second. If we still want our spaceship to fly at 10p/s but we want it to run on devices that can handle both 30 and 60fps. Then all we need to do each frame is multiply our game speed by the delta time (measured in seconds) value. Below is some code showing how the spaceship can be moved in the positive x-axis by 10p/s using delta time.

```javascript
// Old
function update() {
	spaceship.x += 10; // Every frame, move the spaceship 10 pixels to the right.
}

// New
function update(dt) {
	spaceship.x += 10 * dt; // Every frame, move the spaceship (10 * dt) pixels to the right.
}
```

Now, at 30fps the delta time value will be 0.033333 seconds so each frame we update our ship by 10 pixels per second multiplied by delta time:

```text
10 * 0.033333 = 0.33333 pixels per frame

0.33333 * 30 ~= 10 pixels per second
```

Notice, we get the same value as before. What is different, is that if our game is running at 60fps then the delta time will be at 0.016666:

```text
10 * 0.016666 = 0.16666 pixels per frame

0.16666 * 60 ~= 10 pixels per second
```

No matter how fast or slow the hardware is, our game will always behave the same - Hurray! 🎉

## 📚 References

[^1]: [Drew Coleman - Understanding Delta Time](https://drewcampbell92.medium.com/understanding-delta-time-b53bf4781a03)
[^2]: <https://javimir.tumblr.com/post/116880977997>
