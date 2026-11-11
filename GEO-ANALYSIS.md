# Análisis GEO: baumannzone.dev

Auditado el 2026-11-11 contra la web en producción (`https://www.baumannzone.dev`) y este repositorio.

## Resumen en claro

**No hay ningún problema grave.** La web no tiene nada roto ni nada que impida a ChatGPT, Perplexity, Claude o Google leerla y citarla. La parte técnica está mejor que en la mayoría de blogs personales.

Lo que hay son mejoras, de dos tipos:

1. **Un fallo pequeño en el código**, que se arregla en una línea: los datos estructurados de cada artículo dicen que el cuerpo del artículo es su descripción de una frase.
2. **Mejoras de contenido en artículos antiguos**: muchos empiezan con una anécdota en vez de con la respuesta, y 23 de 57 no enlazan ninguna fuente externa. Eso los hace menos "citables" para una IA.

Y una limitación del propio análisis: **no he medido si las IA te citan de verdad**. Solo he comprobado si la web está preparada para ello.

Nota de contexto: según Google, optimizar para la búsqueda con IA generativa sigue siendo SEO. Todo lo que sigue son fundamentos de SEO aplicados a superficies de IA, no una disciplina aparte.

## 1. Puntuación GEO: 71/100

Es una puntuación heurística de lista de comprobación, no una predicción de cuántas veces te van a citar. Los pesos son un criterio propio de la herramienta para priorizar.

| Categoría | Peso | Nota | Motivo |
|---|---|---|---|
| Citabilidad | 25% | 62 | Los artículos recientes dan la respuesta al principio y citan fuentes; buena parte del archivo antiguo no |
| Estructura legible | 20% | 75 | Jerarquía H1 > H2 > H3 limpia y párrafos cortos; pocas tablas y 3 artículos sin ningún H2 |
| Contenido multimodal | 15% | 60 | Las demos en vivo y las imágenes suman; no hay vídeo incrustado pese a tener canal de YouTube |
| Autoridad y marca | 20% | 70 | Buen marcado de entidad y 28 charlas documentadas; sin firma visible en los artículos; presencia externa sin medir |
| Accesibilidad técnica | 20% | 88 | HTML estático y todos los rastreadores de IA permitidos; algunos defectos de schema |

## 2. Por plataforma

No se ha medido ninguna plataforma con una herramienta de seguimiento (DataForSEO, SE Ranking, Profound). Son valoraciones cualitativas, no notas.

| Plataforma | Preparación | Notas |
|---|---|---|
| Google AI Overviews | Buena, sin medir | Se nutre del índice de Googlebot, que está permitido. Suele citar páginas que ya posicionan, así que la palanca es el posicionamiento clásico |
| Google AI Mode | Buena, sin medir | Cita un abanico más amplio, donde pesan la frescura y la claridad de la entidad. Diez artículos en 2026 y una entidad `Person` coherente ayudan |
| ChatGPT Search | Buena, sin medir | `OAI-SearchBot` permitido y responde 200. El contenido está en el HTML, sin JavaScript |
| Perplexity | Buena, sin medir | `PerplexityBot` permitido y responde 200 |
| Búsqueda de Claude | Buena, sin medir | `Claude-SearchBot` permitido y responde 200 |
| Bing Copilot | Desconocida | Depende del índice de Bing. No hay IndexNow en el build ni etiqueta de verificación de Bing Webmaster en el HTML |

## 3. Acceso de los rastreadores de IA

`robots.txt` lo permite todo (`User-agent: *` / `Allow: /`) y además nombra explícitamente a los agentes de IA. También pedí `/blog/` con el user-agent de cada bot y la respuesta fue idéntica en todos los casos (200, 113.029 bytes), así que Vercel no bloquea por user-agent. Esa prueba solo suplanta la cadena del user-agent; no descarta reglas por IP, aunque `vercel.json` no configura ninguna.

Citabilidad en buscadores (deciden si la web puede ser citada):

| Bot | Qué gobierna | robots.txt | Petición real |
|---|---|---|---|
| Googlebot | Google Search, AI Overviews, AI Mode | Permitido (comodín) | Sin probar |
| OAI-SearchBot | Citas en ChatGPT Search | Permitido (nombrado) | 200 |
| Claude-SearchBot | Citas en la búsqueda de Claude | Permitido (nombrado) | 200 |
| PerplexityBot | Citas en Perplexity | Permitido (nombrado) | 200 |
| Applebot | Siri, Spotlight, Safari | Permitido (comodín) | Sin probar |

Acceso para entrenamiento (decisión de licencia, sin efecto en la visibilidad en búsquedas):

