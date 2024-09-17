---
title: "Letter spacing está roto en CSS y tú no lo sabías"
description: "Te revelo por qué el espaciado de letras en CSS no funciona como debería, y cómo este error silencioso puede estar afectando la calidad de tu diseño tipográfico sin que te hayas dado cuenta."
pubDate: 2024-09-16
type: blog
author: Jorge Baumann
tags:
  - TIL
  - CSS
---

El espaciado de letras, o letter-spacing en CSS, es una propiedad que muchos desarrolladores usan sin prestar demasiada atención. Su nombre y su funcionalidad son bastante simples: ajustar el espacio entre los caracteres de un texto. 

Pero la realidad es que puede arruinar tu diseño tipográfico si no entiendes bien cómo funciona. ¿Alguna vez has notado que los textos se ven extrañamente desalineados o simplemente "fuera de lugar"? Es probable que el problema esté en cómo estás usando el espaciado de letras.

<!-- En este artículo, te mostraré por qué el espaciado de letras en CSS está roto, cómo evitar sus problemas comunes y qué alternativas puedes considerar. -->

## ¿Qué es `letter-spacing` en CSS? 

La pregunta es obvia, pero vale la pena responderla. `letter-spacing` es una propiedad de CSS que te permite ajustar el espacio entre las letras de un texto. Puedes usar valores positivos o negativos para aumentar o disminuir el espacio entre las letras.

```css
h1 {
  letter-spacing: 16px;
}
```

En este caso, el espaciado entre las letras de todos los títulos `<h1>` será de `16px`. Si quieres reducir el espacio, puedes usar un valor más pequeño o un valor negativo:

```css
h1 {
  letter-spacing: -2px;
}
```

## ¿Por qué `letter-spacing` está roto?

La especificación dice lo siguiente: "_This property specifies additional spacing between adjacent typographic character units._" (traducido: "Esta propiedad especifica el espaciado adicional entre unidades de caracteres tipográficos adyacentes"). 

Es decir, que si tienes este código HTML:

```html
<p>a<span>bc</span>d</p>
```

y este código CSS:

```css
p { letter-spacing: 1rem; }

span { letter-spacing: 2rem; }
```

El resultado debería ser algo así:

![letter-spacing](../../assets/blog/letter-spacing-esta-roto-en-css-y-tu-no-lo-sabias/lo-que-esperas.avif)

Es decir, que el espaciado entre las letras `a` y `b` y entre las letras `c` y `d` debería ser de `1rem` y entre las letras `b` y `c` debería ser de `2rem`.


<!-- However, if we run the same code on any browser (e.g., Chrome, Firefox, or Safari), we’ll see the spacing isn’t contained between the “b” letters, but also at the end of the complete word. -->
Sin embargo, si ejecutas este código en Chrome, verás que el espacio entre las letras `c` y `d` también es de `2rem`:

![letter-spacing](../../assets/blog/letter-spacing-esta-roto-en-css-y-tu-no-lo-sabias/lo-que-obtienes.avif)

Esto es un error en la implementación de la propiedad `letter-spacing` en los navegadores. En lugar de aplicar el espaciado solo entre las letras adyacentes, también lo aplica al final, por lo que el espaciado entre las letras `c` y `d` es de `2rem` en lugar de `1rem`.

## ¿Qué esperar en el futuro?

Desde el [CSSWG](https://github.com/w3c/csswg-drafts/issues/10193) ya han reconocido el problema y se espera que en futuras versiones se realicen mejoras para corregir este comportamiento. Ahora solo queda esperar y estar atentos a las actualizaciones.

Ahora ya sabes por qué `letter-spacing` está roto en CSS.