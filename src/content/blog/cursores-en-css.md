---
title: "Mejora la UX: cursores en CSS"
description: Mejora la UX en tu sitio web. Conoce todos los cursores en CSS. Aprende a cambiar los cursores y mejora la experiencia de usuario de tu sitio web. ¿Los conoces todos?
pubDate: 2021-12-17
type: blog
author: Jorge Baumann
tags:
  - HTML
  - CSS
  - UX/UI
---

## El cursor en CSS

La propiedad `cursor` en CSS controla cómo se [verá](https://baumannzone.github.io/cursores-css/) el cursor del ratón cuando esté posicionado sobre el elemento en el que se ha establecido esta propiedad.  
Obviamente, solo funcionará en navegadores o sistemas operativos en los que haya un ratón o un cursor. Por lo tanto, en la mayoría de dispositivos móviles no funcionará.

Los cursores se utilizan, básicamente, para mejorar la UX (experiencia de usuario) de un sitio web y para transmitir la idea de cierta funcionalidad.  
El ejemplo más sencillo es el de un _enlace_, que cuando pasas el ratón por encima de él, se muestra un cursor de mano 👆. Esto nos avisa que dicho elemento es clicable y se puede pulsar.

Sin embargo, podrías hacer que el cursor se convierta en una mano cuando pasas el ratón por encima de algo que no es clicable. Estarías confundiendo al usuario y creando una mala experiencia de usuario. Por lo tanto, tienes que tener cuidado cuando cambies los cursores.

En [este sitio web](https://baumannzone.github.io/cursores-css/) tienes una guía de referencia completa y puedes ver todos los cursores disponibles que hay en CSS.

[![Cursores en CSS por Baumannzone](https://raw.githubusercontent.com/baumannzone/cursores-css/main/img/og.png)](https://baumannzone.github.io/cursores-css/)

## Por diversión 🤡

Cuando estoy haciendo alguna web y quiero gastar una broma a quienes la usan, suelo usar mucho el cursor de `none` y el de `wait`.  
Con `none` se genera mucha confusión, pues no ves nada. Con el de `wait` se ve un símbolo de espera o de cargando, que también puede generar confusión cuando no entiendes qué se supone que está cargando.

## Cursores en CSS

Los cursores por defecto son los siguientes:

```css
/* General */
.auto {
  cursor: auto;
}
.default {
  cursor: default;
}
.none {
  cursor: none;
}

/* Links & Status */
.context-menu {
  cursor: context-menu;
}
.help {
  cursor: help;
}
.pointer {
  cursor: pointer;
}
.progress {
  cursor: progress;
}
.wait {
  cursor: wait;
}

/* Selection */
.cell {
  cursor: cell;
}
.crosshair {
  cursor: crosshair;
}
.text {
  cursor: text;
}
.vertical-text {
  cursor: vertical-text;
}

/* Drag & drop */
.alias {
  cursor: alias;
}
.copy {
  cursor: copy;
}
.move {
  cursor: move;
}
.no-drop {
  cursor: no-drop;
}
.not-allowed {
  cursor: not-allowed;
}
.grab {
  cursor: grab;
}
.grabbing {
  cursor: grabbing;
}

/* Resize & Scroll */
.all-scroll {
  cursor: all-scroll;
}
.col-resize {
  cursor: col-resize;
}
.row-resize {
  cursor: row-resize;
}
.n-resize {
  cursor: n-resize;
}
.e-resize {
  cursor: e-resize;
}
.s-resize {
  cursor: s-resize;
}
.w-resize {
  cursor: w-resize;
}
.ns-resize {
  cursor: ns-resize;
}
.ew-resize {
  cursor: ew-resize;
}
.ne-resize {
  cursor: ne-resize;
}
.nw-resize {
  cursor: nw-resize;
}
.se-resize {
  cursor: se-resize;
}
.sw-resize {
  cursor: sw-resize;
}
.nesw-resize {
  cursor: nesw-resize;
}
.nwse-resize {
  cursor: nwse-resize;
}

/* Zoom */
.zoom-in {
  cursor: zoom-in;
}
.zoom-out {
  cursor: zoom-out;
}
```

## Cusores personalizados

Si quieres personalizar el cursor aun más, puedes usar imágenes o emojis, gracias a la función `url()`. Cuando lo hagas, siempre tienes que usar un valor por defecto.

### Cursor personalizado con imágenes

En este ejemplo, el cursor es una imagen.

```css
.cursor-custom {
  cursor: url(img/aim.png), auto;
}
```

El segundo valor, `auto`, es el valor que se utilizará por defecto si la imagen no funciona. Es obligatorio poner un valor por defecto cuando usas `url()`.  
`auto` es el valor por defecto, pero puedes usar cualquier otro valor válido.

Actualmente, la propiedad `cursor` no acepta GIFs, olvídate de las imágenes animadas.

Sin embargo, puedes simular un cursor animado tirando un par de líneas de JavaScript. Los pasos serían los siguientes:

- Ocultar el ratón (`cursor: none;`)
- Rastrear la posición del ratón con JavaScript
- Mostrar un elemento animado en el punto donde se encuentre el ratón

### Cursor personalizado con emojis

Usar un emoji es tan fácil como esto:

```css
.cursor-custom {
  cursor: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🦄</text></svg>")
      12 12, auto;
}
```

Seguramente necesites usar coordenadas (_x_, _y_) para ajustar el cursor. Por ejemplo, si estás usando un cursor personalizado cuyo elemento mide 24x24 píxeles y quieres que el punto de click esté en el centro, deberías usar _12_ _12_ como valores de coordenadas. De esta forma, el punto de click estará justo en el medio.
Si no pones nada, por defecto los valores son `0 0`, es decir, la esquina superior izquierda.

Mira [la demo](https://baumannzone.github.io/cursores-css/) y comprueba cómo funcionan los cursores custom.

## Límites de tamaño

Si bien la especificación no limita el tamaño de la imagen del cursor, los navegadores web si que han puesto restricciones para evitar un posible mal uso.  
En Firefox y Chromimum, las imágenes de cursor están restringidas a **32x32** píxeles. Si el emoji o la imagen es mas grande, el cursor se recortará.

Esto es todo lo que necesitas saber de los cursores en CSS. Ahora, ¡a ponerlo en práctica!

¡Happy cursoring! 👆
