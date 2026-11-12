---
title: Arbadillo
kind: Data platform
summary: Distributed pipeline that collects, normalizes and stores live and historical sportsbook odds.
stack: [Python, Celery, Redis, PostgreSQL, Scrapy, Playwright]
order: 1
links:
  - { label: Source, href: "https://github.com/noahnkr/arbadillo/" }
---

Arbadillo is a scalable, distributed sports betting data platform built to collect, process, and serve live and historical sportsbook odds across multiple leagues and markets. It is designed to be extended, and it will feed a future AI engine that identifies high-value betting opportunities.

## Stack and architecture

- **Celery + Redis:** Asynchronous scraping jobs run in parallel using Celery, with Redis as both the task backend and an in-memory cache to reduce I/O and keep odds data fresh.
- **Scrapy + Playwright:** Reverse-engineered sportsbook APIs and dynamic web content are accessed with Scrapy and headless Playwright sessions.
- **PostgreSQL:** Odds and event data are structured and deduplicated using upserts keyed on event, market, sportsbook, and outcome, which keeps the data consistent and avoids bloat.
- **Data normalization:** Market names and outcomes are cleaned and mapped across sportsbooks, so analysis and model training get uniform input.

## Pipeline

1. **Bootstrap the schedule.** The ESPN API provides upcoming events, team aliases, and rosters. Events are cached and used to match sportsbook event IDs.
2. **Scrape odds.** FanDuel, DraftKings, and ESPNBet clients collect moneylines, spreads, totals, and props. The data is parsed, normalized, deduplicated, and cached.
3. **Upsert to the database.** Odds whose value, line, or status changed are upserted into PostgreSQL. Outdated lines are dropped from the cache automatically.

## What's next

- A machine learning model that predicts high-value bets from stats and odds history
- A natural language interface for querying picks and insights
- An API and frontend for users, with Discord integration
