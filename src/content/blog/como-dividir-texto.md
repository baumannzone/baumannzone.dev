---
title: "Intl.Segmenter API: cómo dividir texto correctamente en JavaScript"
description: "Descubre cómo usar Intl.Segmenter para dividir texto en palabras, frases y graphemes de forma mucho más precisa que con split()."
pubDate: 2026-03-13
published: false
author: "Jorge Baumann"
type: "blog"
------------

A simple vista, dividir un texto en JavaScript parece trivial.

Tienes `split()`, separas por espacios y listo, ¿no?

```js
"Según la  IA, esto estaba resuelto hace 3.00hs. Según producción, no.".split(" ");
// ["Según", "la", "", "IA,", "esto", "estaba",  "resuelto.", "hace", "3.00hs.", "Según", "producción,", "no."]
```

Y aquí ya empiezan los problemas.

* La puntuación se queda pegada.
* Dos espacios generan elementos vacíos.
* Los saltos de línea complican el resultado.
* Si quieres separar frases, la cosa empeora todavía más.
* Y si además trabajas con otros idiomas o con emojis, `split()` se queda bastante corto.

Por suerte, existe una API nativa del navegador para esto: `Intl.Segmenter`.

## Qué es `Intl.Segmenter`

`Intl.Segmenter` permite dividir texto de forma inteligente en:

* frases
* palabras
* graphemes

Y aquí está la gracia: lo hace teniendo en cuenta el idioma y las reglas reales de segmentación.

## Separar frases

Imagina este texto:

```js
const text = "Según la IA, esto estaba resuelto. Según producción, no.";
```

Si quieres separar frases, puedes crear un segmentador así:

```js
const segmenter = new Intl.Segmenter("en", {
  granularity: "sentence",
});

const segments = segmenter.segment(text);
```

El resultado no es un array directamente, sino un iterador. Si lo conviertes a array, verás que cada elemento contiene bastante información:

```js
const segmentArray = Array.from(segments);
```

```js
[
  {
    segment: "Según la IA, esto estaba resuelto. ",
    index: 0,
    input: "Según la IA, esto estaba resuelto. Según producción, no."
  },
  {
    segment: "Según producción, no.",
    index: 36,
    input: "Según la IA, esto estaba resuelto. Según producción, no."
  }
]
```

Si solo quieres el texto segmentado, lo normal es mapearlo:

```js
const text = "Según la IA, esto estaba resuelto. Según producción, no.";

const segmenter = new Intl.Segmenter("en", {
  granularity: "sentence",
});

const segments = Array.from(segmenter.segment(text)).map(
  (segment) => segment.segment
);

console.log(segments);
```

```js
[
  "Según la IA, esto estaba resuelto. ",
  "Según producción, no."
]
```

## Separar palabras

También puedes segmentar por palabras:

```js
const text = "Según la IA, esto estaba resuelto. Según producción, no.";

const segmenter = new Intl.Segmenter("en", {
  granularity: "word",
});

const segments = Array.from(segmenter.segment(text)).map(
  (segment) => segment.segment
);

console.log(segments);
```

```js
[
  "Según",
  " ",
  "la",
  " ",
  "IA",
  ",",
  " ",
  "esto",
  " ",
  "estaba",
  " ",
  "resuelto",
  ".",
  " ",
  "Según",
  " ",
  "producción",
  ",",
  " ",
  "no",
  "."
]
```

Aquí pasa algo curioso: el resultado incluye espacios y signos de puntuación.

Eso puede parecer raro al principio, pero en realidad tiene sentido. La API no intenta adivinar qué quieres filtrar, solo te da una segmentación correcta.

## Filtrar solo palabras reales

La buena noticia es que cada segmento incluye una propiedad llamada `isWordLike`.

Eso te permite quedarte solo con las palabras “de verdad”:

```js
const text = "Según la IA, esto estaba resuelto. Según producción, no.";

const segmenter = new Intl.Segmenter("en", {
  granularity: "word",
});

const words = Array.from(segmenter.segment(text))
  .filter((segment) => segment.isWordLike)
  .map((segment) => segment.segment);

console.log(words);
```

```js
[
  "Según",
  "la",
  "IA",
  "esto",
  "estaba",
  "resuelto",
  "Según",
  "producción",
  "no"
]
```

Esto ya es bastante más útil para cosas como:

* contadores de palabras
* resaltado de texto
* búsquedas
* procesamiento de contenido
* features de edición o lectura

## Lo interesante de verdad: el `Intl`

La parte más potente de esta API no es solo que segmente texto, sino que lo hace respetando el idioma.

Y eso importa mucho más de lo que parece.

Por ejemplo, con japonés:

```js
const text = "私の猫の名前はベティです。彼女はとてもかわいいです！";

const segmenter = new Intl.Segmenter("ja", {
  granularity: "sentence",
});

const segments = Array.from(segmenter.segment(text)).map(
  (segment) => segment.segment
);

console.log(segments);
```

```js
[
  "私の猫の名前はベティです。",
  "彼女はとてもかわいいです！"
]
```

Aquí `split()` no te salva. `Intl.Segmenter`, sí.

## También sirve para emojis

Hay una tercera granularidad: `"grapheme"`.

Esto es útil cuando quieres dividir caracteres visuales reales, no unidades Unicode sueltas.

Un ejemplo clásico son los emojis:

```js
"⛔⛈️🙂😵💫".split("");
// ["⛔", "⛈", "️", "\ud83d", "\ude42", "\ud83d", "\ude35", "\ud83d", "\udcab"]
```

Ese resultado no es lo que esperas.

Con `Intl.Segmenter` la cosa cambia:

```js
const text = "⛔⛈️🙂😵💫";

const segmenter = new Intl.Segmenter("es", {
  granularity: "grapheme",
});

const segments = Array.from(segmenter.segment(text)).map(
  (segment) => segment.segment
);

console.log(segments);
```

```js
["⛔", "⛈️", "🙂", "😵", "💫"]
```

Mucho mejor.

## Cuándo tiene sentido usar esta API

`Intl.Segmenter` no es una API que vayas a usar en todos los proyectos, pero cuando la necesitas, marca bastante diferencia.

Encaja muy bien en casos como estos:

* editores de texto
* sistemas de lectura o accesibilidad
* análisis de contenido
* contadores de palabras fiables
* procesamiento multidioma
* interfaces que trabajan con emojis o caracteres complejos

Si solo quieres partir una cadena súper simple y controlada, `split()` sigue siendo suficiente.

Pero si quieres hacerlo bien de verdad, `Intl.Segmenter` es una opción mucho más robusta.

## Conclusión

Muchas veces intentamos resolver problemas de texto con `split()` porque parece lo más fácil.

Y a veces vale.

Pero en cuanto hay puntuación, espacios extra, varios idiomas o emojis, la realidad se pone juguetona.

Ahí es donde `Intl.Segmenter` brilla.

Es una de esas APIs nativas que no se mencionan tanto, pero que cuando la descubres piensas: *vale, esto debería haberlo conocido antes*.
