# Análisis GEO · baumannzone.dev

Fecha: 2026-11-17 · Alcance: código del repo + producción (`https://www.baumannzone.dev`), con foco en el post más reciente (`/blog/el-juego-del-unicornio/`).

## 1. Puntuación GEO: 78/100

Es una puntuación heurística de checklist, no una predicción de citas.

| Categoría | Peso | Nota | Comentario |
|---|---|---|---|
| Citabilidad | 25 | 15 | Las aperturas son narrativas; la respuesta directa llega tarde |
| Estructura | 20 | 16 | Buen uso de H2 (328 en 59 posts), pocas preguntas en los encabezados (50) y 2 posts sin H2 |
| Multimodal | 15 | 13 | Demos interactivas, imágenes, canal de YouTube |
| Autoridad y marca | 20 | 15 | Fechas visibles, autor, Person + sameAs; sin presencia en Wikipedia/Wikidata (no medida) |
| Acceso técnico | 20 | 19 | HTML estático (SSR), robots abierto, sitemap con lastmod |

## 2. Por plataforma (no medido)

No había herramientas de medición (DataForSEO, SE Ranking), así que esto es solo una valoración de lo preparado que está el sitio:

- **Google AI Overviews / AI Mode:** buena base técnica y de schema. Lo que más pesa aquí es posicionar en el top 10, como en el SEO clásico.
- **ChatGPT Search:** `OAI-SearchBot` tiene acceso. Falta presencia de entidad (Wikipedia/Wikidata), que ChatGPT cita mucho.
- **Perplexity:** `PerplexityBot` tiene acceso. La señal comunitaria (Reddit) está por verificar.

## 3. Acceso de crawlers de IA (`robots.txt` en producción, HTTP 200)

**Búsqueda / citabilidad:**

| Bot | Estado | Qué gobierna |
|---|---|---|
| Googlebot | Permitido (`*`) | Google Search, AI Overviews, AI Mode |
| OAI-SearchBot | Permitido | Citas en ChatGPT Search |
| Claude-SearchBot | Permitido | Citas en las búsquedas de Claude |
| PerplexityBot | Permitido | Perplexity |
| Applebot | Permitido (`*`) | Siri, Spotlight, Safari |

**Entrenamiento:**

| Bot | Estado | Qué gobierna |
|---|---|---|
| GPTBot | Permitido | Entrenamiento de OpenAI |
| ClaudeBot | Permitido | Entrenamiento de Anthropic |
| Google-Extended | Permitido | Entrenamiento y grounding de Gemini/Vertex (no afecta a Google Search) |
| Applebot-Extended | Permitido | Entrenamiento de Apple Intelligence |
| CCBot | Permitido | Common Crawl |

**Bajo demanda:** ChatGPT-User, Claude-User y Perplexity-User están permitidos.

No hace falta cambiar nada. Permitir el entrenamiento es una decisión de licencia, no de visibilidad.

## 4. llms.txt

Presente: `/llms.txt` (23 KB) y `/llms-full.txt` (41 KB), ambos con 200 y `text/plain`, generados desde el contenido, más `<link rel="describedby">` en el head. Está bien hecho. Google dice que no ayuda ni perjudica en Search, así que no le dediques más tiempo.

## 5. Menciones de marca

| Plataforma | Estado |
|---|---|
| YouTube | Canal RambitoJS, enlazado en `sameAs` ✅ |
| LinkedIn / GitHub / X / Bluesky / Threads / Instagram | En `sameAs` ✅ |
| Wikipedia / Wikidata | No verificado. Probablemente no existe |
| Reddit | No verificado |

Según el estudio de Ahrefs (2025-12-12), las menciones en YouTube son la señal que más se correlaciona con la visibilidad en IA. Ya tienes canal. Lo que más rinde es enlazar cada vídeo con su post y al revés.

## 6. Citabilidad por pasaje (post del unicornio)

- **Débil:** los primeros ~80 palabras (la zona que más se cita, según SE Ranking: ~44 % de las citas salen del primer 30 % de la página) hablan de que "CSS no es un lenguaje de programación" y no dicen cómo se hace el juego. La respuesta (`:hover`, `clip-path`, animaciones con retraso, `attr()`) solo aparece en la description.
- **Fuerte:** "Controles del juego" es un bloque autocontenido y claro.
- **Patrón general:** muchos posts arrancan con contexto personal antes de responder.

## 7. Renderizado en servidor

Astro estático: el contenido completo está en el HTML crudo (por ejemplo, "Antonio" aparece 3 veces sin ejecutar JS). El schema también va en el HTML. Las demos interactivas son extra; el texto no depende de ellas. ✅

## 8. Los 5 cambios con más impacto

1. **Abrir cada post con un "TL;DR" o una respuesta directa en las primeras 40–60 palabras.** Empieza por los posts de tipo how-to y por los que más tráfico tienen.
2. **Encabezados en forma de pregunta** donde encajen ("¿Cómo detecta CSS que has perdido?", "¿Se puede jugar en móvil?"). Hoy son 50 de 328.
3. **Dar estructura a los posts sin H2 o con muy pocos:** `como-detectar-el-elemento-con-el-foco-en-tiempo-real`, `top-sitios-web-2024`, `cursos-de-machine-learning-gratis`, `pure-css-cake`.
4. **Crear una entrada en Wikidata para Jorge Baumann** (speaker, charlas y canal documentados) y añadirla a `sameAs`. Es la señal de entidad más barata que te falta.
5. **Enlazar los vídeos de YouTube con los posts en ambas direcciones**, y añadir `VideoObject` en los posts que incrustan vídeo.

## 9. Schema

Lo que hay está bien: `BlogPosting` + `BreadcrumbList` + `Person` con `@id` compartido, `ProfilePage` en /about y `WebSite` en la home.

Mejoras:
- `BlogPosting`: añadir `isPartOf: { "@id": websiteId }` e `inLanguage` coherente (`es-ES` en los posts, `es` en el sitio; unifícalo).
- `BlogPosting.image`: usar `/opengraph.png` cuando falte `ogImage`.
- `Person`: añadir `worksFor` (si quieres hacerlo público) y Wikidata en `sameAs` cuando exista.
- `VideoObject` en los posts con vídeo incrustado.
- `articleSection: 'Technology'` es genérico en todos los posts; usa el primer tag.

## 10. Reescrituras concretas

**Unicornio, primer párrafo.** Ahora mismo abre con "CSS no es un lenguaje de programación como lo es, por ejemplo, JavaScript…". Propuesta:

> Sí, se puede hacer un juego solo con HTML y CSS, sin JavaScript. El juego del unicornio usa `:hover` para detectar el ratón, `clip-path` para dibujar las paredes de la mazmorra, animaciones con retraso para mover el escenario y `attr()` para mostrar textos. Debajo puedes jugarlo y te explico cada pieza.

(Sin enlaces externos en la apertura, como prefieres.) Después puede seguir el párrafo actual sobre experimentar con CSS.

**Plantilla para posts how-to:** respuesta en 1–2 frases, luego un bloque de código mínimo y después el contexto.
