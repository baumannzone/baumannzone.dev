---
title: Añadiendo comentarios al blog
description: "Cómo añado comentarios a mi blog con Utterances, una herramienta open source que guarda cada comentario como una issue de GitHub. Con la configuración."
pubDate: 2022-04-13
updatedDate: 2026-11-15
type: blog
author: Jorge Baumann
tags:
  - Tools
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=A%C3%B1adiendo%20comentarios%20al%20blog&tags=Tools"
relatedPosts:
  - "no-uses-google-analytics-nunca-mas"
  - "como-programar-publicaciones-en-mastodon"
---

Los comentarios aportan mucho valor a los artículos de un blog. Son una forma de generar debate, de comunicar ideas y compartir conocimiento entre developers.

Sin embargo, puede ser que los comentarios no sean relevantes o que no sean apropiados (_spam_). Gestionar comentarios suele ser una tarea tediosa, sobre todo cuando tu sitio web es muy grande. Si en algún momento de tu vida has gestionado un blog con WordPress, sabrás de lo que hablo.

Hace tiempo que conozco [Utterances](https://utteranc.es/), una librería open source de comentarios para developers que te permite, rápidamente, añadir comentarios a tu blog de forma sencilla y segura.

## Cómo funciona

Digo que es para developers porque está basado en GitHub. Utiliza la API de GitHub, en concreto las **issues** de un repositorio, para guardar los comentarios. Cada artículo tiene su propia _issue_, y cada comentario es un comentario de esa _issue_.

Puedes escribir un comentario aquí abajo o hacerlo directamente en el repositorio de GitHub, si la _issue_ ya existe. Eso sí, en los dos casos necesitas una cuenta de GitHub: para comentar, tienes que iniciar sesión.

Lo que más me gusta es que, al igual que las issues de GitHub, soporta Markdown. Puedes darle formato al texto y tener una vista previa antes de publicar. Pero lo mejor, desde mi punto de vista, es que puedes escribir código.

## Cómo se configura

Es **sencillo** y **rápido**: tardas 5 minutos en ponerlo en marcha. Lo único que necesitas es una cuenta de GitHub, un [repositorio](https://github.com/baumannzone/baumannzonedev-comments) y colocar un `<script>` en lugar que quieras que se muestren los comentarios.

Los pasos son estos:

1. Crea un repositorio **público** en GitHub para los comentarios.
2. Instala la [app de Utterances](https://github.com/apps/utterances) en ese repositorio, para que pueda crear issues y comentarios en tu nombre.
3. Pega el `<script>` en la plantilla de tus artículos, donde quieras que aparezcan los comentarios.

Este es el que uso yo en este blog:

```html
<script
  src="https://utteranc.es/client.js"
  data-repo="baumannzone/baumannzonedev-comments"
  data-issue-term="pathname"
  data-label="comment"
  data-theme="preferred-color-scheme"
  crossorigin="anonymous"
  async
></script>
```

- `data-repo`: el repositorio donde se guardan los comentarios.
- `data-issue-term`: cómo se relaciona cada artículo con su _issue_. Con `pathname`, la _issue_ se llama como la ruta del artículo. Si cambias la URL de un artículo, sus comentarios no aparecerán en la nueva.
- `data-label`: la etiqueta que se añade a cada _issue_, para tenerlas localizadas.
- `data-theme`: el tema visual. Con `preferred-color-scheme` se adapta al modo claro u oscuro del sistema.

## ¿Es seguro?

Lo de **seguro** va entre comillas, porque depende de GitHub. Para comentar hace falta una cuenta de GitHub, y eso ya es un buen filtro contra el spam. Además, como son issues, puedes borrar comentarios, bloquear usuarios o cerrar una conversación desde el propio GitHub.

No es la solución perfecta. La app de Utterances necesita permiso de escritura sobre las issues del repositorio de comentarios, así que úsala en un repositorio dedicado solo a eso, no en el de tu código.

## Ojo: Utterances lleva años sin mantenimiento

El repositorio de Utterances no recibe cambios desde febrero de 2022. Hoy sigue funcionando, y es lo que ves aquí abajo, pero si algo se rompe no hay nadie al otro lado para arreglarlo. Tenlo en cuenta antes de montarlo en un proyecto nuevo.

Venga, deja tu primer comentario aquí abajo y dime qué te parece Utterances. ¿Lo conocías? ¿Lo has usado alguna vez?

Nos leemos en los comentarios.
