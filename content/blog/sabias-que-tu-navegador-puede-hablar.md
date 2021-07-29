---
title: ¿Sabías que tu navegador puede hablar?
description: 'La API de Web Speech (API de voz) te permite incorporar datos de voz a tus aplicaciones web. ¡Haz que tu navegador hable!'
created: 2018-10-22
type: blog
author: Jorge Baumann
tags:
  - HTML
  - Web Speech API
  - JavaScript
---

La **Web Speech API** (API de Voz) te permite incorporar datos de voz a tus aplicaciones web, directamente desde el navegador.  
La Web Speech API tiene dos partes:

- **SpeechSynthesis**: texto a voz.
- **SpeechRecognition**: reconocimiento de voz.

En este artículo vamos a explorar la parte de **SpeechSynthesis,** o API de pronunciación del navegador, o de voz, o de habla, o de…  
Para familiarizarte con esta tecnología te recomiendo que hagas algunas pruebas en esta web: https://web-speech-api-js.netlify.com.

## API de Pronunciación del Navegador 🗣

No me gusta hablar de navegador modernos como si estuvieramos en 2005, pero la mayoría de navegadores modernos ya tienen implementada la **API de voz**. Usaremos esta Web API para hacer que el navegador hable.

Lo primero que tienes que hacer para usar esta web API es comprobar la compatibilidad de tu navegador con dicha API.
Si estás usando un navegador moderno y actualizado (como Chrome, Firefox o Safari) no deberías tener problema. A no ser que estés en un dispositivo móvil.  
Comprueba la compatibilidad de tu navegador en este enlace: [https://caniuse.com/#feat=speech-synthesis](https://caniuse.com/#feat=speech-synthesis).

![Captura de pantalla de Can I Use de la Web Speech API](/blog/sabias-que-tu-navegador-puede-hablar/can-i-use.png)

A simple vista parece que el soporte es bastante amplio, sin embargo, tiene truco, ya que el soporte completo es limitado.  
Esto quiere decir que algunas de las _features_ como la _voz_, el _tono_ o la _velocidad_ no están disponibles según el dispositivo, el navegador o el sistema operativo que estés utilizando.

## Demo Time

**Disclaimer**: Todos los ejemplos se han probado en Chrome.

```javascript
// Lo primero es utilizar el sintetizador de voz
const synth = window.speechSynthesis

// Creamos la unidad de habla con el texto que queremos
const text = '✅ Suscribirme al canal de YouTube de Rambito JS'
const utterThis = new SpeechSynthesisUtterance(text)

// hacemos que el sintetizador _hable_.
synth.speak(utterThis)
```

Fácil, ¿verdad? Lo bueno de esto que lo puedes probar ahora mismo en la consola del navegador.

### En una línea 😎

```
window.speechSynthesis.speak(new SpeechSynthesisUtterance('¡Hola! Soy Jorge Baumann (@baumannzone en Twitch)'))
```

## Controles adicionales ⚙️

Hasta ahora has conseguido hacer que el navegador hable con los valores por defecto. A continuación vas a ver cómo modificar los atributos de voz, velocidad y tono.

### Velocidad y tono

Por defecto, la velocidad y el tono tienen valor `1`. Puedes cambiar estos valores de manera muy sencilla de la siguiente forma:

```javascript
const text = 'Suscribirme al canal de YouTube de Rambito JS ✅'

const synth = window.speechSynthesis
const utterThis = new SpeechSynthesisUtterance(text)

// Modificar el valor del tono. Por defecto vale `1`
utterThis.pitch = 1.5
// Modificar el valor de la velocidad. Por defecto vale `1`
utterThis.rate = 1.5

synth.speak(utterThis)
```

De nuevo, es tu turno. Prueba a cambiar los valores de `pitch` y `rate`.

## Houston, tenemos un problema 👨‍🚀

Si has intentado cambiar los valores de velocidad o tono es probable que hayas tenido algún problema, o que los valores no funcionaran como te esperabas.

¿Qué pasa si intentas establecer un valor de `3` al tono (_pitch_)?  
Lo que pasa es que no funciona como es debido. Esto se debe a que te has salido del rango de valores que soporta esa propiedad.

Entonces… ¿cuáles son los rangos soportados por cada una de las propiedades?

### Pitch (tono)

La especificación dice que los valores soportados para el tono van de `0` (grave) a `2` (agudo) siendo `1` el valor por defecto.

### Rate (velocidad)

La especificación dice que los valores soportados para la velocidad van de `0.1` a `10` siendo `1` el valor por defecto.

## ¡Cambia la voz! 🗣

En esta sección, verás cómo cambiar la voz del navegador con **JavaScript**.

Para poder cambiar la voz por defecto de la API de voz necesitas tener cargado el listado de voces disponibles.  
Para ello tienes que acceder al método `getVoices()`.

```javascript
speechSynthesis.onvoiceschanged = () => {
  const text = 'Puedes seguirme en instagram.com/baumannzone'
  const synth = speechSynthesis
  const voices = synth.getVoices()
  const utterThis = new SpeechSynthesisUtterance(text)
  utterThis.voice = voices.find((voice) => voice.name === 'Jorge')
  synth.speak(utterThis)
}
```

### Rambito Tip

La lista de voces se carga de forma asíncrona a la página. Tienes que esperar a que el evento `onvoiceschanged` se dispare para poder obtener el listado de voces disponibles.

¡Pero qué coincidencia! Resulta que una de las voces en español se llama **Jorge**. Venga, ¡a usarla!

El ejemplo con el evento `onvoiceschanged` y seleccionando la voz de `Jorge` quedaría así:

```javascript
speechSynthesis.onvoiceschanged = () => {
  const text = 'Soy Jorge Baumann, @baumannzone en instagram.'
  const synth = speechSynthesis
  const voices = synth.getVoices()
  const utterThis = new SpeechSynthesisUtterance(text)
  utterThis.voice = voices.find((voice) => voice.name === 'Jorge')
  synth.speak(utterThis)
}
```

Este es un listado con algunas de las voces disponibles en Chrome en un Macbook Pro:

![Lista de voces disponibles en el Macbook Pro](/blog/sabias-que-tu-navegador-puede-hablar/voices-list.png)

## Briconsejos 🔧

- Algunos motores de síntesis de voz pueden cambiar los valores mínimos o máximos de las propiedades.   
  Por ejemplo, puede darse el caso en el que el _tono_ en vez de tener un valor máximo de `2`, solo llegue hasta `1.8`.
- Si asignas un valor que se sale del umbral soportado por dicho atributo, se cogerá el valor por defecto.   
  Es decir que si en el caso anterior (dónde el valor máx. del tono es `1.8`), asignamos un valor de `1.9` se cogerá el valor por defecto (`1`).  
  Lo mismo para la velocidad.
- Si en algún momento la aplicación deja de funcionar, reinicia el navegador. Hay algunos problemas que no están bien documentados aún.
- Los elementos del array de voces no son un simple objeto. Son objetos de tipo `SpeechSynthesisVoice`, ten cuidado cuando los utilices.
- ¿Sabías que puede leer los **emojis**? Usa alguno y fíjate qué ocurre… (🦄 😂 👌 🐶).
- Hay símbolos o caracteres especiales que no se van a reproducir, como por ejemplo este `⍾` o este `⌘`.

> Si has leído hasta aquí y has jugado con la [demo](https://web-speech-api-js.netlify.com/), entenderás porque los valores de la velocidad van de `0.46` a `3.6` en vez de `0.1` a `10`.

Seguramente que cuando lo pruebes obtengas resultados diferentes respecto a los valores máximos y mínimos que hay en la [app](https://github.com/baumannzone/2awesome4u).

Cuando estés en la [demo](https://web-speech-api-js.netlify.com/#/custom), ves subiendo o bajando los valores poco a poco de manera progresiva para ver hasta que valor llegas. Tanto por arriba como por abajo. 
Prueba a hacer un fork del [repositorio](https://github.com/baumannzone/2awesome4u) en Github y probar cuales son los rangos máximos y mínimos que obtienes en tu dispositivo o navegador.

## Conclusiones

- Tecnología experimental. Soporte limitado
- En este artículo, faltan por investigar otras _features_ como la de `cancel`, el `pause` o el `resume` de la reproducción.
- Hay alternativas Cloud más fiables, como la de [google](https://cloud.google.com/speech-to-text/).

Si te ha gustado lo que has leído, compártelo para que lleguemos a más gente. Recuerda, _sharing is caring_.

## Enlaces de interés

- Repositorio GitHub [github.com/baumannzone/2awesome4u](https://github.com/baumannzone/2awesome4u/)
- Slides: [slides.com/baumannzone/text-to-speech](https://slides.com/baumannzone/text-to-speech/)

¡Hasta la próxima! 👋 👋
