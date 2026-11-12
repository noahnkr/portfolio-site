---
title: JChess
kind: Game AI
summary: Chess engine with alpha-beta search, Zobrist hashing and quiescence search.
stack: [Java, Swing]
order: 5
image: ../../assets/projects/jchess.png
imageAlt: JChess board mid-game
links:
  - { label: Source, href: "https://github.com/noahnkr/jchess/" }
  - { label: Video, href: "https://www.youtube.com/watch?v=WQBhAjnYA5g" }
---

JChess is a Java chess engine with an AI opponent that plays full games against a human. The engine uses minimax with alpha-beta pruning to evaluate positions and choose moves based on material balance, piece mobility, positioning, and pawn structure. A Java Swing interface handles interactive play and move tracking.

To search deeper in the same time, I added Zobrist hashing for compact board-state keys, transposition tables to cache positions that were already evaluated, and quiescence search to avoid shallow tactical blunders in volatile positions.

Chess programming introduced me to search algorithms, evaluation heuristics, and game-tree exploration. Next on the list are an opening book built from grandmaster games and reinforcement learning through self-play. I still can't beat it consistently.
