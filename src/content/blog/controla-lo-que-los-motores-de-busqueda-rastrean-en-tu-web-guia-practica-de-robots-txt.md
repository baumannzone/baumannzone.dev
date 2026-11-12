---
title: "Controla lo que los motores de búsqueda rastrean en tu web: guía práctica de robots.txt"
description: "Descubre cómo utilizar el archivo robots.txt para gestionar qué partes de tu sitio web rastrean los motores de búsqueda y los bots de IA, y por qué no sirve para desindexar ni para proteger páginas sensibles."
pubDate: 2024-10-22
updatedDate: 2026-11-12
type: blog
author: Jorge Baumann
tags:
  - SEO
  - Web
relatedPosts:
  - "rsl-el-nuevo-estandar-que-quiere-que-la-ia-pague-por-tu-contenido"
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Controla%20lo%20que%20los%20motores%20de%20b%C3%BAsqueda%20rastrean%20en%20tu%20web%3A%20gu%C3%ADa%20pr%C3%A1ctica%20de%20robots.txt&tags=SEO,Web"
---

El `robots.txt` es un archivo de texto que se coloca en la raíz de un sitio web para decirles a los rastreadores (los de Google, Bing o los de las IA) qué URLs pueden visitar y cuáles no. Controla el rastreo, no la indexación: una página bloqueada en `robots.txt` puede seguir apareciendo en Google si otras webs la enlazan. Para sacarla de los resultados hace falta `noindex`.

Es ese archivo que quizá no terminas de entender pero que puede hacer tu sitio más visible (o completamente invisible). Hoy vas a aprender a usarlo _like a boss_.

## ¿Qué es el archivo robots.txt?

El archivo `robots.txt` es un archivo de texto que se encuentra en la raíz de tu sitio web y que le dice a los motores de búsqueda qué páginas pueden rastrear y cuáles no.
Es la implementación del Protocolo de Exclusión de Robots, que existe desde 1994 y es un estándar oficial (RFC 9309) desde 2022.

Por ejemplo, si tienes una sección interna que no quieres que los bots recorran una y otra vez, como un buscador interno o un panel de administración, puedes bloquearla con el `robots.txt`.

Así es como se ve un archivo `robots.txt` básico:

```plaintext
User-agent: *
Disallow: /private/
```

## Rastrear no es lo mismo que indexar

Es la confusión más habitual con este archivo, así que conviene dejarla clara antes de seguir:

- **Rastrear** es que un bot descargue la página.
- **Indexar** es que el buscador la guarde y la muestre en sus resultados.

El `robots.txt` solo controla lo primero. Si bloqueas una URL pero hay enlaces hacia ella desde otros sitios, Google puede indexarla igualmente: aparecerá en los resultados solo con la URL, sin descripción, porque no ha podido leer el contenido.

| Lo que quieres conseguir                        | Herramienta correcta                                                |
| :---------------------------------------------- | :------------------------------------------------------------------ |
| Que los bots no gasten tiempo en ciertas URLs   | `Disallow` en `robots.txt`                                          |
| Que una página no salga en los resultados       | `<meta name="robots" content="noindex">` o cabecera `X-Robots-Tag`  |
| Que nadie sin permiso vea el contenido          | Autenticación (usuario y contraseña)                                |

Y ojo con combinar las dos primeras: para que un buscador vea el `noindex` tiene que poder rastrear la página. Si además la bloqueas en `robots.txt`, nunca llegará a leer esa etiqueta.

## ¿Por qué es importante el archivo robots.txt?

Aunque el fichero `robots.txt` no es obligatorio, es una buena práctica tenerlo para gestionar cómo recorren tu sitio los motores de búsqueda. Un archivo mal configurado puede hacer que dejen de rastrear páginas importantes o, al revés, que pierdan el tiempo en páginas que no aportan nada, como secciones de administración o contenido duplicado.

Pero no te equivoques: el archivo **robots.txt no es una medida de seguridad**. No bloquea el acceso de los usuarios a tus páginas, simplemente les indica a los bots qué contenido pueden rastrear. Si realmente quieres proteger contenido privado o sensible, deberías implementar otras medidas de seguridad, como la autenticación o configuraciones de permisos.

## ¿Cómo funciona el archivo robots.txt?

El archivo `robots.txt` es un simple archivo de texto que se ubica en la raíz de tu sitio web. A través de directivas específicas, les da instrucciones a los bots sobre qué hacer en tu sitio.

