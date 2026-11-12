---
title: "Qué son y cómo crear identificadores únicos (UUIDs) con JavaScript plano"
description: "Aprende a crear identificadores únicos y seguros en tus aplicaciones web con una simple línea de código y sin librerías externas."
pubDate: 2024-10-10
updatedDate: 2026-11-12
type: "blog"
tags: ["JavaScript"]
author: Jorge Baumann
intro: true
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Qu%C3%A9%20son%20y%20c%C3%B3mo%20crear%20identificadores%20%C3%BAnicos%20(UUIDs)%20con%20JavaScript%20plano&tags=JavaScript"
---

Para generar un UUID en JavaScript sin librerías basta una línea: `crypto.randomUUID()`. Devuelve un UUID (Identificador Único Universal) de versión 4 como una cadena de 36 caracteres, creada con un generador de números aleatorios criptográficamente seguro.

Este método forma parte de la API Web Crypto y está disponible en todos los navegadores modernos, en Node.js y en el resto de entornos de ejecución de JavaScript actuales. A continuación, te muestro cómo puedes utilizarlo en tus aplicaciones web.

```js
const uuid = crypto.randomUUID();
console.log(uuid);

// → 'b48087ff-b06c-41d0-9103-b96c90d7d44a'
```

En el navegador `crypto` es lo mismo que `window.crypto`. Escribirlo sin `window` hace que el mismo código funcione también en _web workers_ y en Node.js, donde `window` no existe.

## ¿Por qué deberías usarlo?

- No necesitas instalar ninguna librería externa para generar UUIDs en tus aplicaciones web.
- Usa un generador criptográfico, así que los valores no se pueden predecir y la probabilidad de que se repitan es despreciable.
- Sigue el estándar RFC 9562 (que en 2024 sustituyó al RFC 4122), que define la estructura y el formato de los UUIDs.

## Dónde funciona

| Entorno                 | Disponible desde                                                |
| :---------------------- | :-------------------------------------------------------------- |
| Chrome y Edge           | Versión 92                                                      |
| Firefox                 | Versión 95                                                      |
| Safari                  | Versión 15.4                                                    |
| Node.js                 | 14.17, con `import { randomUUID } from "node:crypto"`           |
| Web workers             | Sí, con `crypto.randomUUID()` o `self.crypto.randomUUID()`      |

## Limitaciones

Sin embargo, `randomUUID()` solo está disponible en contextos seguros: páginas servidas por HTTPS o páginas locales (`localhost` o `127.0.0.1`). En una página servida por HTTP, `crypto.randomUUID` es `undefined`.

Si necesitas generar UUIDs en un entorno no seguro, te recomiendo utilizar una librería externa como **uuid**.

Además, `randomUUID()` solo genera UUIDs de versión 4, que son completamente aleatorios. Si los vas a usar como clave primaria en una base de datos y te interesa que salgan ordenados por fecha de creación, la versión que buscas es la 7, y para esa sí hace falta una librería.

---

Ya sabes cómo generar UUIDs en JavaScript de manera sencilla y segura. Si quieres aprender más sobre los UUIDs y cómo funcionan, sigue leyendo.

## ¿Qué es un UUID?

Un UUID (Identificador Único Universal) es un número de 128 bits pensado para identificar algo sin necesidad de un registro central que reparta los identificadores. Con 128 bits hay una cantidad astronómicamente grande de combinaciones posibles, lo que hace que la probabilidad de generar dos UUIDs iguales sea extremadamente baja.

Los UUIDs se representan en formato hexadecimal, utilizando los números del `0` al `9` y las letras de la `a` a la `f`. Son 32 dígitos hexadecimales separados por guiones siguiendo este formato estándar:

```
xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
```

La distribución de caracteres entre los guiones es de 8-4-4-4-12 caracteres, respectivamente:

- 8 caracteres en la primera sección
- 4 caracteres en la segunda sección
- 4 caracteres en la tercera sección
- 4 caracteres en la cuarta sección
- 12 caracteres en la quinta sección

Por ejemplo:

```
b48087ff-b06c-41d0-9103-b96c90d7d44a
```

En esta estructura:

- La posición **M** indica la versión del UUID (en este caso, la versión 4).
- La posición **N** indica la variante, que especifica el formato y la codificación del UUID. En los UUIDs estándar siempre es `8`, `9`, `a` o `b` (en el ejemplo, `9`).

En un UUID de versión 4, todo lo demás es aleatorio: 122 de los 128 bits. Los 6 restantes son los que guardan la versión y la variante.

## Colisión de UUIDs

Una colisión ocurre cuando, por casualidad, se genera el mismo UUID más de una vez y se asigna a objetos diferentes. Esto podría causar confusión o errores porque dos objetos distintos tendrían el mismo identificador único.

Sin embargo, con 122 bits aleatorios hay unos 5,3 × 10³⁶ UUIDs de versión 4 posibles. Para tener un 50 % de probabilidad de encontrar una sola colisión habría que generar mil millones de UUIDs por segundo durante unos 86 años. A efectos prácticos, podemos considerar que cada UUID generado es único.

## Conclusión

En resumen, `crypto.randomUUID()` te da un UUID de versión 4 en una línea y sin dependencias, siempre que la página se sirva por HTTPS. Un UUID es un número de 128 bits con un formato estándar que incluye su versión y su variante, y en la versión 4 el resto son bits aleatorios, suficientes para que en la práctica no se repita nunca.

## Fuentes

- [`Crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID), en MDN (en inglés), con la tabla de compatibilidad de navegadores.
- [RFC 9562: Universally Unique IDentifiers (UUIDs)](https://www.rfc-editor.org/rfc/rfc9562.html), el estándar actual, que sustituye al RFC 4122.
- [`crypto.randomUUID()`](https://nodejs.org/api/crypto.html#cryptorandomuuidoptions), en la documentación de Node.js.
- [Secure contexts](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Secure_Contexts), la explicación de MDN sobre los contextos seguros (en inglés).
