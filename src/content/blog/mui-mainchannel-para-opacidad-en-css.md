---
title: "`main` vs `mainChannel` en MUI: mismo color, distinto formato"
description: "Por qué MUI genera main y mainChannel para un mismo color, y cuándo usar cada variable CSS para aplicar transparencia sin JavaScript."
pubDate: 2026-07-13
tags:
  - CSS
  - TIL
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=main%20vs%20mainChannel%20en%20MUI&tags=CSS,TIL"
published: false
relatedPosts:
  - "la-gran-mentira-de-letter-spacing-en-css-que-no-sabias"
  - "la-sintaxis-secreta-de-of-s-en-nth-child-que-probablemente-estas-ignorando"
  - "personaliza-como-se-ven-los-objetos-en-las-devtools"
---

Estaba revisando los cambios que me habia hecho la IA de un componente de React construido con MUI cuando encontré estas dos líneas:

```css
border-top: 2px solid var(--mui-palette-error-main);
background-color: rgb(var(--mui-palette-error-mainChannel) / 0.2);
```

El borde y el fondo usaban el mismo rojo, pero mediante dos variables diferentes. Parecía una duplicación innecesaria, así que sustituí `mainChannel` por `main`.

El borde siguió funcionando. El fondo no.

Cambiar una palabra acababa de romper el color. Tocaba abrir DevTools.

## Mismo rojo, distinto formato

Con el inspector del navegador pude ver qué contenía realmente cada variable:

```css
--mui-palette-error-main: #e81010;
--mui-palette-error-mainChannel: 232 16 16;
```

El misterio estaba en la representación. Las dos variables describían el mismo rojo, pero en formatos distintos. La pregunta es, ¿por qué?

`main` contiene un color completo expresado en hexadecimal. `mainChannel` contiene únicamente sus canales RGB (rojo, verde y azul) separados por espacios y sin el canal alfa.

No son dos tonos parecidos ni dos valores que MUI mantenga duplicados porque sí. Uno es el color completo y el otro solo contiene sus ingredientes.

## `var()` sustituye, no transforma

Una variable CSS no conoce el significado de su contenido. `var()` se limita a colocar ese contenido en el punto donde la utilizas.

Al sustituir `mainChannel` por `main`, el navegador terminaba evaluando algo equivalente a esto:

```css
/* ❌ Un hexadecimal no funciona con RGB */
background-color: rgb(#e81010 / 0.2);

/* ✅ Tres canales RGB seguidos de un valor alfa sí */
background-color: rgb(232 16 16 / 0.2);
```

La sintaxis de `rgb()` espera los canales numéricos antes de la barra y la opacidad después. Un hexadecimal ya representa un color completo, así que no encaja en el lugar reservado para esos canales.

El borde puede usar `main` porque `border-color` espera un color completo. El fondo necesita `mainChannel` porque queremos construir otro color con los mismos canales y un alfa de `0.2`.

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

Como `main` y `mainChannel` nacen del mismo color del tema, permanecen sincronizados cuando cambia la paleta o el esquema de color.

No necesitas repetir el hexadecimal ni calcular la transparencia con JavaScript. El tema proporciona los canales y el navegador compone el resultado.

## Conclusión

- Usa `main` cuando necesites aplicar el color sólido.
- Usa `mainChannel` dentro de `rgb()` o `rgba()` cuando quieras controlar su opacidad.

Ahora me parece obvio, pero descubrirlo me llevó un buen rato y un paseo por las DevTools.

Dos variables de un mismo color pero con responsabilidades diferentes.


Puedes consultar más detalles en la [documentación de los color channel tokens de MUI](https://mui.com/material-ui/customization/css-theme-variables/usage/#color-channel-tokens).