---
layout: post
title: Skeleton effect using HTML and CSS
---

Creating a skeleton loading effect using HTML and CSS is a great way to improve the user experience while waiting for content to load. This effect typically involves showing a simple, animated placeholder before the actual content appears. Here's a basic example of how to create a skeleton loading effect:

![{{page.title}}](/assets/img/skeleton-animation.gif)

## Skeleton loading effect using HTML and CSS
### HTML

```html
<div class="container">
  <div class="skeleton"></div>
  <div class="info">
    <div class="skeleton"></div>
    <div class="skeleton" style="width: 70%;"></div>
    <div class="skeleton" style="width: 50%;"></div>
  </div>
</div>
```

### CSS

```css
html {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: royalblue;
}
.container {
  gap: 2%;
  width: 500px;
  height: 150px;
  display: grid;
  padding: 10px;
  border-radius: 6px;
  background: #f7f7f7;
  grid-template-columns: 28% 70%;
  box-shadow: 2px 2px 6px rgba(100, 100, 100, 0.5), 0 0 6px rgba(100, 100, 100, 0.5);
}
.container > .info {
  gap: 10px 0;
  display: grid;
  padding: 20px 0;
}
.skeleton {
  overflow: hidden;
  background: #cacced;
  border-radius: 5px;
}
.skeleton::before {
  content: "";
  display: block;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #dadae8, transparent);
  animation: skeleton-animation 2s ease-in-out infinite;
}
@keyframes skeleton-animation {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(-100%);
  }
}
```
