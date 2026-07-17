---
title: "Dos variables CSS distintas para el mismo color en React MUI"
description: "Revisando un componente de MUI me topé con mainChannel. Resultó ser la forma de poner opacidad a un color del theme sin inventar nada en JavaScript."
pubDate: 2026-07-13
tags:
  - CSS
  - TIL
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Dos%20variables%20para%20el%20mismo%20rojo&tags=CSS,TIL"
published: false
relatedPosts:
  - "la-gran-mentira-de-letter-spacing-en-css-que-no-sabias"
  - "la-sintaxis-secreta-de-of-s-en-nth-child-que-probablemente-estas-ignorando"
  - "personaliza-como-se-ven-los-objetos-en-las-devtools"
---

El flujo de trabajo habitual: escribes tu prompt en la IA de turno y esperas que termine, pruebas que funcione y listo, tarea completada.

Mientras revisaba los cambios que me había hecho la IA, me tuve que parar en estas dos líneas de un componente de React:

```css
border-top: 2px solid var(--mui-palette-error-main);
background-color: rgb(var(--mui-palette-error-mainChannel) / 0.2);
```

Mismo color. Dos variables distintas. La primera, `--mui-palette-error-main`, devuelve un hex: `#E81010`. La segunda, `mainChannel`, devuelve solo los canales: `232 16 16`.

Me pareció redundante. Probé a cambiar `mainChannel` por `main`. En el borde funcionaba. En el fondo, no.

No puedes meter un hex dentro de `rgb(var(...) / 0.2)` y esperar que el navegador le calcule la opacidad. El formato no encaja: `rgb()` espera canales numéricos, no un color ya resuelto.

Ahí está el truco. Con `cssVariables: true` en `createTheme()`, MUI genera las dos versiones a propósito. `main` para el color sólido. `mainChannel` para cuando necesitas el mismo tono pero más transparente — borde al 100%, fondo al 20%, en el ejemplo.

Lo bueno es que si cambias el theme o pasas a dark mode, las dos siguen sincronizadas. Nada de hardcodear hex ni tirar de la utilidad `alpha()` de MUI en JS.

Ahora lo miro y me parece obvio, pero la primera vez me costó varios minutos y un paseo por DevTools.
