// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkNormalizeHeadings from './src/lib/remark-normalize-headings.mjs';
import rehypeThemeImages from './src/lib/rehype-theme-images.mjs';
import rehypeFigures from './src/lib/rehype-figures.mjs';

export default defineConfig({
  // Production domain: used for absolute canonical and Open Graph URLs.
  site: 'https://noahnkr.com',

  // Old single-page routes from the previous site now live as sections on the home page.
  redirects: {
    '/about': '/#about',
    '/resume': '/#experience',
    '/projects': '/#projects',
    '/contact': '/#contact',
  },

  markdown: {
    // The remark/rehype pipeline is used (rather than Astro 7's default Sätteri processor)
    // because the posts depend on remark-math + rehype-katex for LaTeX.
    processor: unified({
      remarkPlugins: [remarkMath, remarkNormalizeHeadings],
      rehypePlugins: [rehypeKatex, rehypeThemeImages, rehypeFigures],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