| Bot | Qué gobierna | robots.txt | Petición real |
|---|---|---|---|
| GPTBot | Entrenamiento de modelos de OpenAI | Permitido (nombrado) | 200 |
| ClaudeBot | Entrenamiento de modelos de Anthropic | Permitido (nombrado) | 200 |
| Google-Extended | Entrenamiento y grounding de Gemini y Vertex | Permitido (nombrado) | No aplica (es un token de control, no rastrea) |
| Applebot-Extended | Entrenamiento de Apple Intelligence | Permitido (nombrado) | No aplica (token de control) |
| CCBot | Corpus de Common Crawl | Permitido (nombrado) | 200 |

Los agentes que actúan a petición de un usuario (`ChatGPT-User`, `Claude-User`, `Perplexity-User`) también están nombrados y permitidos.

Aquí no hay nada que arreglar. Permitir los bots de entrenamiento es decisión tuya; no afecta a las citas.

## 4. Estado de llms.txt

Existe y está bien hecho.

- `/llms.txt`: 200, `text/plain`, 23 KB, generado en el build a partir de las colecciones de contenido (`src/pages/llms.txt.ts`), así que no puede quedarse desactualizado.
- `/llms-full.txt`: 200, 40 KB, versión extendida con perfil, charlas, artículos y setup.
- Sigue el formato propuesto: H1, resumen en cita, listas de enlaces por secciones con descripción y una sección `## Optional`.

Mantenlo, pero no esperes nada de él en Google. La guía de optimización para IA de Google dice que `llms.txt` no se usa en Search y que ni ayuda ni perjudica. Ningún proveedor grande de IA ha confirmado que lo use. No cuenta en la puntuación.

Relacionado: no hay declaración de licencia RSL (escribiste un artículo sobre RSL, pero la web no lo implementa). Es opcional y solo merece la pena si quieres términos de licencia legibles por máquinas.

## 5. Menciones de marca

Las señales de entidad dentro de la web son buenas. La presencia fuera de la web no se ha medido.

Verificado dentro de la web:

- Una única entidad `Person` con `@id` estable (`https://www.baumannzone.dev/#person`), reutilizada por `WebSite`, `ProfilePage` y cada `BlogPosting`.
- Siete perfiles en `sameAs`: GitHub, LinkedIn, Instagram, Threads, Bluesky, X y YouTube. Comprobé GitHub, Bluesky, YouTube y Threads y los cuatro responden. LinkedIn, Instagram y X bloquean las comprobaciones automáticas, así que esos tres quedan sin verificar.
- 28 páginas de charlas con schema `Event` (Madrid JS, Google I/O Extended, Platzi y otras). Es la mejor prueba de experiencia que tiene la web.

Sin medir: Wikipedia, Wikidata, Reddit, volumen de menciones en YouTube y citas de terceros. Comprobarlo implica enviar tu nombre y tu usuario a buscadores externos, y no lo he hecho sin tu permiso.

Dos incoherencias que debilitan la entidad:

- El cargo cambia según dónde se mire. El schema `Person` y `llms.txt` dicen "Senior Full Stack Developer"; el H1 de `/about/` dice "Senior Software Engineer".
- El canal de YouTube se llama `RambitoJS`, el único perfil que no usa el nombre `baumannzone`. Si es intencionado no pasa nada, pero es el único perfil que un modelo no puede relacionar contigo por el nombre, así que todo depende del enlace `sameAs`.

## 6. Citabilidad por pasajes

El archivo se divide claramente en dos.

Artículos recientes, fuertes. El de `/blog/http-http-http-es-una-url-valida/` es el modelo a seguir: la afirmación está en las dos primeras frases, dos tablas desglosan la URL componente a componente, cada sección responde una pregunta y enlaza a fuentes primarias. `la-ia-y-el-empleo-de-los-ingenieros-de-software-que-dicen-los-datos` (1.680 palabras, 5 fuentes externas) va en la misma línea.

Archivo antiguo, más flojo. Sobre los 57 artículos de `src/content/blog/`:

| Señal | Artículos | Porcentaje |
|---|---|---|
| Sin ningún enlace a una fuente externa | 23 | 40% |
| Menos de 300 palabras (sin contar código) | 8 | 14% |
| Con alguna tabla | 4 | 7% |
| Con al menos un encabezado en forma de pregunta | 26 | 46% |
| Con `updatedDate` | 14 | 25% |
| Sin ningún H2 | 3 | 5% |

La mediana es de 509 palabras, correcta para artículos prácticos y concretos.

El patrón que más perjudica es la apertura con anécdota. Ejemplo, `mui-mainchannel-para-opacidad-en-css`: empieza con "Estaba trabajando en un proyecto de React con Material UI..." y la definición de `mainChannel` llega después. Un modelo que extrae un pasaje quiere primero la definición y luego la historia.

La cifra de "bloques de respuesta de 130 a 170 palabras" que circula es una heurística de terceros, no un requisito de Google. Google dice expresamente que no hace falta trocear el contenido para la IA. La idea es solo que la respuesta se encuentre sin tener que leer la anécdota.

