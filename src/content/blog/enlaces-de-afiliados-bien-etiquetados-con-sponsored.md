---
title: "Enlaces de afiliados bien etiquetados con 'sponsored'"
description: "Por qué marcar tus enlaces de afiliado con rel=\"sponsored\", qué dice Google, en qué se diferencia de nofollow y ugc, y cómo lo automatizo en este blog."
pubDate: 2025-09-14
updatedDate: 2026-11-19
type: blog
author: Jorge Baumann
intro: true
tags:
  - TIL
  - SEO
  - HTML
relatedPosts:
  - "git-tower-el-gui-de-git-mas-potente-para-macos-y-windows"
  - "no-uses-google-analytics-nunca-mas"
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Enlaces%20de%20afiliados%20bien%20etiquetados%20con%20'sponsored'&tags=TIL,SEO,HTML"
---

Si un enlace te da dinero, por afiliación o patrocinio, márcalo con `rel="sponsored"`. Así le dices a Google que es un enlace comercial y no un voto de confianza hacia esa página. No mejora tu posicionamiento, pero evita que Google lo trate como un enlace pagado para manipular el ranking.

Lo descubrí revisando la documentación sobre los enlaces en HTML, y desde entonces todos los enlaces de afiliado de este blog lo llevan.

## ¿Qué es `rel="sponsored"`?

El atributo `rel` (de "_relationship_") describe la relación entre tu página y el destino del enlace. Cuando usas `rel="sponsored"`, indicas que el enlace es comercial, es decir, que hay una compensación por recomendar ese producto o servicio.

```html
<a href="https://amzn.to/41PGFr4" target="_blank" rel="sponsored">
  Gloomhaven
</a>
```

Es realmente sencillo. Solo añade `rel="sponsored"` a tus enlaces de afiliados.

## ¿Por qué es importante?

Google considera que comprar o vender enlaces para mejorar el posicionamiento va contra sus políticas de spam. Un enlace de afiliado sin marcar se parece mucho a eso. Con `rel="sponsored"`:

- **Cumples las directrices de Google**: le dices que el enlace es comercial, así que no lo cuenta como una recomendación tuya hacia esa página.
- **Evitas problemas**: los enlaces pagados sin marcar pueden acabar en una acción manual contra tu web.

Lo que no hace es mejorar tu SEO. Es una forma de cumplir las reglas, no de ganar posiciones.

## `rel` es para los buscadores, el aviso es para las personas

El atributo `rel` no lo ve nadie que lea tu post: solo lo leen los buscadores. Para ser transparente con tu audiencia necesitas además un aviso visible, por ejemplo al principio del post:

> **Aviso:** este post contiene enlaces de afiliado. Si compras a través de ellos, recibo una comisión sin coste extra para ti.

Es lo que hago en mi [post sobre Git Tower](/blog/git-tower-el-gui-de-git-mas-potente-para-macos-y-windows/). Y muchos programas de afiliados, como el de Amazon, te obligan a incluirlo.

## Más allá de `sponsored`

Además de `sponsored`, existen otros valores útiles para el atributo `rel`:

- `nofollow`: le dice a Google que no asocie tu web con la página enlazada. Desde 2019, Google lo trata como una indicación, no como una orden. Para enlaces de afiliado también vale, aunque Google prefiere `sponsored`.
- `ugc`: significa "_User Generated Content_" y se usa para enlaces en comentarios o foros.
- `noopener` y `noreferrer`: no tienen que ver con el SEO, sino con la seguridad y la privacidad al abrir enlaces en una pestaña nueva. Los navegadores actuales ya aplican `noopener` por defecto con `target="_blank"`.

Puedes combinar varios valores separados por espacios, por ejemplo `rel="sponsored nofollow"`.

## Cómo lo hago en este blog

Marcar los enlaces a mano en cada post es fácil de olvidar, así que lo he automatizado. Este blog está hecho con Astro, y un pequeño plugin revisa todos los enlaces de los posts al generar el HTML. Si un enlace lleva el parámetro `via=` (el de Git Tower) o apunta a `amzn.to` (Amazon), le añade `rel="sponsored noopener"`:

```javascript
const isAffiliate = (href) => {
  try {
    const url = new URL(href);
    return url.searchParams.has("via") || url.hostname === "amzn.to";
  } catch {
    return false;
  }
};
```

Así puedo escribir los enlaces en Markdown como siempre, y el atributo se añade solo.

## Fuentes

- [Qualify your outbound links to Google](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links), en la documentación de Google Search.
- [El atributo `rel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel), en MDN.
