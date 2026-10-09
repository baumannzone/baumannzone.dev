---
title: "main vs mainChannel en MUI: mismo color, distinto formato"
description: "Al revisar código generado por IA en un proyecto React con MUI, descubrí por qué main y mainChannel usan formatos distintos."
pubDate: 2026-10-02
tags:
  - CSS
  - TIL
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=main%20vs%20mainChannel%20en%20MUI%3A%20mismo%20color%2C%20distinto%20formato&tags=CSS,TIL"
published: true
relatedPosts:
  - "la-gran-mentira-de-letter-spacing-en-css-que-no-sabias"
  - "la-sintaxis-secreta-de-of-s-en-nth-child-que-probablemente-estas-ignorando"
  - "personaliza-como-se-ven-los-objetos-en-las-devtools"
---

Estaba trabajando en un proyecto de React con Material UI (MUI) y, como siempre, revisé el código que me había generado la IA. Ahí me encontré con estas dos líneas:

```css
border-top: 2px solid var(--mui-palette-error-main);
background-color: rgb(var(--mui-palette-error-mainChannel) / 0.2);
```

Me olieron raro: el borde usaba `main` y el fondo `mainChannel` para lo que parecía el mismo rojo. Una duplicación innecesaria, pensé. Así que sustituí `mainChannel` por `main`.

El borde siguió funcionando. El fondo no.

Cambiar una palabra acababa de romper el color. Tocaba abrir DevTools.

## El mismo rojo en dos formatos

En mi tema, las variables contenían estos valores:

```css
--mui-palette-error-main: #e81010;
--mui-palette-error-mainChannel: 232 16 16;
```

`main` era un color completo en hexadecimal. `mainChannel` contenía solo los canales RGB separados por espacios, sin alfa.

`var()` no convierte un formato en otro: inserta el valor de la variable tal cual. Al cambiar `mainChannel` por `main`, el navegador recibía esto:

```css
/* No válido: rgb() espera canales, no un color completo */
background-color: rgb(#e81010 / 0.2);

/* Válido: canales RGB y alfa */
background-color: rgb(232 16 16 / 0.2);
```

El borde podía usar `main` directamente. Para dar transparencia al fondo con `rgb()`, necesitaba los canales de `mainChannel` y un alfa de `0.2`.

## Por qué MUI genera `Channel`

Al activar las variables CSS en el tema, MUI genera automáticamente tokens de canal para poder construir colores translúcidos:

```js
const theme = createTheme({
  cssVariables: true,
});
```

Estos tokens terminan en `Channel` y contienen los canales del espacio de color sin el componente alfa. La propia documentación de MUI recomienda combinarlos con la sintaxis de barra:

```css
background-color: rgba(var(--mui-palette-error-mainChannel) / 0.2);
```

MUI usa `rgba()` en sus ejemplos y yo `rgb()`, pero da igual: en CSS moderno las dos funciones son equivalentes y aceptan el alfa después de la barra.

Como `main` y `mainChannel` nacen del mismo color del tema, permanecen sincronizados cuando cambia la paleta o el esquema de color.

No necesitas repetir el hexadecimal ni calcular la transparencia con JavaScript. El tema proporciona los canales y el navegador compone el resultado.

> **Nota:** con `cssVariables: { nativeColor: true }`, MUI advierte que `*Channel` puede dejar de contener canales numéricos. En ese modo, recomienda usar `theme.alpha()` sobre el color completo.

## Lo que me llevo

- Usa `main` cuando necesites el color sólido.
- Usa `mainChannel` dentro de `rgb()` cuando quieras controlar su opacidad.

Son el mismo rojo con dos trabajos distintos. Ahora me parece obvio, pero descubrirlo me costó un buen rato en las DevTools.

Puedes consultar más detalles en la [documentación de los tokens de canal de MUI](https://mui.com/material-ui/customization/css-theme-variables/usage/#color-channel-tokens) y en su [guía de color nativo](https://mui.com/material-ui/migration/upgrade-to-native-color/#remove-usage-of-channel-tokens).
