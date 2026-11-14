# Portfolio Site | Noah Roberts

My personal site and blog, built with [Astro](https://astro.build) and deployed on Vercel.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
npm run check     # type-check .astro files
```

## Where things live

| What | Where |
| --- | --- |
| Name, tagline, links, email, résumé path, About text, experience | `src/data/site.ts` |
| Projects (one markdown file each, frontmatter + write-up) | `src/content/projects/` |
| Blog posts (markdown with KaTeX math) | `src/content/posts/` |
| Blog post images | `public/blog-images/<post-slug>/` |
| Project screenshots (optimized at build time) | `src/assets/projects/` |
| Design tokens and shared styles | `src/styles/global.css` |
| Reading styles for posts and projects | `src/styles/prose.css` |
| Scroll-driven background glow | `src/components/Glow.astro` |

### Adding a post

Create `src/content/posts/<slug>.md`:

```md
---
title: "Post title"
description: "One or two sentences shown under the title and in the list."
date: 2026-01-15
readTime: "10 min read"
topic: "Machine Learning"                  # required; one per post
draft: true                                # optional, hides the post
---
```

Posts are listed newest first. Each topic gets a filter at `/blog/topics/<topic-slug>/`, created
automatically from the posts' `topic` values. Previous/next links on a post stay within its topic,
oldest to newest.

Write sections with `#` or `##`; headings are normalized so the page title stays the only `<h1>`.
Math uses `$inline$` and `$$display$$`.

### Adding a project

Create `src/content/projects/<slug>.md` with `title`, `kind`, `summary`, `stack`, `order`, and
optionally `image` (relative path into `src/assets/projects/`), `imageAlt`, and `links`.

## Deploy

Import the repository in Vercel. It detects Astro automatically (build `npm run build`, output `dist`).
The production domain (`noahnkr.com`) is set as `site` in `astro.config.mjs` for canonical and Open Graph URLs.
The résumé is served from `public/Noah-Roberts-Resume.pdf`; replace that file to update it.