## 7. Renderizado en servidor

Correcto. Astro genera la web de forma estática y la sirve como HTML completo.

- El cuerpo de los artículos, los encabezados, las fechas y el JSON-LD están en la respuesta inicial. No hace falta JavaScript para leer un artículo.
- Los rastreadores que no ejecutan JavaScript (GPTBot y PerplexityBot en pruebas públicas) ven todo el contenido.
- Solo dependen de JavaScript piezas secundarias: la tarjeta de artículo "Random" de la portada, los comentarios de Utterances y el salvapantallas.
- El dominio sin `www` redirige a `www` con un 308; canonicals, sitemap y `robots.txt` coinciden en `www`.
- Sitemap: 113 URL, 106 con `lastmod` real.

Un borrador publicado por error: `src/content/blog/como-dividir-texto.md` tiene `published: false`, pero `/blog/como-dividir-texto/` responde 200 en producción y aparece en el sitemap. `src/pages/blog/[slug].astro` genera una página por cada entrada de la colección sin filtrar por `published`, y el filtro del sitemap tampoco lo excluye. El índice del blog, el RSS y `llms.txt` sí lo filtran, así que no está enlazado, pero cualquier rastreador que lea el sitemap lo encuentra.

Una limpieza pendiente: la portada envía unos 7 KB de HTML comentado (el 10% del documento), de dos bloques muertos en `src/components/HomePage/RandomSetupItem.astro` (líneas 89 a 155 y 157 a 219). Incluye marcadores literales `{randomItem.title}`. No afecta a lo que se ve, pero es ruido en el HTML que descargan los rastreadores.

## 8. Los 5 cambios con más impacto

Ordenados por impacto esperado frente a esfuerzo.

### 1. Corregir `articleBody` en el schema BlogPosting (rápido)

**Hecho el 2026-11-11:** se ha quitado la propiedad. Pendiente de desplegar.

`src/components/BlogJsonLd.astro` definía `articleBody: description`, así que cada artículo declaraba su descripción de una línea como si fuera el texto completo. Era un marcado inexacto en todos los artículos.

- Se apoya en: los datos estructurados deben coincidir con el contenido visible.
- Dependencias: ninguna. Hazlo primero porque es una línea.
- Cómo sabrías que ha fallado: tras desplegar, la Prueba de resultados enriquecidos o el Schema Markup Validator siguen mostrando `articleBody` igual a la descripción.
- Indicador temprano: la salida del validador para cualquier URL de artículo.

### 2. Poner la respuesta primero en los artículos que abren con anécdota (medio, continuo)

Añade arriba una definición o conclusión de una o dos frases y cuenta la historia después. Empieza por los artículos que ya tienen impresiones en buscadores.

- Se apoya en: los pasajes se extraen mucho más del principio de la página que del final (SE Ranking indica que alrededor del 44% de las citas de IA salen del primer 30% de la página; cifra de terceros).
- Depende de: datos de Search Console para elegir qué artículos merecen la edición.
- Cómo sabrías que ha fallado: pasadas 6 a 8 semanas, los artículos editados no cambian en impresiones ni en visitas referidas por IA frente a los no editados.
- Indicador temprano: impresiones en Search Console por URL editada; referidos de `chatgpt.com`, `perplexity.ai` y `claude.ai` en la analítica.

### 3. Añadir enlaces a fuentes primarias en los 23 artículos que no tienen (medio)

Enlaza MDN, la especificación correspondiente o la documentación oficial en cada afirmación. Tus artículos recientes ya lo hacen.

- Se apoya en: las afirmaciones con fuente son más fiables para los lectores y para los sistemas que contrastan fuentes.
- Depende de: nada. Hazlo en la misma pasada que el cambio 2 y actualiza `updatedDate`.
- Cómo sabrías que ha fallado: la misma comparación que en el cambio 2.
- Indicador temprano: número de artículos sin enlaces externos, de 23 hacia 0.

### 4. Añadir firma de autor visible y migas de pan a los artículos (rápido)

La cabecera del artículo muestra fechas, título y etiquetas, pero no el autor. El autor solo aparece en un `<meta itemprop>` y en el JSON-LD. Añade "Por Jorge Baumann" con enlace a `/about/` y el `BreadcrumbList` que ya tienen `/about/`, `/blog/`, las páginas de etiquetas y las de charlas (`breadcrumbSchema` en `src/utils/schema.ts` ya está listo para reutilizar).

- Se apoya en: quién ha escrito esto debería poder saberse mirando la página, no solo el marcado.
- Depende de: nada.
- Cómo sabrías que ha fallado: la firma o las migas no aparecen en el HTML renderizado de un artículo.
- Indicador temprano: las migas de pan aparecen en los informes de mejoras de Search Console.

