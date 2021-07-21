---
title: ¿Sabías que tu navegador puede hablar?
description: "La API de Web Speech (API de Voz) te permite incorporar datos de voz a tus aplicaciones web. ¡Vamos a hacer que el navegador hable!"
date: 2018-10-22
type: blog
tags:
  - Browser
  - Web Speech API
  - JavaScript
---

La **API de Web Speech** (API de Voz) te permite incorporar datos de voz a tus aplicaciones web.   
La Web Speech API tiene dos partes: **SpeechSynthesis** (Texto a voz) y **SpeechRecognition** (Reconocimiento de voz).

Si no lo sabías, sigue leyendo. Yo te explico.   
Si lo sabías pero no sabes cómo hacerlo, sigue leyendo. Yo te explico .

En este artículo vamos a explorar la parte de **SpeechSynthesis,** o API de pronunciación del navegador, o de voz, o de habla, o de … 🤔😰

![](/Users/baumannzone/code/nueva carpeta/medium-export/posts/md_1626902028444/img/1__zabatNCY0v__A8mLQ7vmQtw.png)

Antes de nada, revisa este repositorio y haz algunas pruebas en la **DEMO**: [https://web-speech-api-js.netlify.com/#/](https://web-speech-api-js.netlify.com/#/)

> Ten en cuenta que si lo abres desde un dispositivo móvil, tal vez no te funcione como es debido

### API de Pronunciación del Navegador 🗣

Los navegadores modernos han comenzado a implementar la **API de voz**, usaremos esta API para hacer que el navegador hable 😏.

Para poder usarla, lo primero que debemos comprobar es la **compatibilidad** de nuestro navegador con esta API ([**WEB Speech API**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)). Si estás usando un navegador moderno actualizado (Chrome, Firefox o Safari) no deberías tener problema.  
Puedes comprobar la compatibilidad en este enlace: [https://caniuse.com/#feat=speech-synthesis](https://caniuse.com/#feat=speech-synthesis)

![](/Users/baumannzone/code/nueva carpeta/medium-export/posts/md_1626902028444/img/1__pCosX__m9pmiODEvt9vwIEQ.png)

Aunque a simple vista el soporte parece que es bastante amplio, tiene truco, pues actualmente el soporte completo es limitado.   
Por ejemplo, algunos parámetros como la _voz_, el _tono_ o la _velocidad_ no están disponibles según el dispositivo, el navegador o el sistema operativo que estés utilizando.

### Demo Time! ️✍️

Ahora que ya sabes de qué va el tema, ¡vamos a ver cómo se hace!

```javascript
// Empezamos utilizando el sintetizador de voz 👅  
const synth = window.speechSynthesis
```

¿Has visto qué fácil? Seguimos…

```javascript
// Creamos la unidad de habla con el texto que queremos  
const text = 'Hola, soy Jorge Baumann y mi perro se llama Rambo'  
const utterThis = new SpeechSynthesisUtterance(text)
```

Y por último, hacemos que el sintetizador _hable_.

```javascript
synth.speak(utterThis)
```

El código completo se vería así:

Fácil, ¿verdad?  
Ahora es tu turno. ¡Pruébalo en la consola del navegador! ✌️


### Controles adicionales ⚙️

Ya hemos visto cómo hacer que el navegador hable con los valores por defecto. Ahora vamos a ver cómo modificar atributos como la **voz**, la **velocidad** y el **tono**.

#### Velocidad y tono

Por defecto, la velocidad y el tono tienen **valor 1**. Podemos cambiar estos valores de manera muy sencilla.   
Si seguimos con el fragmento de código anterior y queremos cambiar los valores de la velocidad o del tono, solo tenemos que hacer esto:

// Cambiamos el valor del tono (por defecto 1)  
utterThis.pitch = 1.5

// Cambiamos el valor de la velocidad (por defecto 1)  
utterThis.rate = 1.5

El ejemplo completo cambiando el tono o la velocidad de la voz quedaría así:

Es tu turno de nuevo. Pruébalo en la consola de tu navegador y cambia los valores de _pitch_ y _rate_.

### Houston, tenemos un problema 👨‍🚀

Si has intentado cambiar los valores de velocidad o tono tomando el código anterior, es probable que hayas tenido algún problema, o que los valores no funcionaran como te esperabas.

¿Qué pasa si intentas establecer un valor de `3` al tono (pitch)?   
Pues que (como seguramente hayas comprobado) no funciona como esperamos. Esto es porque nos hemos salido del rango de valores que soporta esa propiedad y se queda el valor por defecto.

Entonces… 🤔¿cuáles son los rangos soportados por cada una de las propiedades?

### **Tono / Pitch**

La especificación dice que los valores soportados para el tono van de `0` (grave) a `2` (agudo) siendo `1` el valor por defecto.

### **Velocidad** / Rate

La especificación dice que los valores soportados para la velocidad van de `0.1` a `10` siendo `1` el valor por defecto.

### ¡Cambia la voz! 🗣

Vamos a dedicar esta sección (para mí, la más divertida) a ver cómo elegir un tipo de voz dentro de nuestra aplicación javascript.

Para ello necesitamos tener el listado de voces disponibles. Puedes obtenerlo accediendo al método `getVoices()`.

// Siguiendo el ejemplo anterior  
synth.getVoices()

**¡Ojo con esto!**  
La lista de voces se carga de forma **asíncrona** a la página. Hay que esperar a que el evento `onvoiceschanged` se dispare para poder obtener el listado de voces disponibles.

Da la casualidad que hay una voz que se llama **Jorge**. Vamos a usarla.

El ejemplo completo con el evento `onvoiceschanged` y seleccionando la voz de `Jorge` quedaría así:

Este es un pequeño listado con algunas de las voces disponibles:

![](/Users/baumannzone/code/nueva carpeta/medium-export/posts/md_1626902028444/img/1____LblvYPlLGUAjE__dmai4lg.png)

> En mi caso, cuando lo pruebo en el móvil (Android), obtengo un listado menor y bastante diferente a este.

### Briconsejos 🔧

Esto os evitará unos cuantos dolores de cabeza mientras juegas con tu app de voz 😅

*   Algunos motores de síntesis de voz pueden cambiar los valores mínimos o máximos de las propiedades.   
    Por ejemplo, se puede dar el caso en el que el _tono_ en vez de tener un valor máximo de `2`, solo llegue hasta `1.8`_._
*   Si asignas un valor que se sale del umbral soportado por dicho atributo, se cogerá el valor por defecto.   
    Es decir que si en el caso anterior (dónde el valor máx. del tono es `1.8`), asignamos un valor de `1.9` se cogerá el valor por defecto (`1`).  
    Lo mismo para la velocidad.
*   Si en algún momento la aplicación deja de funcionar, reinicia el navegador (_cierra todas las pestañas_) pues hay algunos problemas que no están bien documentados aún.
*   Cada elemento del array de voces no es un objeto simple. Las voces son objetos de tipo `SpeechSynthesisVoice`, ten cuidado cuando las utilices.
*   Prueba a poner **emojis** para ver qué ocurre… (🦄 😂 👌 🐶).
*   Hay símbolos o caracteres especiales que no se van a reproducir, como por ejemplo este `⍾` o este `⌘`.

> Ahora entenderás porqué en la [demo](https://web-speech-api-js.netlify.com/#/) los valores de la velocidad van de `0.46` a `3.6` en vez de `0.1` a `10`.   
> Estos eran los valores con los que puede jugar en mi navegador (_macOS, Chrome en Español_).

Seguramente que cuando lo pruebes obtengas resultados diferentes respecto a los valores máximos y mínimos que hay en la [app](https://github.com/baumannzone/2awesome4u).

Cuando estés en la [demo](https://web-speech-api-js.netlify.com/#/custom), ves subiendo o bajando los valores poco a poco de manera progresiva para ver hasta que valor llegas. Tanto por arriba como por abajo.   
Prueba a hacer un fork del [repositorio](https://github.com/baumannzone/2awesome4u) en Github y probar cuales son los rangos máximos y mínimos que obtienes en tu dispositivo o navegador.

### Conclusiones

*   Tecnología experimental. Soporte limitado
*   Faltan por investigar otras opciones como la de `cancel`, el `pause` o el `resume` de la reproducción.
*   Hay alternativas **Cloud** más fiables, como la de [google](https://cloud.google.com/speech-to-text/).

¡Y esto es todo¡ Sé que ha sido largo, pero quería explicar bien todos los conceptos 🤓.  
Si te ha gustado lo que has leído déjame unos claps 👏 y/o hazme follow o compártelo para que más gente lo pueda leer.

### Enlaces de interés

*   **Github**: [https://github.com/baumannzone/2awesome4u/](https://github.com/baumannzone/2awesome4u/)
*   **Slides**: [https://slides.com/baumannzone/text-to-speech/#/](https://slides.com/baumannzone/text-to-speech/#/)
*   **MDN Docs**: [https://developer.mozilla.org/en-US/docs/Web/API/Web\_Speech\_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
*   **Demo**: [https://web-speech-api-js.netlify.com](https://web-speech-api-js.netlify.com)
*   **OneLine** Gist: [https://gist.github.com/baumannzone/80528b681951d84fd43d327617ddcd4e](https://gist.github.com/baumannzone/80528b681951d84fd43d327617ddcd4e)

Mientras tanto, nos vemos en [twitter](https://twitter.com/baumannzone) o en mi canal de [youtube](https://www.youtube.com/channel/UCbi2eMmxUEU0unLlmm727NA).   
¡Hasta la próxima! 👋 👋 👋 👋

Si te ha gustado este artículo, tal vez te pueda interesar este: [**Dibujando una Gameboy con CSS**](https://medium.com/@baumannsito/dibujando-una-gameboy-con-css-b78e5f148eff)

[**Dibujando una Gameboy con CSS**  
_Y animándola con Javascript_medium.com](https://medium.com/@baumannsito/dibujando-una-gameboy-con-css-b78e5f148eff "https://medium.com/@baumannsito/dibujando-una-gameboy-con-css-b78e5f148eff")[](https://medium.com/@baumannsito/dibujando-una-gameboy-con-css-b78e5f148eff)
