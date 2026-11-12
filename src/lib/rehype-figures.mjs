/**
 * Numbered figures from plain markdown. A paragraph that starts with an image and has more
 * content after it becomes a figure, numbered in order within the post:
 *
 *   ![Tensor](/blog-images/math-review/tensor.jpg)
 *   Scalars, vectors, matrices, and tensors. Source: [KDnuggets](https://...)
 *
 *   → <figure>
 *       <img …>
 *       <figcaption><span class="fig-label">Figure 3:</span> Scalars, … Source: <a …>KDnuggets</a></figcaption>
 *     </figure>
 *
 * Runs after rehype-theme-images, so a light/dark image pair stays together as one figure.
 * An image alone in its paragraph is left untouched and isn't numbered.
 *
 * Also wraps every <table> in a horizontally scrollable container, so tables can size their
 * columns to their content and scroll on narrow screens instead of breaking words.
 */
export default function rehypeFigures() {
  return (tree) => {
    const isBlank = (n) => n.type === 'text' && !n.value.trim();
    const isImg = (n) => n.type === 'element' && n.tagName === 'img';
    const isBr = (n) => n.type === 'element' && n.tagName === 'br';
    const el = (tagName, className, children) => ({
      type: 'element',
      tagName,
      properties: className ? { className: [className] } : {},
      children,
    });
    let figureCount = 0;

    const walk = (node) => {
      if (!node.children) return;
      node.children.forEach((child, i) => {
        if (child.type !== 'element') return;

        if (child.tagName === 'table') {
          node.children[i] = el('div', 'table-scroll', [child]);
          return;
        }
        if (child.tagName !== 'p') return walk(child);

        const kids = child.children;
        let split = 0;
        while (split < kids.length && (isImg(kids[split]) || isBlank(kids[split]))) split++;
        const images = kids.slice(0, split).filter(isImg);
        const rest = kids.slice(split);
        while (rest.length && (isBlank(rest[0]) || isBr(rest[0]))) rest.shift();
        if (!images.length || !rest.length) return;

        // Trim the leading newline the markdown line break leaves on the caption text.
        if (rest[0].type === 'text') rest[0] = { ...rest[0], value: rest[0].value.replace(/^\s+/, '') };

        figureCount += 1;
        const label = el('span', 'fig-label', [{ type: 'text', value: `Figure ${figureCount}:` }]);
        node.children[i] = el('figure', null, [
          ...images,
          el('figcaption', null, [label, { type: 'text', value: ' ' }, ...rest]),
        ]);
      });
    };
    walk(tree);
  };
}
