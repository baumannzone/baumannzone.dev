---
title: "He migrado los comentarios del blog de Utterances a Giscus"
description: "Cómo he migrado los comentarios de mi blog de Utterances a Giscus, que los guarda en GitHub Discussions, sin perder ninguno. Con la configuración."
pubDate: 2026-11-15
type: blog
author: Jorge Baumann
tags:
  - Tools
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=He%20migrado%20los%20comentarios%20del%20blog%20de%20Utterances%20a%20Giscus&tags=Tools"
relatedPosts:
  - "añadiendo-comentarios-al-blog"
  - "no-uses-google-analytics-nunca-mas"
---

Hace unos años [añadí comentarios a este blog con Utterances](/blog/añadiendo-comentarios-al-blog/), que guarda cada comentario como una _issue_ de GitHub. Funcionaba, pero lleva sin recibir cambios desde 2022, y no quería esperar a que se rompiera.

Así que lo he cambiado por Giscus. La idea es la misma, pero en lugar de usar las _issues_ usa las **Discussions** de GitHub, que encajan mucho mejor con una conversación. Y, a diferencia de Utterances, se sigue manteniendo.

Los comentarios que ves aquí abajo ya son de Giscus, y no se ha perdido ninguno de los antiguos.

## Cómo funciona

Cada página de tu web tiene su propia _discussion_ en un repositorio de GitHub, y cada comentario es un comentario de esa _discussion_. No hay base de datos ni servidor: todo vive en GitHub.

Cuando alguien entra en un artículo, Giscus busca la _discussion_ que le corresponde. Si no existe, el bot de Giscus la crea la primera vez que alguien comenta o reacciona.

Para comentar hace falta una cuenta de GitHub. Puedes hacerlo desde el propio blog, autorizando la app de Giscus, o directamente en la _discussion_ de GitHub.

## Por qué Giscus y no Utterances

- **Reacciones.** Además de comentar, puedes reaccionar al artículo con emojis, como en GitHub.
- **Respuestas en hilo.** Las Discussions permiten responder a un comentario concreto. En una _issue_, todo va en una sola lista.
- **Carga diferida.** Con `data-loading="lazy"`, los comentarios solo se cargan cuando el lector llega a ellos.
- **Idiomas.** La interfaz está traducida a más de 30 idiomas, español incluido.
- **Mantenimiento.** Sigue recibiendo cambios en 2026.

Igual que Utterances, es open source, gratis y no tiene anuncios ni rastreo.

## Cómo se configura

Yo ya tenía un repositorio solo para los comentarios, el mismo que usaba con Utterances. Para Giscus necesita tres cosas:

1. Que sea **público**. Si no, los lectores no pueden ver las _discussions_.
2. Que tenga las **Discussions activadas**. Se activan en _Settings_ → _General_ → _Features_.
3. Que tenga instalada la [app de Giscus](https://github.com/apps/giscus).

Después entra en [giscus.app](https://giscus.app/es), escribe el nombre del repositorio y elige las opciones. La propia web te genera el `<script>` con los identificadores de tu repositorio y de la categoría ya rellenos. Este es el que uso yo:

```html
<script
  src="https://giscus.app/client.js"
  data-repo="baumannzone/baumannzonedev-comments"
  data-repo-id="R_kgDOHJPgsA"
  data-category="Comments"
  data-category-id="DIC_kwDOHJPgsM4CfuZO"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="es"
  data-loading="lazy"
  crossorigin="anonymous"
  async
></script>
```

Lo he pegado en la plantilla de los artículos, en el mismo sitio donde estaba el de Utterances.

Estos son los atributos que más importan:

- `data-repo-id` y `data-category-id`: no los escribas a mano, cópialos de giscus.app.
- `data-category`: la categoría de Discussions donde se crean las conversaciones. Yo he creado una llamada _Comments_ para tenerlas separadas del resto. Giscus recomienda que sea de tipo _Announcements_: así solo tú y el bot podéis abrir _discussions_ nuevas, y los demás solo pueden comentar en las que ya existen.
- `data-mapping`: cómo se relaciona cada página con su _discussion_. Con `pathname`, la _discussion_ se llama como la ruta del artículo. Si cambias la URL, los comentarios no aparecerán en la nueva.
- `data-strict`: con `1`, Giscus busca la _discussion_ por un _hash_ del título en lugar de por el título. Evita que dos artículos con rutas parecidas acaben compartiendo comentarios, pero yo lo tengo en `0` por la migración. Te lo explico abajo.
- `data-theme`: con `preferred_color_scheme` se adapta al modo claro u oscuro del sistema. Ojo, va con guiones bajos. En Utterances es `preferred-color-scheme`, con guiones normales.

Si usas React, Vue o Svelte, tienes un componente oficial, `@giscus/react`, `@giscus/vue` o `@giscus/svelte`, que hace lo mismo sin pegar el `<script>`.

## Cómo he migrado los comentarios de Utterances

Lo que más miedo me daba era perder los comentarios antiguos. No hace falta: GitHub convierte _issues_ en _discussions_ y conserva todos los comentarios.

Se hace desde cada _issue_: en la barra lateral, pulsas _Convert to discussion_, eliges la categoría y confirmas. La _issue_ queda cerrada y bloqueada, con un enlace a la nueva _discussion_. Los comentarios conservan su autor y su fecha.

GitHub no tiene una API para hacerlo, así que fui una a una. Eran 13 _issues_, unos diez minutos.

Después, Giscus tiene que encontrarlas. Busca cada _discussion_ por su título, según lo que pongas en `data-mapping`. Utterances y Giscus calculan `pathname` exactamente igual: la ruta del artículo sin la barra inicial, como `blog/testing-con-javascript/`. Como usaba `pathname` en los dos, no he tenido que renombrar nada.

Algunas de mis _issues_ antiguas no llevan la barra final, como `blog/dibujar-con-css`, porque las URLs del blog no la tenían cuando se crearon. Tampoco ha sido un problema: la búsqueda de GitHub ignora esa barra y Giscus las encuentra igual.

Lo único que no encaja es `data-strict="1"`. Las _discussions_ convertidas no tienen el _hash_ del título en el cuerpo, y tendría que añadirlo a mano en cada una. Por eso lo he dejado en `0`.

## Lo que no cambia

Sigue dependiendo de GitHub. Para comentar hace falta una cuenta, y eso deja fuera a quien no la tenga. Para un blog técnico no es un problema, para uno de recetas sí.

Además, la app de Giscus necesita permiso para crear _discussions_ en el repositorio. Igual que con Utterances, úsala en un repositorio dedicado solo a los comentarios, no en el de tu código.

Pruébalo tú mismo: deja un comentario o una reacción aquí abajo. ¿Usas Giscus en tu blog, o sigues con Utterances?
