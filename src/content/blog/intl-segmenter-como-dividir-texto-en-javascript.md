---
title: "Intl.Segmenter API: cómo dividir texto correctamente en JavaScript"
description: "split() rompe la puntuación, los emojis y los idiomas sin espacios. Intl.Segmenter divide texto en frases, palabras y grafemas respetando el idioma."
pubDate: 2026-11-14
author: "Jorge Baumann"
type: "blog"
tags:
  - JavaScript
  - Fundamentals
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Intl.Segmenter%20API%3A%20c%C3%B3mo%20dividir%20texto%20correctamente%20en%20JavaScript&tags=JavaScript,Fundamentals"
relatedPosts:
  - "una-decada-con-javascript-y-no-sabia-esto-sobre-los-bucles"
  - "doble-igual-vs-triple-igual-en-javascript"
---

A simple vista, dividir un texto en JavaScript parece trivial. Tienes `split()`, separas por espacios y listo, ¿no?

```js
const message = "Según la  IA, esto estaba resuelto. Según producción, no.";

message.split(" ");
// [
//   "Según", "la", "", "IA,", "esto", "estaba", "resuelto.",
//   "Según", "producción,", "no."
// ]
```

Y aquí ya empiezan los problemas:

* La puntuación se queda pegada a las palabras.
* Dos espacios seguidos generan elementos vacíos.
* Los saltos de línea complican el resultado.
* Si quieres separar frases, la cosa empeora todavía más.
* Y si trabajas con otros idiomas o con emojis, `split()` se queda corto.

Por suerte, JavaScript tiene una API nativa para esto: `Intl.Segmenter`.

## Qué es `Intl.Segmenter`

`Intl.Segmenter` divide texto en frases, palabras o grafemas (los caracteres que ves en pantalla). Y aquí está la gracia: lo hace siguiendo las reglas de segmentación de cada idioma, no buscando un carácter separador.

