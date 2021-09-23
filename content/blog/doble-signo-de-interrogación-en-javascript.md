---
title: Operador de doble signo de interrogación en JavaScript
description: 'Una guía de como funciona el operador de doble interrogación (??) en JavaScript, también conocido como operador de Nullish Coalescing.'
created: 2021-09-10
type: blog
author: Jorge Baumann
tags:
  - JavaScript
  - ES2020
---

Si quieres saber como funciona el operador de doble signo de interrogación `??` (también conocido como **Nullish Coalescing** en JavaScript, esta es una guía para ti.

El operador de doble signo de interrogación `??` es un operador de JavaScript que nos permite obtener un valor de una expresión, si el valor de la expresión es `null` o `undefined`, en caso contrario, devuelve el valor de la expresión.

Fue añadido en la versión **ES2020** de JavaScript, y es una forma de evitar el uso de `if` anidados en JavaScript. Es muy útil cuando queremos obtener el valor de una expresión, pero no sabemos si el valor de la expresión es `null` o `undefined`.

```javascript
const alias = 'Baumann'
const user = name ?? alias

console.log(user) // 'Baumann'
```

A continuación, una guía de como funciona el operador de doble signo de interrogación en JavaScript.

Se diferencia del operador lógico `||` en que que los resultados `falsy` son ignorados.

No tiene nada que ver con el operador ternario `?` de JavaScript, que es un operador de ES5.
