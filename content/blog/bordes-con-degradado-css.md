---
title: Bordes con degradado en CSS
description: Guía completa para saber cómo crear bordes con degradados y con imágenes en CSS
created: 2022-03-24
type: blog
author: Jorge Baumann
tags:
  - html
  - css
---

## Bordes con degradados e imágenes en CSS

Ya conoces la propiedad `border` y sabes cómo usarla para crear bordes en CSS.  
En este artículo aprenderás a crear bordes multicolor y bordes con imágenes, gracias a la propiedad `border-image` de CSS.

### Configurando el ejemplo

Antes de empezar, vamos a crear la clase CSS principal que vamos a usar como base en todos los ejemplos.

```css
.box {
  width: 200px;
  height: 100px;
  border-style: solid;
  border-width: 10px;
}
```

Usamos esta clase CSS en un elemento HTML.

```html
<div class="box"></div>
```

## Bordes con imágenes

Lo primero que hay que hacer es crear otra clase CSS y luego usarla en el elemento HTML.

```css
.border-image {
  border-image-source: url(/image/path/file.png);
  border-image-slice: 1;

  // También podemos usar el shorthand
  // border-image: url(/image/path/file.png) 1;
}
```

```html
<div class="box border-image"></div>
```

El resultado es el siguiente:
<blog-border-with-image></blog-border-with-image>

Te muestro también la imagen que se está usando para que entiendas mejor el funcionamiento de la propiedad CSS `border-image`.

## Bordes con degradados o gradientes

Hay 3 formas de crear bordes con degradados o gradientes de colores en CSS: usando `linear-gradient`, `radial-gradient` o `conic-gradient`.

### Linear gradient

Creamos la nueva clase de CSS y después la usamos nuestro elemento HTML.

En este caso concreto, podemos indicar el ángulo que queremos que tenga el gradiente. Por defecto, el gradiente tiene un ángulo de 0 grados.  

Para este ejemplo, usamos un ángulo de 45 grados. Con el segundo cuadrado se ve mejor el ángulo y se entiende mejor el concepto de borde degradado.
```css
.linear-gradient {
  border-image: linear-gradient(45deg, red, lime, blue) 1;
}
```

```html
<div class="box linear-gradient"></div>
```

Se verá así:
<blog-border-with-linear-gradient></blog-border-with-linear-gradient>

Ya tienes un `div` con el borde degradado usando `linear-gradient`.

### Radial gradient

Lo mismo que el anterior, pero usamos `radial-gradient` en vez de `linear-gradient`.

```css
.radial-gradient {
  border-image: radial-gradient(red, cyan) 1;
}
```

```html
<div class="box radial-gradient"></div>
```

El resultado sería el siguiente:
<blog-border-with-radial-gradient></blog-border-with-radial-gradient>
  
El motivo por el que se ve así es que el gradiente empieza en el centro del `div` y en las esquinas casi no se ve el degradado del rojo. Lo que más se ve es el color azul `cyan`. 

Esta es la segunda forma de crear un borde con degradado. Ya tienes otro `div` con el borde degradado usando `radial-gradient`. 

### Conic gradient

Es muy parecido al anterior, pero usamos `conic-gradient` en vez de `radial-gradient`.

```css
.conic-gradient {
  border-image: conic-gradient(lime, fuchsia, cyan) 1;
}
```

```html
<div class="box conic-gradient"></div>
```

El resultado sería el siguiente:
<blog-border-with-conic-gradient></blog-border-with-conic-gradient>

Al igual que el caso anterior, te dejo los 2 ejemplos con `border` y con `background`, para que entiendas mejor el concepto.  
Esta es la tercera forma de crear un borde con degradado. Ya tienes otro `div` con el borde degradado usando `conic-gradient`.

## Conclusiones

En este artículo aprendiste a crear bordes con degradados y con imágenes en CSS.

A día de hoy (Marzo de 2022), [Can I Use](https://caniuse.com/border-image) te muestra que un 97% de los navegadores web soportan las propiedades `border-image` y `border-image-slice`, necesarias para hacer bordes con degradados de colores o bordes con imágenes.

Los bordes con degradados e imágenes son muy divertidos, pero tiene una desventaja: por el momento no funcionan bien con `border-radius`.
