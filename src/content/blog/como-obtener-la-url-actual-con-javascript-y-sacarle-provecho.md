---
title: Cómo obtener la URL actual con JavaScript (y sacarle provecho)
description: Aprende a usar window.location para leer, descomponer y manipular URLs en el navegador sin dependencias externas.
pubDate: 2025-03-25
updatedDate: 2026-11-11
tags: [JavaScript]
type: blog
author: Jorge Baumann
intro: true
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=C%C3%B3mo%20obtener%20la%20URL%20actual%20con%20JavaScript%20(y%20sacarle%20provecho)&tags=JavaScript"
---

Para obtener la URL actual con JavaScript, usa `window.location.href`: devuelve la URL completa de la página como texto. El mismo objeto, `window.location`, te da además cada parte por separado (dominio, ruta, parámetros y fragmento).

Cuando estás construyendo una app frontend, ya sea con React, Vue, o vanilla JS, es bastante común necesitar acceder a la URL actual. Quizás para:

- **Leer parámetros** (`?id=123`)
- **Validar rutas** (`/user` vs `/admin`)
- **Detectar entornos** (_local_ vs _producción_)
- **Navegar programáticamente** (sin `<a href>`)

## TL;DR

```js
const url = window.location.href;
console.log(url);

// https://www.baumannzone.dev/blog/como-obtener-la-url-actual-con-javascript-y-sacarle-provecho
```

## Desglose: todas las partes de la URL

Supongamos que estás en esta URL:

```
https://www.baumannzone.dev:8080/blog/post?tag=js#comments
```

Puedes extraer sus partes así:

```js
const {
  host,       // "www.baumannzone.dev:8080"
  hostname,   // "www.baumannzone.dev"
  href,       // (URL completa)
  origin,     // "https://www.baumannzone.dev:8080"
  pathname,   // "/blog/post"
  port,       // "8080"
  protocol,   // "https:"
  search,     // "?tag=js"
  hash,       // "#comments"
} = window.location;
```

| Propiedad  | Valor en el ejemplo                                        | Qué contiene                    |
| ---------- | ---------------------------------------------------------- | ------------------------------- |
| `href`     | `https://www.baumannzone.dev:8080/blog/post?tag=js#comments` | La URL completa                 |
| `protocol` | `https:`                                                   | El esquema, con los dos puntos  |
| `host`     | `www.baumannzone.dev:8080`                                 | Dominio y puerto                |
| `hostname` | `www.baumannzone.dev`                                      | Solo el dominio                 |
| `port`     | `8080`                                                     | El puerto, como texto           |
| `origin`   | `https://www.baumannzone.dev:8080`                         | Protocolo, dominio y puerto     |
| `pathname` | `/blog/post`                                               | La ruta                         |
| `search`   | `?tag=js`                                                  | La query string, con el `?`     |
| `hash`     | `#comments`                                                | El fragmento, con el `#`        |

⚠️ **Ojo**: `host` incluye el puerto, `hostname` no. ¡Detalles como este pueden causar bugs!

![Cómo obtener la URL actual con JavaScript en imagen](../../assets/blog/como-obtener-la-url-actual-con-javascript-y-sacarle-provecho/main.png)

## Ejemplos útiles y reales

Dada esta URL, `https://www.baumannzone.dev:8080/blog/post?tag=js#comments`, aquí van algunos ejemplos:

1. Obtener un parámetro de búsqueda

```js
const params = new URLSearchParams(window.location.search);
const tag = params.get("tag");

console.log(tag); // => "js"
```

### Pro Tip

```js
// Obtener un parámetro
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id"); // => Devuelve `null` si no existe

// Comprobar si el parámetro existe
const hasId = urlParams.has("id"); // => Devuelve `true` o `false`
```

2. Redirigir a otro dominio

```js
if (window.location.hostname !== "www.baumannzone.dev") {
  window.location.href = "https://www.baumannzone.dev";
}

// 🛡️ Por seguridad, siempre sanitiza
const safeRedirect = (path) => {
  const allowedPaths = ["/home", "/blog"];
  if (allowedPaths.includes(path)) {
    window.location.href = path;
  }
};
```

3. Navegar a otra ruta

```js
window.location.href = "/uses";
// redirige a https://www.baumannzone.dev/uses
```

4. Detectar si estás en localhost

```js
const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";
```

5. Construir y modificar una URL

```js
const url = new URL(window.location.href);

url.pathname = "/patrocinio";
url.searchParams.set("from", "blog");

console.log(url.toString());
// => https://www.baumannzone.dev:8080/patrocinio?tag=js&from=blog#comments
```

### Extra para frameworks modernos:

- En React puedes usar `useLocation()` de React Router
- En Vue puedes usar `useRoute()` de Vue Router
- Recuerda, `window.location` funciona siempre en todos

## Conclusión

`window.location` es una de esas APIs nativas que suelen pasarse por alto, pero resuelve muchos casos comunes en apps web:

- Obtener la URL actual
- Leer parámetros
- Detectar el entorno
- Navegar dinámicamente
- Generar URLs desde cero

Sin dependencias, sin magia. Solo JavaScript.

## Fuentes

- [`Location`](https://developer.mozilla.org/es/docs/Web/API/Location), [`URLSearchParams`](https://developer.mozilla.org/es/docs/Web/API/URLSearchParams) y [`URL`](https://developer.mozilla.org/es/docs/Web/API/URL), en MDN.
- [The `Location` interface](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-location-interface), la definición en el estándar HTML.

---

¿Qué otro método nativo de JavaScript te gustaría que explique? Deja un comentario y lo agregaré a la lista. 👇
