---
title: ¿Sabías que tu navegador puede hablar?
description: "La API de voz del navegador te permite incorporar datos de voz a tus aplicaciones web. ¡Haz que tu navegador hable!"
pubDate: 2018-10-22
updatedDate: 2025-04-10
type: blog
author: Jorge Baumann
tags:
  - Web
  - JavaScript
---

La **Web Speech API** permite añadir voz a tus aplicaciones web directamente desde el navegador.

Se divide en dos partes:

- **SpeechSynthesis**: convierte texto en voz (TTS).
- **SpeechRecognition**: convierte voz en texto (STT).

En este artículo nos centramos en **SpeechSynthesis**, la parte que hace que el navegador hable.
Puedes trastear con ella en esta demo: https://web-speech-api-js.netlify.com

## Haciendo que el navegador hable 🗣

La mayoría de navegadores modernos ya implementan esta API. No me gusta hablar como si estuviéramos en 2005, pero conviene decirlo: asegúrate de que tu navegador la soporta.

¿Usas Chrome, Firefox o Safari actualizados? Debería funcionar.
¿Estás en móvil? Ahí puede haber más problemas.

Puedes comprobar la compatibilidad aquí: [https://caniuse.com/#feat=speech-synthesis](https://caniuse.com/#feat=speech-synthesis).

![Captura de pantalla de Can I Use de la Web Speech API](../../assets/blog/sabias-que-tu-navegador-puede-hablar/can-i-use.png)

A primera vista, el soporte parece bastante bueno, pero tiene truco.
El soporte _completo_ está más limitado de lo que parece.

Algunas funcionalidades, como elegir la **voz**, ajustar el **tono** o la **velocidad**, pueden no estar disponibles dependiendo del navegador, sistema operativo o dispositivo que estés usando.

## Demo Time

Todos los ejemplos estan probados en Chrome.

```javascript
// Lo primero es obtener el sintetizador de voz
const synth = window.speechSynthesis;

// Creamos un objeto con el texto que queremos que diga
const text = "Soy Jorge Baumann, @baumannzone en Instagram";
const utterThis = new SpeechSynthesisUtterance(text);

// Le decimos al navegador que hable
synth.speak(utterThis);
```

Fácil, ¿verdad?

Ahora te toca a ti: cambia el texto y haz que tu navegador hable.

### Todo en una línea

Pega esto en la consola del navegador y escucha la magia 🎩

```js
window.speechSynthesis.speak(
  new SpeechSynthesisUtterance(
    "¡Hola! Soy Jorge Baumann (@baumannzone en Instagram)",
  ),
);
```

## Controles adicionales

Hasta ahora has hecho que el navegador hable con los valores por defecto. Vamos a ver cómo ajustar la voz, la velocidad y el tono.

### Velocidad y tono

Por defecto, ambos tienen un valor de `1`, pero puedes modificarlos fácilmente así:

```javascript
const text = "Visita baumannzone.dev para más desarrollo web pro";

const synth = window.speechSynthesis;
const utterThis = new SpeechSynthesisUtterance(text);

// Cambiar el tono (por defecto es 1)
utterThis.pitch = 1.5;

// Cambiar la velocidad (por defecto es 1)
utterThis.rate = 1.5;

synth.speak(utterThis);
```

Una vez más, te toca a ti. Juega con los valores de `pitch` y `rate` para ver cómo cambia la voz.

## Houston, tenemos un problema

Si has tenido problemas al cambiar la velocidad o el tono, probablemente usaste valores fuera del rango permitido.

Por ejemplo, un tono (`pitch`) de 3 no funcionará correctamente.

Entonces, ¿cuáles son los rangos válidos?

### `pitch`: valores permitidos

Según la especificación, el tono puede ir de `0` (más grave) a `2` (más agudo). El valor por defecto es `1`.

### `rate`: valores permitidos

La velocidad (rate) puede ir de `0.1` a `10`. El valor por defecto también es `1`.

---

## ¡Cambia la voz!

En esta sección vas a ver cómo cambiar la **voz** que usa el navegador al hablar, usando JavaScript.

Para hacerlo, primero necesitas obtener el listado de voces disponibles con `getVoices()`.

```javascript
speechSynthesis.onvoiceschanged = () => {
  const text = "Puedes seguirme en Bluesky @baumannzone";
  const synth = speechSynthesis;
  const voices = synth.getVoices();
  const utterThis = new SpeechSynthesisUtterance(text);

  utterThis.voice = voices.find((voice) => voice.name === "Jorge");

  synth.speak(utterThis);
};
```

### Hot tip 🌶️

La lista de voces se carga de forma **asíncrona**, así que necesitas esperar a que se dispare el evento `onvoiceschanged` antes de acceder a `getVoices()`.

Dato curioso: una de las voces en español se llama **Jorge**. Venga, ¡vamos a usarla!

El ejemplo con el evento `onvoiceschanged` y seleccionando la voz de `Jorge` quedaría así:

```javascript
speechSynthesis.onvoiceschanged = () => {
  const text = "Soy Jorge Baumann, @baumannzone en Instagram.";
  const synth = speechSynthesis;
  const voices = synth.getVoices();
  const utterThis = new SpeechSynthesisUtterance(text);

  utterThis.voice = voices.find((voice) => voice.name === "Jorge");

  synth.speak(utterThis);
};
```

Y aquí tienes un listado con algunas voces disponibles en **Chrome** en un **MacBook Pro** en el momento de escribir este artículo (2018):

![Lista de voces disponibles en el Macbook Pro](../../assets/blog/sabias-que-tu-navegador-puede-hablar/voices-list.png)

## Notas finales

- Algunos motores de voz ajustan sus propios límites. Por ejemplo, aunque el tono (`pitch`) suele llegar hasta `2`, en algunos casos solo llega a `1.8`.
- Si asignas un valor fuera del rango soportado, se usará el valor por defecto. Por ejemplo, si el máximo es `1.8` y le pones 2, usará `1`.
- ¿Sabías que también puede leer emojis? Prueba con 🦄 😂 👌 🐶 y verás.
- Algunos símbolos raros como `⍾` o `⌘` no se reproducen correctamente.
- Si has llegado hasta aquí y has trasteado con la [demo](https://web-speech-api-js.netlify.app/), ya sabes por qué en la práctica los valores útiles de velocidad suelen estar entre 0.46 y 3.6, aunque la spec diga 0.1 a 10.

---

Eso es todo.

Ahora ya sabes cómo hacer que tu navegador hable, controle el tono, la velocidad y hasta cambie de voz.
Una API del navegador curiosa, divertida y con más potencial del que parece a simple vista.

Ideal para proyectos accesibles, experimentos creativos o simplemente para fardar un poco.

¿Te mola? Enséñame lo que has hecho. Búscame en [Instagram](https://www.instagram.com/baumannzone/) como `@baumannzone`.
