---
title: "NaN en JavaScript: guía rápida para desarrolladores"
description: ¿Qué es NaN en JavaScript? En esta cheatsheet te explico todo lo que necesitas saber sobre NaN en JavaScript y cómo se generan los valores NaN en JavaScript.
pubDate: 2024-08-20
updatedDate: 2026-11-11
type: blog
author: Jorge Baumann
intro: true
tags: ["JavaScript", "Cheatsheet"]
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=NaN%20en%20JavaScript%3A%20gu%C3%ADa%20r%C3%A1pida%20para%20desarrolladores&tags=JavaScript,Cheatsheet"
---

`NaN` (_Not a Number_) es el valor que JavaScript devuelve cuando una operación numérica no puede producir un número válido, como `0 / 0` o `Number("WTF")`. Es de tipo `number` y es el único valor que no es igual a sí mismo, así que para detectarlo se usa `Number.isNaN()` y no `===`.

Esta es una chuleta (_cheatsheet_) con todo lo que hay que saber sobre NaN en JavaScript.

## Propiedades y funciones

JavaScript tiene la propiedad global `NaN` y dos funciones para verificar valores `NaN`.

### Propiedad global `NaN`

- Representa _Not a Number_ (_No es un Número_)
- Es el resultado de expresiones que deberían producir un número pero fallaron (por ejemplo, `Math.sqrt(-1)`)
- Es de tipo número: `typeof NaN === 'number'`
- `NaN` es distinto de `NaN`: `NaN === NaN` es `false`

### Función `isNaN()`

- Verifica si el valor es `NaN` después de convertirlo a un número
- Devuelve `true` si el valor es NaN
- Devuelve `true` si el valor no se puede convertir a un número (como `"Baumann"`)
- Devuelve `false` si el valor se puede convertir a un número (como `string: "36"`)
- Devuelve `false` si el valor es un número válido (como `number: 36`)

### Función `Number.isNaN()`

- Sin convertir el valor a un número, verifica si el valor es `NaN`
- Devuelve `true` si el valor es `NaN`
- Devuelve `false` para el resto de los valores

### `isNaN()` frente a `Number.isNaN()`

La diferencia está en la conversión previa: [`isNaN()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN) convierte el valor a número antes de comprobarlo y [`Number.isNaN()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) no.

| Valor       | `isNaN()` | `Number.isNaN()` |
| ----------- | --------- | ---------------- |
| `NaN`       | `true`         | `true`                |
| `"Baumann"` | `true`         | `false`               |
| `undefined` | `true`         | `false`               |
| `{}`        | `true`         | `false`               |
| `"36"`      | `false`        | `false`               |
| `36`        | `false`        | `false`               |
| `""`        | `false`        | `false`               |
| `null`      | `false`        | `false`               |

## Generando NaN

Hay varias maneras de producir un valor `NaN`.

### Convertir a número

Convertir un valor a un número que no se puede convertir a un número resulta en `NaN`.

```javascript
Number("WTF");
```

```javascript
parseInt("Baumann");
```

```javascript
parseFloat("Rambito.js");
```

### No es un número real

Hacer una operación matemática donde el resultado no es un número real resulta en `NaN`.

```javascript
0 / 0;
```

```javascript
Math.sqrt(-1);
```

```javascript
Infinity - Infinity;
```

### Operación con NaN

Hacer una operación matemática con `NaN` resulta en `NaN`.

```javascript
1 * NaN;
```

```javascript
2 + NaN;
```

```javascript
NaN / NaN;
```

### Forma indeterminada

Operaciones que están en formas indefinidas producen `NaN`.

```javascript
undefined * 2;
```

```javascript
undefined + undefined;
```

### Operaciones con cadena de texto

Hacer una operación con un string que no se puede convertir a un número produce `NaN`, excepto las operaciones de suma, que unen los valores.

```javascript
"Rambito.js" * 2; // => NaN
```

```javascript
"Hola" + 2; // => "Hola2"
```

## Extra 🚀

<details>
  <summary>
    🤯 Si le preguntas a Siri "¿Cuánto es 0 dividido por 0?", te dirá esto:
  </summary>

Hace algunos años, Siri respondía con esta brillante respuesta:

> Imaginas que tienes 0 galletas y las repartes entre 0 amigos. ¿Cuántas galletas le tocan a cada amigo? No tiene sentido, ¿lo ves? <br/><br/> Así que el monstruo de las galletas está triste porqué no tiene galletas y tu estás triste porque no tienes amigos.

</details>

## Fuentes

- [`NaN`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/NaN), [`isNaN()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN) y [`Number.isNaN()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), en MDN.
- [`isNaN ( number )`](https://tc39.es/ecma262/#sec-isnan-number) y [`Number.isNaN ( number )`](https://tc39.es/ecma262/#sec-number.isnan), las definiciones de la especificación de ECMAScript.
