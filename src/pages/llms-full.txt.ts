import type { APIRoute } from 'astro';
import { SITE_NAME, SITE_OWNER } from '../consts';
import myUses from '../components/UsesPage/uses.js';
import { getLlmsContent, isoDay, oneLine } from '../utils/llms';

type UsesItem = { title: string; description?: string; specs?: string[] };
type UsesSection = {
  type: 'h2' | 'h3';
  title: string;
  children?: UsesItem[];
};

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const { posts, talks } = await getLlmsContent();

  const profileLines = Object.entries(SITE_OWNER.profiles).map(
    ([network, href]) => `- ${network}: ${href}`,
  );

  const talkBlocks = talks.map((talk) => {
    const { title, type, event, date, description, links } = talk.data;
    return [
      `### ${title}`,
      `- URL: ${url(`/talks/${talk.id}/`)}`,
      `- Tipo: ${type}`,
      `- Evento: ${event}`,
      `- Fecha: ${isoDay(date)}`,
      ...(description ? [`- Resumen: ${oneLine(description)}`] : []),
      ...(links ?? []).map((link) => `- ${link.title}: ${link.url}`),
    ].join('\n');
  });

  const postLines = posts.map((post) => {
    const { title, description, pubDate, tags } = post.data;
    const meta = [isoDay(pubDate), ...(tags ?? [])].join(', ');
    return `- [${title}](${url(`/blog/${post.id}/`)}) (${meta}): ${oneLine(description)}`;
  });

  // Sections without children (e.g. "Navegador") only group their h3 subsections.
  const usesBlocks = (myUses as UsesSection[]).flatMap((section) => {
    if (!section.children?.length) return [];
    const items = section.children.map((item) => {
      const description = item.description ? `: ${oneLine(item.description)}` : '';
      const specs = item.specs?.length ? ` (${item.specs.join('; ')})` : '';
      return `- ${item.title}${description}${specs}`;
    });
    const heading = section.type === 'h3' ? '####' : '###';
    return [`${heading} ${section.title}\n\n${items.join('\n')}`];
  });

  const content = `# ${SITE_NAME}: contenido completo

> Web personal y blog de ${SITE_OWNER.name} (${SITE_OWNER.alternateName}), con contenido en español sobre programación y desarrollo web. Versión extendida de ${url('/llms.txt')}.

## Autor

${SITE_OWNER.name} (${SITE_OWNER.alternateName}) es ${SITE_OWNER.jobTitle}. ${SITE_OWNER.description}

Temas: ${SITE_OWNER.knowsAbout.join(', ')}.

Perfiles públicos:

${profileLines.join('\n')}

Más información: ${url('/about/')}

## Charlas, entrevistas y cursos

${talkBlocks.join('\n\n')}

## Artículos

${postLines.join('\n')}

## Setup y herramientas

Equipo que utiliza el autor (${url('/uses/')}).

${usesBlocks.join('\n\n')}
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