Cuando un rastreador llega a tu sitio, busca este archivo en la raíz y lo lee para saber qué páginas puede rastrear y cuáles debe evitar. Estas son las directivas que puedes usar:

| Directiva     | Qué hace                                                    | Soporte                                              |
| :------------ | :---------------------------------------------------------- | :--------------------------------------------------- |
| `User-agent`  | Indica a qué bot se aplican las reglas que vienen debajo    | Todos                                                |
| `Disallow`    | Prohíbe rastrear las URLs que empiezan por esa ruta         | Todos                                                |
| `Allow`       | Permite una ruta dentro de otra que está prohibida          | Todos los que siguen el estándar                     |
| `Sitemap`     | Indica la URL completa de tu sitemap                        | Google, Bing y la mayoría de buscadores              |
| `Crawl-delay` | Pide esperar unos segundos entre peticiones                 | No es estándar: Bing la respeta, Google la ignora    |

Hay tres reglas que explican casi todos los comportamientos raros:

1. **Cada bot sigue un solo grupo**: el que tenga el `User-agent` más específico que coincida con él. Si hay un grupo para `Googlebot`, Googlebot ignora por completo el grupo de `*`.
2. **Dentro de un grupo gana la regla más larga**, no la que aparece primero. Por eso `Allow: /wp-admin/admin-ajax.php` se impone a `Disallow: /wp-admin/`.
3. **Las rutas distinguen mayúsculas de minúsculas**: `/Privado/` y `/privado/` son URLs distintas.

En las rutas puedes usar dos comodines: `*` equivale a cualquier secuencia de caracteres y `$` marca el final de la URL.

## Hacks picantes con robots.txt

Aquí te dejo algunos hacks que puedes hacer con el `robots.txt`:

### Dejar tu web abierta al 100% (porque estás orgulloso de todo tu contenido)

```plaintext
User-agent: *
Disallow:
```

### Bloquear una carpeta entera (porque ahí guardas tus secretos)

```plaintext
User-agent: *
Disallow: /earnings/
```

### Bloquear un archivo específico (porque mejor que eso no lo vea nadie)

```plaintext
User-agent: *
Disallow: /top-secret.pdf
```

Bromas aparte: recuerda que el `robots.txt` es público. Cualquiera puede abrirlo y ver exactamente qué rutas has listado, así que no es el sitio para esconder nada.

## ¿Cómo crear un archivo robots.txt?

Crear un archivo `robots.txt` es muy sencillo. Solo necesitas cumplir con las siguientes reglas:

- **Texto plano**: el archivo debe ser un archivo de texto plano sin formato especial.
- **Codificación**: debe estar codificado en `UTF-8`.
- **Ubicación**: debe estar en la raíz de tu sitio web (por ejemplo, `https://tusitio.com/robots.txt`). Cada subdominio necesita el suyo: el de `tusitio.com` no vale para `blog.tusitio.com`.
- **Nombre**: el nombre del archivo debe ser exactamente `robots.txt`, todo en minúsculas.
- **Tamaño**: Google solo lee los primeros 500 KiB del archivo e ignora el resto.

## Ejemplos prácticos del archivo robots.txt

Ahora que ya te has reído, vamos a ver algunos ejemplos prácticos de cómo usar el `robots.txt` en tu sitio web:

### Permitir a todos los robots acceder a todo el sitio

Esto ya lo hemos visto antes. Cualquier robot (el asterisco `*` significa "todos") puede acceder a todas las páginas de tu sitio.

```plaintext
User-agent: *
Disallow:
```

### Bloquear a todos los robots de acceder a todo el sitio

Este es el caso contrario. A todos los robots se les prohíbe acceder a cualquier página de tu sitio.

```plaintext
User-agent: *
Disallow: /
```

### Bloquear un directorio específico

En este caso, bloqueamos el acceso a un directorio llamado `salaries-2024` para todos los robots.

```plaintext
User-agent: *
Disallow: /salaries-2024/
```

### Bloquear un archivo específico

Aquí bloqueamos el acceso a un archivo llamado `secret.pdf` para todos los robots.

```plaintext
User-agent: *
Disallow: /secret.pdf
```

### Permitir solo a un robot específico y bloquear a los demás

Bloqueamos el acceso a todos los robots y permitimos solo a un robot llamado `Googlebot` acceder a todas las páginas.