### 5. Medir antes de seguir optimizando (rápido de empezar)

Nada de este informe es visibilidad medida. Comprueba que el control "Search generative AI" de Search Console está en su valor por defecto (incluir), mira el tráfico referido por IA en tu analítica y decide si quieres la comprobación de marca externa de la sección 5.

- Se apoya en: sin una línea base no se pueden evaluar los cambios 2 y 3.
- Desbloquea: los cambios 2 y 3.
- Cómo sabrías que ha fallado: dentro de un mes sigues sin poder decir qué artículos reciben visitas referidas por IA.
- Indicador temprano: una lista guardada con los 10 artículos con más impresiones y con más referidos de IA.

## 9. Recomendaciones de schema

Lo que hay está bien: `Person`, `WebSite`, `WebPage`, `ProfilePage`, `BlogPosting`, `CollectionPage`, `Event` y `BreadcrumbList`, todo JSON-LD válido con un grafo de `@id` compartido.

Defectos y huecos, en `src/components/BlogJsonLd.astro` salvo que se indique otra cosa:

| Problema | Solución |
|---|---|
| `articleBody` contiene la descripción | Quitarlo o pasar el texto real |
| `inLanguage` es `es-ES` en los artículos y `es` en el resto | Elegir uno (`es` coincide con `<html lang="es">`) |
| `articleSection` es siempre `Technology` | Usar la primera etiqueta o quitarlo |
| Los artículos no tienen `BreadcrumbList` | Añadir Inicio > Blog > artículo |
| El `Person` de `/about/` no tiene `image`; el de la portada sí | Mover `image` a `personSchema()` en `src/utils/schema.ts` |
| `/talks/`, `/books/` y `/uses/` no tienen JSON-LD | Añadir `CollectionPage` + `BreadcrumbList`, como ya hace `/blog/` |
| Cada artículo se describe dos veces, con microdatos (`itemtype='https://schema.org/Article'` en `<main>`) y con JSON-LD, con datos algo distintos y `author` como texto plano | Dejar el JSON-LD como única fuente y quitar los atributos de microdatos |
| `<meta property='article:published_time'>` se renderiza dentro de `<body>` | Moverlo al `<head>` mediante `BaseHead`; ahí donde está, los lectores de Open Graph lo ignoran |

No recomendado: `HowTo` (obsoleto) ni `FAQPage` buscando beneficio en Google (los resultados enriquecidos se retiraron en mayo de 2026).

## 10. Sugerencias de reescritura

Artículos concretos, con la edición mínima que ayudaría:

| Artículo | Problema | Edición sugerida |
|---|---|---|
| `mui-mainchannel-para-opacidad-en-css` | Abre con una anécdota | La primera frase define qué es `mainChannel` y qué problema resuelve; la anécdota pasa al segundo párrafo |
| `doble-signo-de-interrogacion-en-javascript` | 468 palabras, un solo H2, sin fuentes | Abrir con una definición de `??` en una línea, añadir una tabla que compare `??` con el operador OR lógico para `0`, `''`, `false`, `null` y `undefined`, y enlazar MDN |
| `doble-igual-vs-triple-igual-en-javascript` | Es una comparación sin tabla y sin fuentes | Añadir una tabla con los resultados de la coerción; enlazar la especificación de ECMAScript o MDN |
| `nan-en-javascript-guia-rapida` | Sin fuentes | Enlazar MDN para `Number.isNaN` e `isNaN`; añadir una tabla pequeña que los compare |
| `como-obtener-la-url-actual-con-javascript-y-sacarle-provecho` | 234 palabras, sin fuentes | Añadir una tabla de propiedades de `location` con un valor de ejemplo cada una |
| `como-detectar-el-elemento-con-el-foco-en-tiempo-real` | 243 palabras, sin encabezados | Añadir una frase de definición y dos o tres H2 |
| `top-sitios-web-2024` | Título con fecha, sin encabezados | Actualizarlo al año en curso o dejarlo como pieza de archivo; no merece esfuerzo |
| `pure-css-cake` (103 palabras), `un-nombre-de-gmail-puede-estar-ocupado-aunque-el-correo-rebote` (125 palabras) | Muy cortos | Están bien como notas o escaparate. Déjalos salvo que tengan impresiones en buscadores |

Regla general para los artículos nuevos: seguir haciendo lo que hace el artículo de `http://`.

## Lo que no he comprobado

- Datos reales de citas o menciones en ninguna plataforma de IA (no hay herramienta de seguimiento conectada).
- Presencia de marca fuera de la web: Wikipedia, Wikidata, Reddit, menciones en YouTube.
- Configuración de Search Console, estado de indexación y posiciones.
- Core Web Vitals y cobertura en el índice de Bing.
- Si los tres enlaces `sameAs` sin verificar (LinkedIn, Instagram, X) funcionan.
