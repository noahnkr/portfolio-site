---
title: Weight Club
kind: Web app
summary: Gym check-in app the Iowa State Weight Club still runs on.
stack: [Node.js, Firebase, Chart.js]
order: 3
image: ../../assets/projects/weightclub.png
imageAlt: Chart of member check-ins across the day in 15-minute intervals
links:
  - { label: Live site, href: "https://www.isuweightclub.com" }
  - { label: Source, href: "https://github.com/noahnkr/weight-club/" }
---

At the Iowa State Weight Club, coordinating gym sessions was an ongoing challenge. For safety, at least three members had to be present during each workout, but student schedules changed constantly. Organizing through GroupMe led to cluttered threads and scheduling conflicts. As the club's events coordinator and webmaster, I saw the need for something more reliable.

I designed and built a check-in web app to make scheduling easier and show when the gym would be busy. The frontend uses Chart.js to render a live graph of member check-ins in 15-minute intervals throughout the day. The backend, built with Node.js and Firebase, stores attendance in real time and supports recurring check-ins, easy deletions, and time validation.

The app removed most of the scheduling confusion and the need for manual coordination, so the group chat could go back to announcements. The club still uses it after my time at Iowa State.
