import type { APIRoute } from 'astro';
import { SITE_NAME, SITE_OWNER } from '../consts';
import { getLlmsContent, isoDay, oneLine } from '../utils/llms';

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const { posts, talks } = await getLlmsContent();

  const postLines = posts.map(
    (post) =>
      `- [${post.data.title}](${url(`/blog/${post.id}/`)}): ${oneLine(post.data.description)}`,
  );
  const talkLines = talks.map(
    (talk) =>
      `- [${talk.data.title}](${url(`/talks/${talk.id}/`)}): ${talk.data.type} en ${talk.data.event} (${isoDay(talk.data.date)}).`,
  );

  const content = `# ${SITE_NAME}

> Web personal y blog de ${SITE_OWNER.name} (${SITE_OWNER.alternateName}), con contenido en español sobre programación y desarrollo web.

${SITE_OWNER.name} es ${SITE_OWNER.jobTitle}. ${SITE_OWNER.description}

El blog incluye artículos, tutoriales y demos sobre JavaScript, HTML, CSS, testing y otras herramientas de desarrollo. La web también reúne charlas, lecturas y el equipo que utiliza su autor.

## Secciones principales

- [Inicio](${url('/')}): Presentación del autor y artículos recientes.
- [Sobre mí](${url('/about/')}): Perfil y trayectoria de Jorge Baumann.
- [Blog](${url('/blog/')}): Artículos y tutoriales de programación y desarrollo web.
- [Temas](${url('/tags/')}): Contenido agrupado por etiquetas.
- [Charlas](${url('/talks/')}): Participaciones en eventos y materiales de las charlas.
- [Libros](${url('/books/')}): Lecturas sobre programación, desarrollo personal y novelas, incluidas lecturas pendientes.
- [Setup](${url('/uses/')}): Equipo, herramientas y accesorios que utiliza el autor.

## Perfiles públicos

- [GitHub](${SITE_OWNER.profiles.github}): Repositorios y proyectos.
- [LinkedIn](${SITE_OWNER.profiles.linkedin}): Perfil profesional.
- [X](${SITE_OWNER.profiles.x}): Perfil de @baumannzone.
- [YouTube](${SITE_OWNER.profiles.youtube}): Canal RambitoJS.

## Artículos

${postLines.join('\n')}

## Charlas, entrevistas y cursos

${talkLines.join('\n')}

## Optional

- [Contenido completo](${url('/llms-full.txt')}): Versión extendida de este índice con perfil, charlas, artículos y setup.
- [RSS](${url('/rss.xml')}): Feed de artículos publicados.
- [Mapa del sitio](${url('/sitemap-index.xml')}): Índice de las páginas del sitio.
- [Patrocinio](${url('/patrocinio/')}): Información sobre colaboraciones y apoyo al contenido.
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
