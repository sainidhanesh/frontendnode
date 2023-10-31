---
layout: post
title: CSS Mouse Out Transition Effect
categories: css, transition
permalink: css-mouse-out-transition-effect
---

CSS, or Cascading Style Sheets, is a fundamental technology for designing and styling web pages. It offers a wide array of features to make your website visually appealing and interactive. Among these features, CSS mouse-out transition effects play a crucial role in enhancing the user experience by adding a touch of elegance to web elements.

{% assign src = 'mouse-transition-effect.gif' %}
{% include img.html src=src %}

## Mouse-out transition effect using HTML and CSS

### HTML
```html
<h1>Hover Me</h1>
```

### CSS
```css
html {
  block-size: 100%;
  inline-size: 100%;
}
body {
  margin: 0;
  display: grid;
  min-block-size: 100%;
  min-inline-size: 100%;
  place-content: center;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}
h1::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}
h1:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
h1::before {
  content: " ";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: block;
  inset: 0 0 0 0;
  border-radius: 5px;
  position: absolute;
  transition: transform 0.3s ease;
  background: rgba(99, 102, 241, 0.5);
}
h1 {
  font-size: 5rem;
  position: relative;
}
@media (orientation: landscape) {
  body {
    grid-auto-flow: column;
  }
}
```
