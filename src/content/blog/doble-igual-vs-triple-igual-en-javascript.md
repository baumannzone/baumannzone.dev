---
title: "Doble igual (==) vs triple igual (===) en JavaScript"
description: "¿Usas == y === como si fueran lo mismo? ⚠️ Aprende la diferencia entre igualdad débil y estricta en JavaScript, y el único caso en el que == tiene sentido."
pubDate: 2025-04-16
updatedDate: 2026-11-17
type: blog
author: Jorge Baumann
intro: true
tags:
  - JavaScript
  - Fundamentals
relatedPosts:
  - "nan-en-javascript-guia-rapida"
  - "doble-signo-de-interrogacion-en-javascript"
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Doble%20igual%20(%3D%3D)%20vs%20triple%20igual%20(%3D%3D%3D)%20en%20JavaScript&tags=JavaScript,Fundamentals"
---

En JavaScript, `===` (triple igual) compara valor y tipo sin convertir nada, mientras que `==` (doble igual) convierte primero los operandos a un tipo común y después compara. Por eso `"1" === 1` es `false` y `"1" == 1` es `true`.

A `===` se le llama **igualdad estricta** y a `==`, **igualdad débil**. Te explico cómo funciona cada uno, por qué `==` da tantas sorpresas y el único caso en el que tiene sentido usarlo.

## TL;DR dogmático

Usa siempre `===` y olvídate de `==`. La única excepción razonable es `valor == null`, y más abajo te cuento por qué.

## El operador de igualdad estricta (`===`)

El operador `===` compara tanto el valor como el tipo de dato de los operandos. Solo devuelve `true` si ambos son exactamente iguales, y nunca convierte un tipo en otro.

Hay dos reglas que debes recordar:

- **Con primitivos** (`number`, `string`, `boolean`, `null`, `undefined`…), compara el tipo y el valor.
- **Con objetos** (objetos, arrays y funciones), compara la referencia: si los dos apuntan al mismo objeto en memoria.

Sí, suena simple... hasta que comparas dos arrays vacíos y te preguntas por qué JavaScript te odia.

### Igualdad con primitivos

Con primitivos, `===` verifica que tanto el tipo como el valor sean iguales.

- Si el **tipo** es el mismo pero el **valor** no, obtendrás `false`.
- Si el **tipo** es distinto, también obtendrás `false`, aunque a simple vista parezcan el mismo valor.
- Solo si el **tipo** y el **valor** son exactamente iguales, obtendrás `true`.

```javascript
10 === 10; // true. Mismo tipo, mismo valor.
10 === 20; // false. Mismo tipo, valor diferente.
10 === "10"; // false. Distinto tipo: number y string.

false === false; // true. Mismo tipo, mismo valor.
false === true; // false. Mismo tipo, distinto valor.
false === "false"; // false. Distinto tipo: boolean y string.
```

Hay dos excepciones:

- [`NaN`](/blog/nan-en-javascript-guia-rapida/) no es igual a nada, ni siquiera a sí mismo, así que `NaN === NaN` es `false`.
- `+0` y `-0` se consideran iguales, así que `+0 === -0` es `true`.

Parece bastante simple, pero esta regla se rompe en cuanto empezamos a comparar objetos.

### Igualdad con objetos

Con objetos, arrays y funciones, `===` no mira lo que tienen dentro, sino la referencia, es decir, la ubicación en memoria.

```javascript
({}) === {}; // false. Mismo contenido, diferente referencia. ❌
[] === []; // false. Mismo contenido, diferente referencia. ❌
({ age: 1 }) === { age: 1 }; // false. Mismo contenido, diferente referencia. ❌
```

Los paréntesis no son decorativos: si una línea empieza por `{`, JavaScript la lee como un bloque de código y no como un objeto.

Aunque cada pareja tiene el mismo tipo y lo que parece el mismo contenido, cada literal crea un objeto nuevo en otra posición de memoria. Por eso siempre obtenemos `false`.

Se ve más claro si asignamos dos variables a la misma referencia y las comparamos:

```javascript
const obj1 = {
  dog: "Rambo",
};
const obj2 = obj1;

obj1 === obj2; // true. Misma referencia. ✅
```

Tanto `obj1` como `obj2` apuntan al mismo lugar en memoria, por eso obtenemos `true`.

En resumen, una vez que entiendes lo de las referencias, `===` funciona como esperarías.

Aquí tienes una tabla de igualdad triple igual para que parezca que todo en JavaScript tiene sentido:

![Tabla de igualdad con ===: cada valor solo es igual a sí mismo. Las únicas coincidencias están en la diagonal, salvo NaN, [], {}, [[]], [0] y [1], que no son iguales ni a sí mismos al compararlos como literales](../../assets/blog/doble-igual-vs-triple-igual-en-javascript/triple-equal.png)

---

## El operador de igualdad débil (`==`)

Lo más probable es que `==` no se comporte como esperas.

Aquí tienes solo algunos ejemplos para que empieces a desconfiar de todo:

```javascript
"1" == 1; // true
false == 0; // true
null == undefined; // true
0 == ""; // true
"0" == false; // true
[1] == true; // true
```

