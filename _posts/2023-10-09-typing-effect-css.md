---
layout: post
title: Typing Effect using CSS
categories: css, animation
permalink: typing-effect-using-css
---

The typing effect, often seen on landing pages or in hero sections of websites, is an animation that simulates the process of typing text on the screen as if someone were actively engaging with the content. It can be used for various purposes, such as highlighting key messages, providing an engaging introduction, or simply adding a touch of interactivity.

The typing effect is an excellent way to capture your visitors' attention. It adds a dynamic element to your website, making it more engaging and interactive.

{% assign src = 'typing-effect.png' %}
{% include img.html src=src %}

## Typing Effect with CSS

### HTML
```html
<span>Typing effect!</span>
```
### CSS

```css
body {
  height: 100vh;
  display: grid;
  place-items: center;
}
span {
  width: 14ch;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid;
  font: 400 2rem monospace;
  animation: typing 2s steps(14), blink 0.5s infinite step-end alternate;
}
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
```

Incorporating a typing effect using CSS into your web projects is an effective way to enhance user engagement. This simple yet captivating animation can make a significant difference in how your content is perceived. By following the steps outlined in this article, you can add this dynamic feature to your website and create a more interactive and memorable user experience.
