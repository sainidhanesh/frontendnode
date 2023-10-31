---
layout: post
title: Create Random Password Generator Dart
categories: dart
permalink: random-password-generator-using-dart
---

Passwords are an important part of our online security, but it can be difficult to come up with strong passwords that are also easy to remember. A random password generator can be a great way to create strong and unique passwords for all of your online accounts.

In this blog post, we will show you how to build a random password generator in Dart. The code is simple and straightforward, and it can be easily customized to meet your needs.

**Getting started**

To get started, we need to import the dart:math library. This library contains the `Random()` class, which we will use to generate random numbers.

```dart
import 'dart:math';
```
Next, we need to declare a constant array of characters that can be used to generate the password. This array can include any characters that you want, but it is important to include a variety of character types, such as upper and lowercase letters, numbers, and symbols.

```dart
const arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#%^&*()";
```

Now, we can declare a variable to store the generated password and a random number generator.

```dart
var password = "";
var random = Random();
```
To generate the password, we will simply loop over the array of characters and add a random character to the password at each iteration.

```dart
for (var i = 0; i < 8; i++) {
  var rn = random.nextInt(arr.length);
  password += arr[rn];
}
```

## Tips for creating strong passwords
Here are a few tips for creating strong passwords:
- Use a mix of upper and lowercase letters, numbers, and symbols.
- Make your passwords at least 12 characters long.
- Avoid using common words or phrases in your passwords.
- Use a different password for each of your online accounts.

### Password generator using Dart:
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
