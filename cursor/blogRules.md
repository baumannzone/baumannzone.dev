Cada vez que creamos una nueva entrada en el blog, debemos seguir las siguientes reglas:

- No puede haber duplicados.
- El nombre del archivo sin extension debe ser el título de la entrada en minúsculas y separado por guiones.
  - Ejemplo: Acordeones nativos en HTML sin una línea de JavaScript => acordeones-nativos-en-html-sin-una-linea-de-javascript
- El archivo debe estar en la carpeta `src/content/blog`.
- El archivo debe tener la extensión `.md`.

El frontmatter del archivo debe seguir las reglas de "/src/content/config.ts" con la colección "blog".

El contenido del archivo debe ser un markdown con el siguiente formato:

```
Frontmatter

Contenido del artículo
```

El contenido del artículo no tienes que generarlo, solo crear el fichero y el frontmatter.

El frontmatter tiene una propiedad llamada `ogImage` que es una url de la imagen que se usará para la imagen de la entrada en el SEO y tiene el siguiente formato:

Ejemplo frontmatter:

```
---
title: "Título de la entrada"
description: "Descripción de la entrada"
tags: "JavaScript, HTML, CSS"
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Título%20de%20la%20entrada&tags=JavaScript,HTML,CSS";
---
```

`ogImage` corresponde a la imagen open graph del artículo.

No usamos h1 ya que el título (title del frontmatter) es el título de la entrada.

Si el artículo tiene imágenes, éstas deben estar en la carpeta `assets/blog/nombre-del-archivo-sin-extension/nombre-de-la-imagen.png` donde `nombre-del-archivo-sin-extension` es el nombre del archivo sin extension, es decir, el título de la entrada en minúsculas y separado por guiones.

Ejemplo:

```
assets/blog/acordeones-nativos-en-html-sin-una-linea-de-javascript/imagen.png
```

Si el articulo necesita una demo, esta debe estar en la carpeta `src/components/demos-blog/nombre-del-archivo-sin-extension.astro` donde `nombre-del-archivo-sin-extension` es el nombre del archivo sin extension, es decir, el título de la entrada en minúsculas y separado por guiones.

Ejemplo:

```
src/components/demos-blog/acordeones-nativos-en-html-sin-una-linea-de-javascript.astro
```

Dicho archivo tiene que usar el layout `src/components/demos-blog/demo-layout.astro` y el contenido se inserta en el `<slot>`.

```
<DemoLayout>
  ...
</DemoLayout>
```
