---
title: "Cuatro agentes de IA se han pasado Minecraft escribiendo JavaScript"
description: "Cuatro agentes de Gemini 4 Argon derrotan al Ender Dragon en Minecraft programando en JavaScript con Mineflayer: 27 horas, 2.783 scripts y 605 muertes."
pubDate: 2026-11-11
tags:
  - IA
  - JavaScript
  - Node.js
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Cuatro%20agentes%20de%20IA%20se%20han%20pasado%20Minecraft%20escribiendo%20JavaScript&tags=IA,JavaScript,Node.js"
relatedPosts:
  - "como-dar-mejor-contexto-a-un-agente-de-ia-para-programar"
  - "la-ia-y-el-empleo-de-los-ingenieros-de-software-que-dicen-los-datos"
---

Imagina juntar a cuatro inteligencias artificiales, meterlas en un servidor de Minecraft y decirles únicamente: **«Derrotad al Ender Dragon»**.

Sin explicarles cómo conseguir diamantes, dónde encontrar el portal o qué estrategia utilizar. Sin asignarles tareas y, sobre todo, sin escribirles el código que necesitan para jugar.

Eso es precisamente lo que han hecho unos investigadores con cuatro agentes de **Gemini 4 Argon**. Y lo han conseguido. Eso sí, han necesitado 27 horas, 2.783 programas escritos por ellos mismos y la nada despreciable cifra de **605 muertes**.

Cualquiera diría que estaban aprendiendo JavaScript 😂.

Pero lo mejor de esta historia es otra cosa: **los agentes no jugaron utilizando un teclado, un ratón o viendo la pantalla. Jugaron programando.** Y esto es lo que mola.

## Cuatro agentes, un objetivo y mucho JavaScript

