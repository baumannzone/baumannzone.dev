// Plugin hast para Sätteri (el procesador Markdown de Astro).
// Marca los enlaces de afiliado de los posts con `rel="sponsored noopener"`,
// como pide Google para los enlaces con compensación económica.
// Un enlace cuenta como afiliado si lleva `via=` en la query (Git Tower)
// o apunta a un acortador de Amazon (amzn.to).
const isAffiliate = (href) => {
  try {
    const url = new URL(href);
    return url.searchParams.has('via') || url.hostname === 'amzn.to';
  } catch {
    return false;
  }
};

export function markdownSponsoredLinksPlugin() {
  return {
    name: 'markdown-sponsored-links',
    element: {
      filter: ['a'],
      visit(node, ctx) {
        const href = typeof node.properties?.href === 'string' ? node.properties.href : '';
        if (!href || !isAffiliate(href)) return;
        ctx.setProperty(node, 'rel', 'sponsored noopener');
      },
    },
  };
}
