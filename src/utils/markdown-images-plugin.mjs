// Plugin hast para Sätteri (el procesador Markdown de Astro).
// Ajusta las imágenes locales de los posts (Markdown/MDX):
// - `sizes` acorde al ancho real de la columna de texto, para que el navegador
//   no descargue variantes pensadas para el ancho completo de la pantalla.
// - Si el artículo abre con una imagen, esa se carga con prioridad (LCP).
// La columna de texto del post mide 736px como máximo (prose-lg).
const PROSE_SIZES = '(min-width: 800px) 736px, 100vw';
// Caracteres del cuerpo del post dentro de los cuales una imagen cuenta como "de apertura".
const LEADING_CHARS = 400;

const isRemote = (src) => /^(https?:)?\/\//.test(src) || src.startsWith('data:');

export function markdownImagesPlugin() {
  // El plugin se comparte entre documentos; el estado se guarda por render.
  const seenByDocument = new WeakMap();

  return {
    name: 'markdown-images',
    element: {
      filter: ['img'],
      visit(node, ctx) {
        const src = typeof node.properties?.src === 'string' ? node.properties.src : '';
        if (!src || isRemote(src)) return;

        if (!node.properties.sizes) ctx.setProperty(node, 'sizes', PROSE_SIZES);

        const doc = ctx.data.astro;
        if (!doc || seenByDocument.has(doc)) return;
        seenByDocument.set(doc, true);

        const offset = node.position?.start?.offset;
        if (typeof offset === 'number' && offset <= LEADING_CHARS) {
          ctx.setProperty(node, 'loading', 'eager');
          ctx.setProperty(node, 'fetchpriority', 'high');
        }
      },
    },
  };
}
