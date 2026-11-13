---
title: Entendiendo Flow Layout en CSS
description: "El flow layout coloca las cajas en el eje de bloque y, en cada línea, en el eje en línea. Arriba y a la izquierda solo vale en escritura horizontal."
pubDate: 2024-06-10
updatedDate: 2026-11-13
type: blog
author: Jorge Baumann
intro: true
tags: ["CSS"]
relatedPosts:
  - personaliza-marker-en-css-sin-romper-la-accesibilidad
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Entendiendo%20Flow%20Layout%20en%20CSS&tags=CSS"
---

El flow layout coloca las cajas en el orden del HTML: primero a lo largo del eje de bloque y, dentro de cada línea, a lo largo del eje en línea. Bloques e inlines viven en ese modo. Flex, grid y tabla son otros.

## No es "de arriba a abajo y de izquierda a derecha"

En español, los valores por defecto son `writing-mode: horizontal-tb` y `direction: ltr`. Ahí el eje de bloque va de arriba a abajo y el eje en línea de izquierda a derecha.

Si el documento va de derecha a izquierda, o el modo de escritura es vertical, el flujo sigue esos ejes. "De arriba a abajo y de izquierda a derecha" describe el caso habitual en español, no una regla del layout.

## Aunque no escribas CSS, el navegador sí

El valor inicial de `display` es `inline`, no `block`. Un `div` se apila como bloque porque lo dice la hoja de estilos del navegador, no porque una página sin CSS de autor esté "sin CSS".

Con esa hoja, entre otras reglas:

- `div`, `p`, `h1` y `section` son `display: block`. Equivale a `block flow`: un bloque en flow layout.
- `span`, `a`, `strong` y `em` no reciben otro valor, así que se quedan en `inline` (`inline flow`).
- `table` es `display: table`. Esas cajas no se colocan en flow layout.
- `li` es `display: list-item`: un bloque en flow más un marcador, el pseudoelemento `::marker`.
- `button` e `input` son `inline-block`.

Si cambias el contenido de `::marker`, un lector de pantalla también lo lee. En [Personaliza ::marker en CSS sin romper la accesibilidad](/blog/personaliza-marker-en-css-sin-romper-la-accesibilidad/) explico cómo hacer que anuncie otro texto, o que no anuncie nada.

## Elementos en bloque

Un bloque en flow se apila con el anterior en el eje de bloque. No se pone al lado aunque sobre sitio: cada uno empieza en el borde donde empezaría una línea en ese modo de escritura.

Con `width: auto`, que es el valor por defecto, ocupa todo el tamaño en línea del contenedor. En escritura horizontal, eso es el ancho entero, no el ancho del texto.

En ese mismo modo, los márgenes de arriba y de abajo de dos bloques hermanos se colapsan. El hueco entre ellos es el mayor de los dos, no la suma. Si un párrafo tiene `margin-bottom: 40px` y el siguiente `margin-top: 20px`, entre ambos quedan 40px. Los márgenes de izquierda y derecha no se colapsan.

Tampoco se colapsan los de un flotado, los de un `position: absolute` o `fixed`, los de un `inline-block`, ni los de los hijos directos de un flex o un grid. El margen de un bloque sí puede colapsar con el de su padre si no hay borde, padding ni un contexto de formato nuevo que los separe.

## Elementos en línea

Un inline entra en la línea, en el eje en línea. No ocupa el ancho del contenedor. Si no cabe, sigue en la línea de abajo. El rectángulo de cada línea es una caja de línea (*line box*).

En un `span`, o en un `a` con texto, `width` y `height` no aplican. Un `img` también es inline por defecto, pero es un elemento reemplazado: ahí esas propiedades sí cuentan.

## Cambiar el flujo con `display`

`inline-block` no es otra propiedad. Es un valor de `display`, y equivale a `inline flow-root`: la caja sigue en la línea y acepta ancho y alto.

```css
span.icon {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
}
```

`display: block` saca al elemento de la línea y lo convierte en bloque. Un enlace pasa a ocupar todo el ancho del contenedor, así que el área clicable es la fila, no solo el texto:

```css
a.nav-link {
  display: block;
}
```

Flex, grid y tabla cambian cómo se colocan los hijos. El contenedor, por fuera, sigue siendo un bloque, salvo que uses `inline-flex` o `inline-grid`. Los hijos ya no están en flow layout:

```css
ul.nav {
  display: flex;
}
```

Un flotado, o un `position: absolute` o `fixed`, sale del flujo normal. El resto de las cajas se coloca como si no estuviera. `position: relative` no sale: sigue ocupando su sitio.

En CSS Display nivel 3, el tipo interno es `flow`, `flow-root`, `table`, `flex`, `grid` o `ruby`.

## Fuentes

- [CSS Flow Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_display/Flow_layout), en MDN.
- [`display`](https://developer.mozilla.org/es/docs/Web/CSS/display), en MDN. El valor inicial es `inline`, y `inline-block` equivale a `inline flow-root`.
- [Block and inline layout in normal flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow), en MDN (en inglés): el bloque ocupa el eje en línea y los márgenes verticales de los hermanos se colapsan.
