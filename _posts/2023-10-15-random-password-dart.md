---
layout: post
title: Create Random Password Generator Dart
categories: dart
permalink: random-password-generator-using-dart
---

In the digital age, where our lives are intertwined with various online services, the need for strong password security cannot be emphasized enough. Passwords are your first line of defense in protecting your personal and sensitive information from prying eyes. However, creating complex and unique passwords for each account can be a daunting task. That's where a random and strong password generator comes to the rescue. In this article, we will explore how to build one using JavaScript.

```dart
import "dart:math";

void main() {
    const arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#%^&*()";
    const len = arr.length + 1;
    var password = "";

    for (var i=0; i<8; i++) {
        var rn = Random().nextInt(len);
        password += arr[rn];
    }

    print(password);
}
```
