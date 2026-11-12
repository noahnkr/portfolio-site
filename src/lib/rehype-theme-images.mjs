import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');

/**
 * Theme-aware images. For every <img src="/x/foo.png"> (or .webp, for animations) in
 * markdown, if public/x/foo.light.png exists, emit both variants:
 *   <img src="/x/foo.png"       class="theme-img theme-img-dark">
 *   <img src="/x/foo.light.png" class="theme-img theme-img-light">
 * CSS in prose.css shows the one that matches the active theme (including the
 * manual toggle, which <picture> media queries can't follow). Hidden variants are
 * lazy-loaded, so a browser only downloads the one it shows.
 */
export default function rehypeThemeImages() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'element' && child.tagName === 'img') {
          const src = child.properties?.src;
          const ext = typeof src === 'string' && src.startsWith('/') && src.match(/\.(png|webp)$/)?.[0];
          if (ext) {
            const lightSrc = src.slice(0, -ext.length) + '.light' + ext;
            if (fs.existsSync(path.join(PUBLIC_DIR, decodeURI(lightSrc)))) {
              const base = [...(child.properties.className ?? []), 'theme-img'];
              const shared = { loading: 'lazy', decoding: 'async' };
              child.properties = { ...child.properties, ...shared, className: [...base, 'theme-img-dark'] };
              const light = {
                ...child,
                properties: { ...child.properties, src: lightSrc, className: [...base, 'theme-img-light'] },
              };
              node.children.splice(i + 1, 0, light);
              i++; // skip the node we just inserted
            }
          }
        }
        walk(child);
      }
    };
    walk(tree);
  };
}