El experimento, publicado el 15 de octubre de 2026 en [arXiv](https://arxiv.org/abs/2610.22319) por Maxence Faldor, Satinder Singh y Roberta Raileanu, consistía en colocar cuatro agentes de IA en un mundo de Minecraft generado aleatoriamente. El objetivo era derrotar al Ender Dragon, el jefe final del juego.

Las cifras hablan por sí solas:

- **4 agentes** de Gemini 4 Argon.
- **27 horas y 14 minutos** hasta completar el objetivo, incluidos seis reinicios del servidor.
- **2.783 programas JavaScript** escritos y ejecutados.
- **605 muertes**, 69 de ellas contra el dragón.
- **229 mensajes** intercambiados entre los agentes.
- **42 funciones auxiliares** desarrolladas por ellos mismos.

La partida se desarrolló en Minecraft Java Edition 1.20.4, en modo supervivencia, dificultad fácil y sin trucos activados. Los investigadores podían supervisar la ejecución y detenerla si era necesario, pero no intervinieron en la estrategia ni en las decisiones de los agentes.

## ¿Cómo puede una IA jugar a Minecraft usando JavaScript?

Aquí viene mi parte favorita. En lugar de utilizar técnicas tradicionales de visión artificial para interpretar imágenes y simular pulsaciones de teclado, los agentes utilizaron **[Mineflayer](https://github.com/PrismarineJS/mineflayer)**, una biblioteca open source para Node.js que permite controlar personajes de Minecraft mediante JavaScript. Y sí, puedes utilizarla tú también.

Esta biblioteca permite realizar acciones como moverse, excavar bloques, fabricar herramientas, gestionar inventarios, atacar enemigos e interactuar con otros jugadores. Además, permite consultar información sobre el estado del personaje y el entorno.

Para que te hagas una idea, este programa conecta un bot a un servidor local en modo offline y busca hierro a su alrededor (es un ejemplo para ilustrar la API, no código del paper):

```js
const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "localhost",
  username: "minero",
});

bot.once("spawn", async () => {
  await bot.waitForChunksToLoad();

  const hierro = bot.findBlock({
    matching: bot.registry.blocksByName.iron_ore.id,
    maxDistance: 64,
  });

  if (!hierro) {
    bot.chat("No veo hierro cerca");
    return;
  }

  bot.chat(`Hierro en ${hierro.position}`);
});
```

Con esta herramienta, el funcionamiento de los agentes seguía un ciclo relativamente sencillo:

1. Analizar el estado actual del personaje y del mundo.
2. Decidir qué acción realizar para avanzar hacia el objetivo.
3. Escribir un programa JavaScript utilizando Mineflayer.
4. Ejecutarlo y obtener los resultados o errores.
5. Analizar esos resultados y decidir qué hacer después.

Y repetir. Una y otra vez, durante más de 27 horas.

Por ejemplo, un agente podía decidir que necesitaba hierro, escribir un programa para localizar minerales cercanos, desplazarse hasta ellos y extraerlos. Si el programa fallaba o el personaje moría, recibía esa información e intentaba otra solución.

**No tenían un algoritmo completo para terminar Minecraft. Iban construyendo la solución mientras jugaban.**

Este ciclo recuerda al funcionamiento de las herramientas de programación asistidas por IA: analizar un problema, generar código, ejecutarlo, comprobar qué ocurre y corregir los errores. Solo que aquí el entorno de ejecución era un videojuego.

## Lo sorprendente: comenzaron a organizarse como un equipo

Nadie asignó responsabilidades concretas a los agentes. Aun así, apenas diez minutos después de empezar, uno de ellos propuso dividir el trabajo, y acabaron organizándose de forma bastante parecida a un equipo humano:

- Un agente se encargaba de conseguir alimentos y suministros.
- Otro buscaba diamantes y materiales.
- Otro fabricaba herramientas y exploraba estructuras.
- El cuarto trabajaba en la construcción del portal al Nether.

Todo esto lo coordinaban mediante el chat del propio Minecraft y un sistema de memoria compartida. No había un humano diciendo qué tenía que hacer cada uno: los agentes decidían cómo colaborar.

También aprendieron a compartir recursos, guardar materiales importantes en cofres e informar a los demás cuando descubrían algo útil. Como suele ocurrir en cualquier proyecto de software, no tardaron en aparecer los problemas.

## 605 muertes y un montón de bugs

Si hay algo que este experimento demuestra es que los agentes todavía están bastante lejos de ser infalibles. Aproximadamente el **22 % de los programas ejecutados terminaron con errores** y los personajes murieron 605 veces. Pero lo importante no es la cantidad de fallos, sino cómo consiguieron recuperarse de ellos.

En una ocasión, uno de los agentes murió llevando doce Eyes of Ender, unos objetos imprescindibles para activar el portal al End. Perderlos habría significado repetir una parte importante del trabajo. Sin embargo, los demás compartieron la posición exacta de los objetos y calcularon cuánto tiempo quedaba antes de que desaparecieran, y otro agente consiguió recuperarlos cuando faltaban apenas dos minutos y medio.

En otra situación, un enemigo destruyó objetos que habían dejado en el suelo. Los agentes analizaron lo ocurrido, identificaron la causa y compartieron instrucciones para evitar repetir el problema.

**No se limitaban a corregir el error puntual: intentaban convertir lo aprendido en conocimiento reutilizable.** Y eso nos lleva a una de las cifras más curiosas del estudio.

## Crearon sus propias funciones reutilizables

Durante la partida, los agentes desarrollaron 42 funciones auxiliares para resolver problemas que se repetían: mantener al personaje a flote en el agua, controlar desplazamientos, contar objetos del inventario o detener código que había quedado ejecutándose después de superar un tiempo límite.

Una de las soluciones que compartieron para evitar un problema con el sistema de fabricación de Mineflayer terminó apareciendo en **655 programas de los cuatro agentes**. Es decir, detectaron un comportamiento problemático, encontraron una solución y consiguieron reutilizarla entre todos.

Además, mantuvieron estado y código entre ejecuciones y utilizaron memoria persistente para conservar información importante cuando sus conversaciones se hacían demasiado largas. Es el mismo reto que aparece al programar con un asistente: [cómo dar mejor contexto a un agente de IA](/blog/como-dar-mejor-contexto-a-un-agente-de-ia-para-programar/).

No es que acabaran inventando React para Minecraft, pero algunas de estas prácticas se parecen bastante a las que utilizamos diariamente en desarrollo de software.

## También utilizaron matemáticas para encontrar el portal

Hay un detalle del experimento que me parece especialmente llamativo. Para localizar la fortaleza que contenía el portal al End, uno de los agentes lanzó dos Eyes of Ender desde posiciones diferentes. En Minecraft, estos objetos vuelan en dirección a la fortaleza más cercana.

El agente registró sus trayectorias, tomando muestras cada 50 milisegundos, y calculó el punto donde ambas direcciones se cruzaban. ¿El resultado? **Estimó la localización con un error de apenas 43 metros.**

En lugar de recorrer el mapa lanzando objetos continuamente, utilizó información del entorno para resolver un problema geométrico. Después, los agentes tuvieron que recorrer aproximadamente 1,3 kilómetros hasta llegar a la fortaleza.

Es un buen ejemplo de algo que muchas veces pasamos por alto cuando hablamos de agentes: su potencial no depende únicamente de generar código, sino también de **seleccionar qué herramientas y conocimientos utilizar para resolver cada problema**.

## ¿Y cuánto costó todo esto?

Aquí hay un matiz importante respecto a los titulares que están circulando. Se habla de un coste de 810 dólares, pero el estudio diferencia dos cantidades:

- **520 dólares:** coste estimado de las llamadas al modelo hasta derrotar al dragón.
- **810 dólares:** coste estimado de toda la sesión, incluyendo un quinto agente observador y la actividad posterior a la victoria.

Estas cifras están calculadas utilizando los precios promocionales de la API de Gemini 4 Argon. A precios estándar, las estimaciones serían aproximadamente el doble.

Durante la ejecución se realizaron unas 24.000 llamadas al modelo, procesando alrededor de 1.350 millones de tokens de entrada, de los cuales el 91 % se sirvieron desde caché. No estamos hablando precisamente de un jugador optimizado para competir en un speedrun.

## Pero cuidado: no es exactamente como lo están contando

Hasta aquí todo suena espectacular, pero conviene aclarar algunas cosas.

**Primero:** los agentes no estaban viendo Minecraft como lo hacemos nosotros. Mineflayer les proporcionaba información estructurada sobre posiciones, bloques, inventarios e incluso estados internos del dragón que un jugador humano no puede consultar directamente. También disponían de un sistema de búsqueda de caminos que automatizaba parte de la navegación.

**Segundo:** aunque nadie les proporcionó una estrategia específica, los agentes sí tenían conocimientos previos sobre Minecraft y Mineflayer adquiridos durante el entrenamiento del modelo. No aprendieron las reglas del juego desde cero.

**Tercero:** los investigadores prepararon la infraestructura, las herramientas de ejecución y el sistema de memoria. Los agentes escribieron la lógica que utilizaron durante la partida, pero no construyeron todo el entorno por sí mismos.

**Y cuarto:** el estudio describe una única ejecución, que fue exitosa. Esto no permite saber qué porcentaje de partidas conseguirían completar si repitiésemos el experimento cien veces.

Los propios investigadores reconocen estas limitaciones. Por tanto, no estamos ante una demostración de que una IA puede resolver de forma autónoma cualquier problema complejo, pero sí ante un buen ejemplo de ejecución autónoma prolongada, coordinación y recuperación de errores.

## ¿Qué tiene que ver Minecraft con el futuro del desarrollo de software?

Para mí, esta es la verdadera noticia. No que cuatro inteligencias artificiales hayan derrotado a un dragón, sino que **cuatro agentes de programación hayan conseguido colaborar durante más de un día, generar miles de programas, detectar errores, compartir soluciones y mantener un objetivo común sin que una persona tuviera que dirigir cada paso**.

Minecraft es simplemente el entorno elegido para demostrar esas capacidades. Hoy hablamos de buscar diamantes, conseguir recursos y construir portales, pero lo que se está poniendo a prueba es relevante para escenarios mucho más cercanos a nuestro trabajo:

- Agentes que trabajan en distintas partes de una aplicación.
- Sistemas que identifican y resuelven dependencias entre tareas.
- Herramientas capaces de compartir contexto y soluciones.
- Procesos que se recuperan de errores sin detener todo el flujo de trabajo.
- Agentes que mantienen objetivos y estado durante ejecuciones prolongadas.

Por supuesto, conseguir que algo funcione en Minecraft no garantiza que un equipo de agentes pueda construir y mantener una aplicación empresarial de forma fiable. En producción aparecen requisitos ambiguos, usuarios reales, sistemas heredados, restricciones de seguridad y decisiones de producto que no pueden reducirse a derrotar un enemigo. Por ahora seguimos necesitando supervisión y validación humana.

Pero el experimento permite observar algo importante: **los agentes ya no se limitan a responder preguntas o generar pequeños fragmentos de código. También pueden ejecutar procesos de trabajo complejos durante periodos prolongados**.

### Mi reflexión

Llevamos años viendo cómo la IA pasa de autocompletar código a generar funciones, componentes y aplicaciones enteras. Ahora estamos viendo experimentos donde varios agentes comparten objetivos, se especializan, desarrollan herramientas propias y se recuperan de sus errores.

Todavía queda bastante camino por recorrer, especialmente en fiabilidad y eficiencia. Pero creo que el cambio de fondo no consiste en que la IA escriba JavaScript más rápido que nosotros, sino en que empieza a ser capaz de **organizar y ejecutar procesos completos de desarrollo utilizando código como herramienta**. Qué supone eso para nuestro trabajo lo repasé en [La IA y el empleo de los ingenieros de software: qué dicen los datos](/blog/la-ia-y-el-empleo-de-los-ingenieros-de-software-que-dicen-los-datos/).

Y si para demostrarlo han tenido que morir 605 veces en Minecraft, al menos podemos decir que se han tomado bastante en serio aquello de aprender de los errores.

## Fuentes
- [Versión HTML completa del estudio](https://arxiv.org/html/2610.22319v1)
- [Mineflayer — repositorio oficial en GitHub](https://github.com/PrismarineJS/mineflayer)
