---
title: "Qué son y cómo crear identificadores únicos (UUIDs) con JavaScript plano"
description: "Aprende a crear identificadores únicos y seguros en tus aplicaciones web con una simple línea de código y sin librerías externas."
pubDate: 2024-10-10
type: "blog"
tags: ["JavaScript"]
author: Jorge Baumann
---

¿Sabías que puedes generar identificadores únicos en JavaScript con solo una línea de código? Con el método `window.crypto.randomUUID()`, es posible crear UUIDs (Identificadores Únicos Universales) de versión 4 de manera sencilla y segura.

Este método forma parte de la API Web Crypto y es compatible con todos los navegadores modernos y entornos de ejecución de JavaScript. A continuación, te muestro cómo puedes utilizarlo en tus aplicaciones web.

```js
const uuid = window.crypto.randomUUID();
console.log(uuid);

// → 'b48087ff-b06c-41d0-9103-b96c90d7d44a'
```

## ¿Por qué deberías usarlo?

- No necesitas instalar ninguna librería externa para generar UUIDs en tus aplicaciones web.
- Usa un generador criptográfico, lo que garantiza que los UUIDs generados sean únicos y seguros.
- Sigue el estándar RFC [4122](https://datatracker.ietf.org/doc/html/rfc4122), que define la estructura y el formato de los UUIDs.

## Limitaciones

Sin embargo, debido a que las nuevas APIs de los navegadores solo están disponibles en contextos seguros, este método solo está disponible para páginas locales (`localhost` o `127.0.0.1`) o en HTTPS.

Si necesitas generar UUIDs en un entorno no seguro, te recomiendo utilizar una librería externa como **uuid**.

---

Ya sabes cómo generar UUIDs en JavaScript de manera sencilla y segura. Si quieres aprender más sobre los UUIDs y cómo funcionan, sigue leyendo.

## ¿Qué es un UUID?

Un UUID (Identificador Único Universal) se basa en una combinación de componentes para garantizar su unicidad. Los UUIDs son números de 128 bits, lo que significa que hay una cantidad astronómicamente grande de combinaciones posibles. Esto hace que la probabilidad de generar dos UUIDs iguales sea extremadamente baja.

Los UUIDs se representan en formato hexadecimal, utilizando los números del `0` al `9` y las letras de la `A` a la `F`. Estos dígitos hexadecimales se agrupan en 32 caracteres y se separan por guiones siguiendo este formato estándar:

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
- La posición **N** indica la variante, que especifica el formato y la codificación del UUID.


## Colisión de UUIDs

Una colisión ocurre cuando, por casualidad, se genera el mismo UUID más de una vez y se asigna a objetos diferentes. Esto podría causar confusión o errores porque dos objetos distintos tendrían el mismo identificador único.

Sin embargo, dado que un UUID es un valor de 128 bits, el número de combinaciones posibles es extremadamente grande. Esto significa que la probabilidad de generar el mismo UUID dos veces es realmente baja, casi inexistente. A efectos prácticos, podemos considerar que cada UUID generado es único.

## Conclusión

En resumen, los UUIDs funcionan asignando un número de 128 bits altamente improbable de repetir, estructurado de manera estándar para incluir información sobre su versión y variante, asegurando así su unicidad y consistencia a través de diferentes sistemas.