```plaintext
User-agent: *
Disallow: /

User-agent: Googlebot
Disallow:
```

Funciona por la primera regla de antes: Googlebot encuentra un grupo con su nombre y no mira el de `*`.

### Bloquear parámetros específicos de URL

En este caso, bloqueamos el acceso a todas las páginas que contengan el parámetro `sort=desc`.

```plaintext
User-agent: *
Disallow: /*?sort=desc
```

### Permitir rastrear un directorio específico y bloquear todo lo demás

Aquí permitimos a todos los robots acceder a un directorio llamado `public` y bloqueamos el acceso a cualquier otra página. Las dos reglas van en el mismo grupo, y gana `Allow` porque su ruta es más larga.

```plaintext
User-agent: *
Disallow: /
Allow: /public/
```

### Bloquear imágenes de un directorio específico

En este caso, bloqueamos el acceso a todas las imágenes JPG de un directorio llamado `employees`.

```plaintext
User-agent: *
Disallow: /employees/*.jpg
```

### Bloquear el acceso a archivos CSS y JS

Bloquea el acceso a todos los archivos CSS y JS de tu sitio (fíjate en el uso de `$` para indicar el final de la URL).

```plaintext
User-agent: *
Disallow: /*.js$
Disallow: /*.css$
```

Sirve como ejemplo de sintaxis, pero no lo hagas en una web real: Google necesita el CSS y el JavaScript para renderizar la página igual que la ve un usuario. Si se los bloqueas, puede interpretar mal el contenido.

### Bloquear el acceso a todos los archivos excepto a los PDF

Bloquea el acceso a todos los archivos de tu sitio, excepto a los archivos PDF.

```plaintext
User-agent: *
Disallow: /*
Allow: /*.pdf$
```

### Indicar dónde está el sitemap

La directiva `Sitemap` va fuera de los grupos, lleva la URL completa y puedes poner varias.

```plaintext
User-agent: *
Disallow:

Sitemap: https://tusitio.com/sitemap.xml
```

## Configuración de robots.txt según el proyecto

Estos son ejemplos de la configuración de `robots.txt` que suelen llevar algunos de los CMS más populares.

### WordPress

WordPress genera un `robots.txt` virtual por defecto, sin que exista el archivo en el servidor. Además de estas reglas, añade la línea `Sitemap` con la URL de su sitemap.

```plaintext
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
```

### Magento

```plaintext
User-agent: *
Disallow: /admin/
Disallow: /downloader/
Disallow: /includes/
Disallow: /pkginfo/
Disallow: /var/
```

### Wix

```plaintext
User-agent: *
Disallow: /_api/
Disallow: /files/
Disallow: /site-assets/
Disallow: /_partials/
```

¿Conoces algún otro CMS? ¡Déjame un comentario y lo añadiré a la lista!

## Bloquear bots específicos

Si te interesa bloquear el acceso a ciertos bots específicos, puedes hacerlo utilizando directivas `Disallow` para cada uno de ellos.

### Los bots de inteligencia artificial no son todos iguales

Antes de bloquear a **ChatGPT** y compañía conviene saber que cada empresa usa varios bots, y que cada uno hace una cosa distinta:

| Empresa    | Entrenar modelos         | Buscador de la IA  | Visitas a petición de un usuario |
| :--------- | :----------------------- | :----------------- | :------------------------------- |
| OpenAI     | `GPTBot`                 | `OAI-SearchBot`    | `ChatGPT-User`                   |
| Anthropic  | `ClaudeBot`              | `Claude-SearchBot` | `Claude-User`                    |
| Perplexity | (no tiene)               | `PerplexityBot`    | `Perplexity-User`                |
| Google     | `Google-Extended`        | `Googlebot`        |                                  |
| Apple      | `Applebot-Extended`      | `Applebot`         |                                  |
| Meta       | `meta-externalagent`     |                    |                                  |
| Common Crawl | `CCBot`                |                    |                                  |

La diferencia importa. Si bloqueas los bots de la primera columna, tu contenido deja de usarse para entrenar modelos. Si bloqueas los de la segunda, dejas de aparecer como fuente en las respuestas de ChatGPT, Claude o Perplexity, que es justo lo contrario de lo que suele querer quien tiene un blog.

Tres detalles que no son evidentes:

