---
title: "JavaScript WTF #1 · ¿Por qué every() devuelve true en un array vacío?"
description: "¿Cómo puede [].every(() => false) devolver true en JavaScript? Te explico la verdad vacía, su pareja some() y cuándo ese true se convierte en un bug."
pubDate: 2026-11-27
intro: true
tags: ["JavaScript", "JavaScript WTF"]
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=JavaScript%20WTF%20%231%20%C2%B7%20%C2%BFPor%20qu%C3%A9%20every()%20devuelve%20true%20en%20un%20array%20vac%C3%ADo%3F&tags=JavaScript,JavaScript%20WTF"
relatedPosts:
  - "nan-en-javascript-guia-rapida"
  - "doble-igual-vs-triple-igual-en-javascript"
---

Abres un formulario para enviar un PDF. Todavía no has elegido ningún archivo y el botón de enviar ya está activo. La validación parece bastante razonable:

```js
const archivos = [];
const esPDF = archivo => archivo.type === "application/pdf";

archivos.every(esPDF); // true
```

Ahora, el caso extremo: ¿qué pasa si la función que le pasas devuelve **siempre** `false`?

```js
[].every(() => false); // true 🤨
```

Con esa línea arranca [JavaScript WTF](/tags/javascript-wtf/), una serie sobre las rarezas del lenguaje.

La respuesta corta: `every()` solo devuelve `false` cuando encuentra un elemento que no cumple la condición. Un array vacío no tiene elementos, así que nunca encuentra ninguno y devuelve `true`. Tu función ni siquiera se ejecuta: si le pones un `console.log` dentro, la consola se queda vacía. Esto tiene nombre, verdad vacía, y más abajo te explico por qué tiene sentido.

## ¿Cómo funciona `every()` por dentro?

Esta es una versión simplificada:

```js
function every(array, cumple) {
  for (const elemento of array) {
    if (!cumple(elemento)) {
      return false;
    }
  }

  return true;
}
```

Con un array vacío, el bucle no da ni una vuelta. Nunca llega al `return false` y acaba en el `return true` del final.

## Por qué tiene sentido: la verdad vacía

Imagina que te digo: "todos los archivos que has elegido son PDF". Para demostrar que miento, te basta con enseñarme uno que no lo sea, un `.docx` por ejemplo. Pero si no has elegido ninguno, no tienes nada que enseñarme. No puedes demostrar que miento, así que la frase se da por buena.

Eso es la **verdad vacía**: cualquier frase del tipo "todos cumplen X" es verdadera cuando no hay ningún elemento.

`some()` hace otra pregunta: "¿hay al menos uno que cumpla?". Para decir que sí, necesita encontrar uno. Con un array vacío no lo encuentra, así que devuelve `false`. Así se comportan los dos según lo que elijas:

| Archivos elegidos | `.every(esPDF)` | `.some(esPDF)` |
| --- | --- | --- |
| Ninguno | `true` | `false` |
| Un PDF | `true` | `true` |
| Un PDF y un DOCX | `false` | `true` |
| Solo un DOCX | `false` | `false` |

No es cosa de JavaScript. Python tiene la misma pareja, `all()` y `any()`, y Rust también, con `Iterator::all()` e `Iterator::any()`. En todos, "todos" da verdadero con una lista vacía y "al menos uno" da falso.

## Entonces, ¿cuándo activo el botón?

Vuelve al formulario. Para activar el botón tienen que cumplirse **dos cosas**: que haya al menos un archivo y que todos sean PDF. `every()` solo comprueba la segunda, así que la primera la añades tú:

```js
function puedeEnviar(seleccion) {
  // input.files es un FileList, no un array: no tiene every()
  const archivos = Array.from(seleccion);
  return archivos.length > 0 && archivos.every(esPDF);
}

puedeEnviar([]);                              // false
puedeEnviar([{ type: "application/pdf" }]);   // true
puedeEnviar([{ type: "image/png" }]);         // false
```

¿Y si adjuntar archivos fuera **opcional**? Entonces `archivos.every(esPDF)` a secas es justo lo que necesitas. Sin archivos, devuelve `true` y el usuario puede enviar el formulario. El mismo `true` que antes era un bug ahora es la regla correcta.

## Fuentes

- Los algoritmos de [ECMAScript](/blog/motores-y-runtimes-de-javascript-la-diferencia-y-el-mapa-de-2026/#ecmascript-no-es-javascript-o-no-del-todo) para [`Array.prototype.every()`](https://tc39.es/ecma262/#sec-array.prototype.every) y [`Array.prototype.some()`](https://tc39.es/ecma262/#sec-array.prototype.some).
- La documentación de [`all()` en Python](https://docs.python.org/3/library/functions.html#all) y de [`Iterator::all()` en Rust](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.all).
