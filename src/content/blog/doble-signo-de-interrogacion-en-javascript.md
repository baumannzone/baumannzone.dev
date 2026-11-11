---
title: Operador de doble signo de interrogación en JavaScript
description: "Una guía de cómo funciona el operador de doble interrogación (??) en JavaScript, también conocido como operador de Nullish Coalescing."
pubDate: 2021-11-10
updatedDate: 2026-11-11
type: blog
author: Jorge Baumann
tags:
  - JavaScript

ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Operador%20de%20doble%20signo%20de%20interrogaci%C3%B3n%20(??)%20en%20JavaScript&tags=JavaScript"
---

El operador de doble signo de interrogación `??` (también conocido como operador de **Fusión Nula** o **Nullish Coalescing** operator) es un operador de JavaScript que devuelve la expresión del lado derecho cuando la expresión del lado izquierdo es `null` o `undefined`. En caso contrario, devuelve la expresión del lado izquierdo.

Se diferencia de `||` en que solo reacciona ante `null` y `undefined`: valores como `0`, `''` o `false` se conservan.

![Nullish coalescing u operador de fusión nula](../../assets/blog/doble-signo-de-interrogacion-en-javascript/nullish-operator.png)

Si `name` (_izquierda_) es `null` o `undefined`, devuelve `Guest` (_derecha_); en caso contrario, devuelve `name` (_izquierda_).

Aunque el operador de Nullish Coalescing se parece al operador ternario (`?`) de JavaScript, no tiene nada que ver, son operadores totalmente diferentes.

```javascript
const name = null;
const userName = name ?? "Guest";
```

Fue añadido en la versión **ES2020** de JavaScript (a partir de [esta propuesta de TC39](https://github.com/tc39/proposal-nullish-coalescing)), y es una forma de evitar el uso de `if` anidados en JavaScript. Es muy útil cuando queremos obtener el valor de una expresión, pero no sabemos si el valor de la expresión es `null` o `undefined`. Además, nos permite asignar un valor por defecto a una expresión.

Este operador es relativamente nuevo, sin embargo este operador solo es una forma más amigable de escribir lo siguiente:

```javascript
const userName = name !== null && name !== undefined ? name : "Guest";
```

Desde mi punto de vista, el operador de nullish coalescing es más útil que el operador ternario, porque nos permite escribir menos código y es más fácil de leer.

## Diferencia entre `??` y `||`

Se diferencia del operador lógico _OR_ `||` en que los resultados _falsy_ son ignorados, excepto los recién mencionados valores `null` y `undefined`.

Los valores [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) son:

- `0`, `-0`
- `''`, `""` (cualquier cadena vacía)
- `NaN`
- `false`
- `null`
- `undefined`

Ejemplo usando el operador lógico _OR_ (`||`):

```javascript
0 || "RambitoJs"; // ==> 'RambitoJs'
"" || "RambitoJs"; // ==> 'RambitoJs'
NaN || "RambitoJs"; // ==> 'RambitoJs'
false || "RambitoJs"; // ==> 'RambitoJs'

null || "RambitoJs"; // ==> 'RambitoJs'
undefined || "RambitoJs"; // ==> 'RambitoJs'
```

Ejemplo usando el operador de fusión nula (`??`):

```javascript
0 ?? "RambitoJs"; // ==> 0
"" ?? "RambitoJs"; // ==> ''
NaN ?? "RambitoJs"; // ==> NaN
false ?? "RambitoJs"; // ==> false

null ?? "RambitoJs"; // ==> 'RambitoJs'
undefined ?? "RambitoJs"; // ==> 'RambitoJs'
```

Las dos listas, lado a lado:

| Valor       | `valor \|\| "RambitoJs"` | `valor ?? "RambitoJs"` |
| ----------- | ------------------------ | ---------------------- |
| `0`         | `"RambitoJs"`            | `0`                    |
| `""`        | `"RambitoJs"`            | `""`                   |
| `NaN`       | `"RambitoJs"`            | `NaN`                  |
| `false`     | `"RambitoJs"`            | `false`                |
| `null`      | `"RambitoJs"`            | `"RambitoJs"`          |
| `undefined` | `"RambitoJs"`            | `"RambitoJs"`          |

Este operador surge porque hay ocasiones en las que necesitas que `0` o `''` (valores _falsy_) sean valores válidos.
Al utilizar el operador de fusión nula, solo reemplazará exactamente los valores nulos e indefinidos con un valor definido.

## Fusión Nula y operadores lógicos OR y AND

Por motivos de seguridad, el doble signo de interrogación no se puede utilizar junto con los operadores OR (`||`) y AND (`&&`) de JavaScript sin un paréntesis `()` que los separe. En tal caso, se lanzará un error de tipo `SyntaxError`.

```javascript
null || undefined ?? 'RambitoJs'  // ==> SyntaxError
null && undefined ?? 'RambitoJs'  // ==> SyntaxError

// En ambos casos: Uncaught SyntaxError: Unexpected token '??'
```

Esto se debe a que JavaScript no sabe qué operador debe evaluar primero. Tienes que utilizar los paréntesis para indicar la prioridad de las evaluaciones.

Cuando le añades los paréntesis, el operador de fusión nula funciona correctamente porque evaluará primero las expresiones entre paréntesis:

```javascript
(null || undefined) ?? "RambitoJs"; // ==> 'RambitoJs'
(null && undefined) ?? "RambitoJs"; // ==> 'RambitoJs'
```

Al igual que con el operador lógico _OR_ (`||`) y con el operador lógico _AND_ (`&&`), el operador de fusión nula puede usarse varias veces en una misma expresión:

```javascript
const nickName = null;
const fullName = null;
const company = null;
const userName = nickName ?? fullName ?? company ?? "Anonymous"; // ==> 'Anonymous'
```

Esto es todo lo que necesitas saber del operador de doble interrogación (`??`) en JavaScript, también conocido como operador de Nullish Coalescing u operador de Fusión Nula.

## Fuentes

- [Operador de coalescencia nula (`??`)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing), en MDN.
- [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), la lista completa de valores _falsy_ en MDN (en inglés).
- [Propuesta de TC39 «Nullish Coalescing for JavaScript»](https://github.com/tc39/proposal-nullish-coalescing), el origen del operador.
- [Binary Logical Operators](https://tc39.es/ecma262/#sec-binary-logical-operators), la sección de la especificación de ECMAScript que define `??` y prohíbe mezclarlo con `||` y `&&` sin paréntesis.