- `Google-Extended` y `Applebot-Extended` no son rastreadores. Son solo nombres que se usan en el `robots.txt` para decir "no uses esto para entrenar"; el rastreo lo siguen haciendo `Googlebot` y `Applebot`.
- Bloquear `Google-Extended` no te saca de la Búsqueda de Google ni de sus resúmenes generados con IA, que dependen de `Googlebot`.
- Los bots de la tercera columna actúan cuando una persona pide algo concreto. OpenAI avisa de que a `ChatGPT-User` pueden no aplicársele las reglas de `robots.txt`, y Perplexity dice que `Perplexity-User` generalmente las ignora.

### Bloquear solo el entrenamiento

Esta configuración impide que tu contenido se use para entrenar modelos, pero te mantiene visible en los buscadores con IA:

```plaintext
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: meta-externalagent
User-agent: CCBot
User-agent: Bytespider
Disallow: /
```

Puedes poner varias líneas `User-agent` seguidas para que compartan las mismas reglas, sin repetir el `Disallow` en cada una.

### Bloquearlo todo

Y si no quieres saber nada de ninguno, añade también los de búsqueda y los que actúan a petición del usuario:

```plaintext
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: meta-externalagent
User-agent: CCBot
User-agent: Bytespider
User-agent: Amazonbot
User-agent: Diffbot
User-agent: ImagesiftBot
User-agent: Omgilibot
User-agent: YouBot
Disallow: /
```

Estos son solo algunos de los bots más conocidos de IA que puedes bloquear si no quieres que rastreen tu sitio. La lista cambia a menudo: aparecen bots nuevos y otros se retiran (`anthropic-ai` y `Claude-Web`, por ejemplo, ya no aparecen en la documentación de Anthropic). Lo más fiable es consultar la documentación de cada empresa.

## Limitaciones y recomendaciones

El archivo **robots.txt** te ayuda a controlar qué se rastrea en tu sitio web, pero **no es una barrera de seguridad**. Es fundamental entender bien sus limitaciones para evitar errores graves. A continuación, te dejo algunas consideraciones importantes:

- **Visibilidad pública:** El archivo **robots.txt** está disponible para cualquiera que acceda a él, por lo que todo lo que intentes ocultar puede ser descubierto con facilidad.
- **No bloquea el acceso humano:** Cualquier persona que tenga el enlace directo a una página o recurso puede accederlo, incluso si está bloqueado para los bots.
- **Es voluntario:** El estándar no obliga a nadie. Los bots con intenciones dudosas, como los spambots o scrapers, generalmente no respetan las reglas de **robots.txt**.
- **Implementaciones incorrectas:** Incluso los bots bien intencionados podrían tener errores que les hagan pasar por alto tus reglas.
- **Enlaces desde otros sitios:** Si otras webs enlazan a tus páginas "ocultas", los motores de búsqueda pueden indexarlas aunque estén bloqueadas en **robots.txt**.
- **Cachés y versiones anteriores:** El contenido previamente indexado puede seguir apareciendo en cachés de los motores de búsqueda aunque lo hayas bloqueado más tarde.

## Conclusión

El archivo **robots.txt** es una herramienta poderosa para controlar qué contenido se rastrea en tu sitio web. No es una medida de seguridad ni sirve por sí solo para sacar páginas de los resultados de búsqueda (para eso está `noindex`), pero es la forma estándar de decirles a los buscadores y a los bots de IA por dónde pueden pasar.

Espero que este artículo te haya ayudado a entender mejor cómo funciona el **robots.txt** y cómo puedes sacarle el máximo provecho.

Si tienes preguntas o necesitas ayuda para configurar tu archivo robots.txt, no dudes en dejar un comentario. Estoy aquí para ayudarte.

## Fuentes

- [RFC 9309: Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309.html), el estándar oficial (en inglés).
- [Introducción a los archivos robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=es), en el Centro de la Búsqueda de Google.
- [Impedir que la Búsqueda indexe páginas con noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=es), en el Centro de la Búsqueda de Google.
- [Rastreadores habituales de Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers?hl=es), donde se explica `Google-Extended`.
- [Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots), la documentación de OpenAI sobre `GPTBot`, `OAI-SearchBot` y `ChatGPT-User` (en inglés).
- [Does Anthropic crawl data from the web?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), la documentación de Anthropic sobre sus tres bots (en inglés).
- [Perplexity Crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), la documentación de Perplexity (en inglés).
- [Acerca de Applebot](https://support.apple.com/es-es/119829), en el soporte técnico de Apple.
