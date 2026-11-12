---
title: GraphMath
kind: Graphics
summary: Graphing calculator with a hand-written expression parser.
stack: [JavaScript, Canvas API]
order: 4
image: ../../assets/projects/graphmath.png
imageAlt: GraphMath plotting several functions on a grid
links:
  - { label: Live demo, href: "https://noahnkr.github.io/graphmath/" }
  - { label: Source, href: "https://github.com/noahnkr/graphmath/" }
---

GraphMath is an interactive graphing calculator and expression evaluator built in JavaScript with the Canvas API. Inspired by [Desmos](https://www.desmos.com/), it plots functions in real time so you can see how algebraic expressions turn into curves. I started it in Java with Swing, then moved to JavaScript for a more responsive UI and faster rendering in the browser.

The core is a custom parser. It tokenizes input through lexical analysis, converts expressions to postfix notation with the shunting-yard algorithm, and builds an expression tree for evaluation. It handles trigonometry, logarithms, and nested operations, and supports user-defined variables and multi-digit precision. To avoid floating-point errors, I implemented number condensation and recursive function parsing.

The graph is drawn on an HTML5 canvas with smooth curve plotting, zooming, and panning. Behind the scenes, the evaluator walks the expression tree in post-order to compute results in real time. The project taught me a lot about interpreters, data structures, and graphics programming.
