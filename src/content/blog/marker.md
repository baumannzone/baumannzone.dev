---
title: "Haz accesible el contenido de los pseudo-elementos ::marker en CSS"
description: "Cómo personalizar ::marker en <summary> sin romper la accesibilidad. Descubre cómo usar content con texto alternativo o incluso ocultarlo a los lectores de pantalla."
pubDate: 2025-08-19
type: blog
tags:
  - CSS
  - a11y
author: "Jorge Baumann"
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Haz%20accesible%20el%20contenido%20de%20los%20pseudo-elementos%20::marker&tags=CSS,A11y"

---

En mi [post anterior sobre acordeones nativos en HTML](/blog/acordeones-nativos-en-html-sin-una-linea-de-javascript) vimos cómo usar `<details>` y `<summary>` para crear interacciones sin nada de JavaScript.

Pues bien, hace un par de días me puse a jugar con `::marker` para personalizar el contenido de `<summary>` y me encontré con un importante detalle de accesibilidad.

Los screen readers leen también el content que añadimos desde CSS.

```css
summary::marker {
  content: "😊";
}
```

Ese simple cambio hace que un lector de pantalla lea algo como:

> _Cara sonriente con los ojos sonrientes y las mejillas coloradas_

Y tal vez no siempre es lo que queremos.

La buena noticia: CSS permite añadir un segundo valor pensado justamente para screen readers:

summary::marker { 
  content: "📸" / "alternative text for screen readers"; 
}

/* o directamente saltárselo */
summary::marker { 
  content: "📸" / ""; 
}


De esta forma puedes decorar visualmente el summary sin añadir ruido innecesario a usuarios de tecnologías asistivas.

En macOS puedes probarlo fácilmente con VoiceOver (CMD + F5) en Firefox o Chrome.

Un pequeño detalle que hace tus acordeones no solo bonitos, sino también accesibles.