**¿Qué? ¿Por qué? ¿Cómo? ¿Por qué JavaScript es tan raro?** 🤔

Fíjate que cada comparación se hace entre tipos diferentes. Con `===`, todas devolverían `false`.

Sin embargo, `==` tiene sus propias ideas sobre cómo deberían funcionar las cosas: ignora el sentido común y realiza una conversión de tipo (_type coercion_) antes de comparar.

Esto puede dar lugar a resultados inesperados, especialmente si no entiendes bien cómo y cuándo hace esa conversión. Las reglas principales son estas:

- **Texto y número**: el texto se convierte en número. En `"1" == 1`, `"1"` pasa a ser `1`, y `1 == 1` da `true`.
- **Booleano y cualquier otra cosa**: el booleano se convierte en número (`true` es `1` y `false` es `0`). Por eso `"0" == false` acaba siendo `0 == 0`.
- **Objeto y primitivo**: el objeto se convierte en primitivo. En `[1] == true`, el array `[1]` pasa a ser el texto `"1"`, `true` pasa a ser `1`, y al final se compara `1 == 1`.
- **`null` y `undefined`**: son iguales entre sí y no son iguales a nada más. No se convierten en número, así que `null == 0` es `false`, aunque `null` "parezca" un cero.

Es esa etapa de coerción de tipos la que hace que `==` sea tan impredecible como tus decisiones de UX.

Los mismos ejemplos con los dos operadores:

| Comparación          | Con `==` | Con `===` |
| -------------------- | -------- | --------- |
| `"1"` y `1`          | `true`   | `false`   |
| `false` y `0`        | `true`   | `false`   |
| `null` y `undefined` | `true`   | `false`   |
| `0` y `""`           | `true`   | `false`   |
| `"0"` y `false`      | `true`   | `false`   |
| `[1]` y `true`       | `true`   | `false`   |
| `null` y `0`         | `false`  | `false`   |

Las reglas exactas de esa conversión están en el algoritmo `IsLooselyEqual` de la especificación de ECMAScript.

Aquí tienes la misma tabla de igualdad que vimos antes, pero ahora con `==`:

![Tabla de igualdad con ==: además de la diagonal, aparecen muchas coincidencias entre tipos distintos. Por ejemplo, true es igual a 1, "1" y [1]; false es igual a 0, "0", "", [], [[]] y [0]; y null solo es igual a undefined](../../assets/blog/doble-igual-vs-triple-igual-en-javascript/doble-equal.png)

## El único caso en el que `==` tiene sentido: `== null`

Como `null` y `undefined` solo son iguales entre sí, `valor == null` comprueba las dos cosas a la vez:

```javascript
let valor;

valor == null; // true, porque es undefined
valor === null || valor === undefined; // true, lo mismo pero más largo

0 == null; // false
"" == null; // false
false == null; // false
```

A diferencia de `!valor`, no confunde `0`, `""` ni `false` con un valor vacío. Es la misma idea que usa el operador [`??`](/blog/doble-signo-de-interrogacion-en-javascript/), que solo actúa con `null` o `undefined`.

Es un atajo tan habitual que la regla `eqeqeq` de ESLint tiene una opción para permitirlo y prohibir el resto de usos de `==`:

```javascript
// eslint.config.js
export default [
  {
    rules: {
      eqeqeq: ["error", "always", { null: "ignore" }],
    },
  },
];
```

Si en tu equipo no os convence, `valor === null || valor === undefined` hace lo mismo sin sorpresas.

## Bonus: `Object.is()`

Existe una tercera forma de comparar: `Object.is()`. Funciona igual que `===`, salvo en las dos excepciones que vimos antes:

```javascript
Object.is(NaN, NaN); // true. Con ===, false.
Object.is(+0, -0); // false. Con ===, true.
```

En el día a día no la vas a necesitar mucho, pero viene bien saber que existe cuando trabajas con `NaN`.

## Conclusión

En el universo de JavaScript, donde todo puede ser un número, una cadena o una mentira disfrazada de `true`, hay dos caminos: el del doble igual (`==`) y el del triple igual (`===`).

Si valoras tu tiempo y el respeto de tus compañeros de equipo, usa siempre el triple igual (`===`). Y si alguna vez usas `==`, que sea para `== null`, y a propósito.

¿Y tú? ¿Qué operador prefieres usar en tu código? ¿Usas `== null` o lo tienes prohibido en tu equipo? ¡Déjame tu opinión en los comentarios! 👇

## Fuentes

- [Comparadores de igualdad e identidad](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness), la guía de MDN que compara `==`, `===` y `Object.is()`.
- [Igualdad estricta (`===`)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Strict_equality) y [Comparación (`==`)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Equality), en MDN.
- [IsStrictlyEqual](https://tc39.es/ecma262/#sec-isstrictlyequal) e [IsLooselyEqual](https://tc39.es/ecma262/#sec-islooselyequal), los algoritmos de la especificación de ECMAScript.
- [La regla `eqeqeq`](https://eslint.org/docs/latest/rules/eqeqeq), en la documentación de ESLint.
