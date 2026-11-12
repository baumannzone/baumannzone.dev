---
title: "El bloque finally en JavaScript no es lo que parece"
description: "¿Realmente sabes qué hace el bloque finally en un try catch? Descubre cómo funciona el bloque finally en JavaScript y por qué puede ser que lo estés usando mal."
pubDate: 2024-10-13
updatedDate: 2026-11-11
tags: ["JavaScript", "TIL"]
author: "Jorge Baumann"
intro: true
type: "blog"
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=El%20bloque%20finally%20en%20JavaScript%20no%20es%20lo%20que%20parece&tags=JavaScript,TIL"
---

En JavaScript, un `return` dentro de un bloque `finally` sustituye a cualquier `return` o error de los bloques `try` y `catch`: la función devuelve el valor de `finally` y la excepción se pierde sin avisar.

Cuando pensamos en manejo de errores en JavaScript, lo primero que se nos viene a la cabeza es el clásico `try/catch`. Pero hay un tercer componente en este duo que pasamos por alto: el bloque `finally`.

```js
try {
  // Código que puede lanzar un error
} catch (err) {
  // Código que maneja el error
} finally {
  // Código que siempre se ejecuta 🤔
}
```

Aunque su propósito principal es asegurarse de que un conjunto de instrucciones siempre se ejecute, independientemente de lo que ocurra en el bloque `try` o `catch`, esconde un detalle que puede cambiar completamente el flujo de una función.

## ¿Qué hace exactamente el bloque finally?

El bloque `finally` está diseñado para ejecutar código sin importar el resultado de los bloques `try` o `catch`. Es ideal para limpiar recursos, cerrar conexiones, o cualquier tarea que deba ejecutarse de todas formas. Pero lo que realmente sorprende es que `finally` puede incluso sobrescribir valores de retorno o ignorar excepciones, sin que nos demos cuenta.

Vamos a empezar con un ejemplo simple que ilustra lo que ocurre cuando el bloque `finally` retorna un valor:

```javascript
function ejemplo1() {
  try {
    return "Primero";
  } finally {
    return "Segundo";
  }
}

// => 'Segundo'
```

Se supone que el código debería devolver 'Primero', ya que esa es la instrucción dentro del bloque `try`. Sin embargo, el bloque `finally` toma el control y devuelve 'Segundo'. Esto ocurre porque JavaScript permite que el valor de retorno de `finally` sobrescriba cualquier otro retorno previo. MDN lo documenta en el apartado sobre retornar desde un bloque `finally` de [`try...catch`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch).

## ¿Qué pasa con los errores?

Uno de los usos más comunes del bloque `try` es manejar errores. Veamos cómo se comporta el bloque `finally` cuando hay una excepción:

```javascript
function ejemplo2() {
  try {
    throw new Error("Oppps! :|");
  } catch (e) {
    return "Error capturado :)";
  } finally {
    return "Finally es el que manda :D";
  }
}

// => 'Finally es el que manda :D'
```

Incluso cuando se lanza una excepción y es capturada en el bloque `catch`, `finally` sigue devolviendo su propio valor. El retorno del `catch` queda en el olvido y el bloque `finally` toma el control otra vez.

## Excepciones atrapadas por `finally`

El comportamiento del bloque `finally` se vuelve aún más interesante cuando hay excepciones que deberían propagarse:

```javascript
function ejemplo3() {
  try {
    throw new Error("Error inicial");
  } finally {
    return "Finally captura todo";
  }
}

// => 'Finally captura todo'
```

A pesar de que lanzamos un error en el bloque `try`, el bloque `finally` interrumpe el flujo normal de las excepciones. Esto significa que no solo sobrescribe retornos, sino que también bloquea las excepciones. Hay que tener mucho cuidado, porque **podríamos estar ocultando errores** sin darnos cuenta.

## Un caso extremo

Ahora, pongamos todo junto con un ejemplo más completo:

```javascript
function ejemplo4() {
  try {
    throw new Error("Error del try");
  } catch (e) {
    throw new Error("Error del catch");
    return "Error capturado";
  } finally {
    return "Finally domina";
  }
}

// => 'Finally domina'
```

En este ejemplo, aunque estamos lanzando un segundo error dentro del bloque `catch`, el bloque `finally` sigue adelante y devuelve su valor, haciendo que los errores pasen desapercibidos.

## Conclusión

El bloque `finally` en JavaScript es útil para asegurarse de que ciertos pasos se ejecuten, pero también tiene el poder de modificar el flujo de la función, ignorar errores y sobrescribir valores de retorno. Este comportamiento puede ser peligroso si no se utiliza correctamente, ya que podríamos perder información importante.

Si usas ESLint, la regla `no-unsafe-finally` detecta justo esto: un `return`, `throw`, `break` o `continue` dentro de `finally`.

Bueno saberlo, ¿no crees?

## Fuentes

- [`try...catch`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch), en MDN.
- [The `try` Statement](https://tc39.es/ecma262/#sec-try-statement), la sección de la especificación de ECMAScript que define cómo se evalúa `finally`.
- [`no-unsafe-finally`](https://eslint.org/docs/latest/rules/no-unsafe-finally), la regla de ESLint.
