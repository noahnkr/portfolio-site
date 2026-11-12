---
title: Ankr
kind: Languages
summary: Dynamically typed toy language with a recursive-descent interpreter.
stack: [C++]
order: 6
links:
  - { label: Source, href: "https://github.com/noahnkr/ankr/" }
---

Ankr is a dynamically typed toy programming language I designed and implemented in C++ to learn how compilers and interpreters work. It supports variable declarations, arithmetic, loops, conditionals, and user-defined functions, with a small but expressive syntax.

I built the interpreter from scratch: a lexer that tokenizes input, a recursive-descent parser that produces abstract syntax trees, and an evaluator that executes them. No external parsing libraries are involved.

```js
function fibonacci(n) {
  var a = 0;
  var b = 1;
  var f = 1;
  for (var i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

// Calculate and print the first 10 Fibonacci numbers
for (var i = 1; i < 10; i++) {
  output("Fibonacci " + i + ": " + fibonacci(i));
}
```

Building Ankr gave me hands-on experience with how high-level code is processed and executed, and made me think carefully about language design, runtime behavior, and error handling.
