/**
 * Shifts heading levels so the highest-level heading in a markdown file becomes <h2>.
 * The page layout owns the single <h1> (the title), so a post written with `#` sections
 * and a project written with `##` sections both render with correct heading order.
 */
export default function remarkNormalizeHeadings() {
  return (tree) => {
    const headings = [];
    const walk = (node) => {
      if (node.type === 'heading') headings.push(node);
      if (node.children) node.children.forEach(walk);
    };
    walk(tree);
    if (!headings.length) return;
    const shift = 2 - Math.min(...headings.map((h) => h.depth));
    if (shift === 0) return;
    for (const h of headings) h.depth = Math.min(6, Math.max(1, h.depth + shift));
  };
}
