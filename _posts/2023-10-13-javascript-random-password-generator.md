---
layout: post
title: Build random password generator using javascript
---

In the digital age, where our lives are intertwined with various online services, the need for strong password security cannot be emphasized enough. Passwords are your first line of defense in protecting your personal and sensitive information from prying eyes. However, creating complex and unique passwords for each account can be a daunting task. That's where a random and strong password generator comes to the rescue. In this article, we will explore how to build one using JavaScript.

## The Importance of Strong Passwords
Before we delve into the technical aspects of building a password generator, let's understand why strong passwords are essential. Weak passwords are the primary cause of data breaches, unauthorized access, and identity theft. They can be easily guessed, making your accounts vulnerable to attacks. Strong passwords, on the other hand, are a robust shield against such threats.

## What is a Random Password Generator?
A random password generator is a tool that creates unique, complex, and random passwords for your online accounts. These passwords are typically difficult to guess, making them highly secure. Such generators are designed to ensure that your accounts remain safe and your sensitive data remains protected.

## Building a Random Password Generator in JavaScript

### HTML
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Random Password Generator</title>
    </head>
    <body>
        <div class="passwordGenerator">
            <input type="text" id="input" />
            <button id="btn">New Password</button>
        </div>
    </body>
</html>
```

### CSS
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}
.passwordGenerator {
  gap: 10px;
  display: grid;
  place-items: center;
}
input,
button {
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
button {
  color: white;
  background: royalblue;
  border-color: royalblue;
}
```

### JavaScript
```js
const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.onclick = () => randomPassword();

function randomPassword() {
  const char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";

  const passwordLength = 8;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const rNum = Math.floor(Math.random() * char.length);
    password += char[rNum];
    input.value = password;
  }
}
```

Conclusion on Password Security
In an age where online security is paramount, having strong and unique passwords for all your accounts is non-negotiable. A random password generator can be a valuable tool in your arsenal for safeguarding your digital life. By following the steps outlined in this article, you can build your own generator and take control of your online security.