Funciona en todos los navegadores modernos y en Node.js. Firefox fue el último en añadirla, en la versión 125 (abril de 2024), así que hoy es [Baseline](https://web.dev/baseline) ampliamente disponible.

## Separar frases

Partimos de este texto:

```js
const text = "Según la IA, esto estaba resuelto. Según producción, no.";
```

Para separarlo en frases, creas un segmentador con el idioma y la granularidad `"sentence"`:

```js
const segmenter = new Intl.Segmenter("es", {
  granularity: "sentence",
});

const segments = segmenter.segment(text);
```

El resultado no es un array, sino un iterable. Si lo conviertes con `Array.from()`, verás que cada elemento trae bastante información:

```js
Array.from(segments);
// [
//   {
//     segment: "Según la IA, esto estaba resuelto. ",
//     index: 0,
//     input: "Según la IA, esto estaba resuelto. Según producción, no."
//   },
//   {
//     segment: "Según producción, no.",
//     index: 35,
//     input: "Según la IA, esto estaba resuelto. Según producción, no."
//   }
// ]
```

Casi siempre solo te interesa el texto de cada segmento, así que para el resto del post uso esta pequeña función:

```js
const segmentText = (text, granularity, locale = "es") =>
  Array.from(
    new Intl.Segmenter(locale, { granularity }).segment(text),
    (s) => s.segment
  );

segmentText(text, "sentence");
// ["Según la IA, esto estaba resuelto. ", "Según producción, no."]
```

## Separar palabras

Con la granularidad `"word"` obtienes las palabras:

```js
segmentText(text, "word");
// [
//   "Según", " ", "la", " ", "IA", ",", " ", "esto", " ",
//   "estaba", " ", "resuelto", ".", " ", "Según", " ",
//   "producción", ",", " ", "no", "."
// ]
```

Aquí pasa algo curioso: el resultado incluye espacios y signos de puntuación. Puede parecer raro al principio, pero tiene sentido. La API no intenta adivinar qué quieres descartar; te da la segmentación completa y tú decides.

## Filtrar solo las palabras de verdad

Para eso, cada segmento de palabra incluye la propiedad `isWordLike`, que vale `true` en las palabras y `false` en los espacios y la puntuación:

```js
const words = Array.from(
  new Intl.Segmenter("es", { granularity: "word" }).segment(text)
)
  .filter((s) => s.isWordLike)
  .map((s) => s.segment);
// [
//   "Según", "la", "IA", "esto", "estaba", "resuelto",
//   "Según", "producción", "no"
// ]
```

Esto ya es útil para contadores de palabras, búsquedas, resaltado de texto o cualquier editor. Por ejemplo, contar palabras con `split()` falla en cuanto el texto no está limpio:

```js
const messy = "Hola,mundo.  ¿Qué tal?\n¡Bien!";

messy.split(/\s+/).length; // 4 ❌ ("Hola,mundo." cuenta como una)

Array.from(
  new Intl.Segmenter("es", { granularity: "word" }).segment(messy)
).filter((s) => s.isWordLike).length; // 5 ✅
```

## Lo interesante de verdad: la parte `Intl`

La parte más potente de esta API no es que segmente texto, sino que lo hace respetando el idioma. Y eso importa más de lo que parece.

El japonés, por ejemplo, no separa las palabras con espacios. Con `split(" ")` obtienes la frase entera tal cual:

```js
const ja = "私の猫の名前はベティです。"; // "Mi gato se llama Betty."

ja.split(" ");
// ["私の猫の名前はベティです。"]

segmentText(ja, "word", "ja");
// ["私", "の", "猫", "の", "名前", "は", "ベティ", "です", "。"]
```

Aquí `split()` no tiene nada a lo que agarrarse. `Intl.Segmenter` usa un diccionario del idioma para saber dónde acaba cada palabra.

## También sirve para emojis

La tercera granularidad es `"grapheme"`, y sirve para dividir el texto en los caracteres que ve el usuario, no en unidades de UTF-16.

Los emojis son el ejemplo clásico. `split("")` los rompe en mitades sin sentido (los famosos pares sustitutos):

```js
const emojis = "⛔⛈️🙂😵‍💫";

emojis.split("");
// [
//   "⛔", "⛈", "\uFE0F", "\ud83d", "\ude42",
//   "\ud83d", "\ude35", "\u200D", "\ud83d", "\udcab"
// ]
```

Puedes pensar que el operador spread lo arregla, porque recorre el texto por *code points*. Lo arregla a medias:

```js
[...emojis];
// ["⛔", "⛈", "\uFE0F", "🙂", "😵", "\u200D", "💫"]
```

`⛈️` lleva un selector de variación invisible y `😵‍💫` son dos emojis unidos con un carácter de unión (ZWJ). Para el spread son piezas sueltas. Para `Intl.Segmenter`, no:

```js
segmentText(emojis, "grapheme");
// ["⛔", "⛈️", "🙂", "😵‍💫"]
```

La diferencia se ve todavía más clara con un emoji de familia:

| Método | Resultado para `"👨‍👩‍👧"` |
| --- | --- |
| `.length` | 8 |
| `[...text].length` | 5 |
| `segmentText(text, "grapheme").length` | 1 |

Si alguna vez has hecho un contador de caracteres con un límite (como el de un tuit), este es el método que necesitas.

## Cuándo tiene sentido usar esta API

`Intl.Segmenter` no es una API que vayas a usar en todos los proyectos, pero cuando la necesitas marca la diferencia. Encaja en editores de texto, herramientas de lectura o accesibilidad, contadores de palabras o caracteres, análisis de contenido, interfaces multidioma y cualquier sitio donde aparezcan emojis.

Si solo tienes que partir una cadena simple y controlada, como un CSV o un `"a,b,c"`, `split()` sigue siendo suficiente. En cuanto el texto lo escribe una persona, con su puntuación, sus espacios dobles, su idioma y sus emojis, `Intl.Segmenter` es la opción robusta.

Es una de esas APIs nativas de las que casi nadie habla, pero que cuando la descubres piensas: *vale, esto debería haberlo conocido antes*.

## Fuentes

- [Intl.Segmenter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter), con la referencia completa de la API.
- [ECMA-402, sección Segmenter Objects](https://tc39.es/ecma402/#segmenter-objects), la especificación de la API de internacionalización de JavaScript.
- [Unicode UAX #29: Text Segmentation](https://www.unicode.org/reports/tr29/), las reglas de segmentación en las que se basa.
