---
title: "http://http://http://@http://http://?http://#http:// es una URL válida"
description: "Una URL formada por siete http:// seguidos que el navegador acepta como válida. Cómo la descompone new URL() y por qué no todos los parsers coinciden."
pubDate: 2026-10-17
tags:
  - JavaScript
  - Web
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=http%3A%2F%2Fhttp%3A%2F%2Fhttp%3A%2F%2F%40http%3A%2F%2Fhttp%3A%2F%2F%3Fhttp%3A%2F%2F%23http%3A%2F%2F%20es%20una%20URL%20v%C3%A1lida&tags=JavaScript,Web"
relatedPosts:
  - "enlaces-sms-el-mailto-de-los-mensajes-de-texto"
  - "fragmentos-de-texto-en-urls-navegacion-exacta-sin-anclas"
  - "como-obtener-la-url-actual-con-javascript-y-sacarle-provecho"
---

Siete `http://` seguidos, separados únicamente por una `@`, un `?` y un `#`:

```text
http://http://http://@http://http://?http://#http://
```

Parece una cadena rota por un error de concatenación, pero es **una URL completamente válida**. Los navegadores la aceptan, el constructor `new URL()` de JavaScript la procesa sin lanzar ningún error y `curl` también.

## Cómo la lee el navegador

Si la pasas por la API estándar de JavaScript en el navegador o en Node.js, puedes ver qué papel juega cada bloque:

```js
const url = new URL("http://http://http://@http://http://?http://#http://");

URL.canParse(url.href); // true
```

El objeto resultante descompone la cadena así:

```js
{
  protocol: "http:",
  username: "",
  password: "",
  hostname: "http",
  port: "",
  pathname: "//http://@http://http://",
  search: "?http://",
  hash: "#http://"
}
```

Cada uno de los siete `http://` cae en una parte distinta de la gramática:

| Fragmento | Componente | Por qué es válido |
| --- | --- | --- |
| `http:` | Protocolo (`scheme`) | Define el esquema de la URL |
| `//http:` | Autoridad (`host` + puerto vacío) | El host se llama `http`; los dos puntos sin número detrás indican el puerto por defecto (`80`) |
| `//http://@http://http://` | Ruta (`pathname`) | Dentro del path se permiten varias barras seguidas, dos puntos y el carácter `@` |
| `?http://` | Query string (`search`) | El primer `?` abre la consulta; tanto `:` como `/` son caracteres válidos ahí |
| `#http://` | Fragmento (`hash`) | Todo lo que va tras `#` pertenece al fragmento |

La clave está en la primera `/` que aparece después del segundo `http:`. Según las reglas de parsing, la autoridad (donde viven el usuario, la contraseña, el host y el puerto) termina en cuanto aparece una `/`, un `?` o un `#`. Como la `@` aparece **después** de esa barra, ya no actúa como separador de credenciales: es un carácter más dentro del path.

Hay un detalle adicional al leer `url.href`. El parser normaliza la URL y elimina un carácter:

```text
http://http://http://@http://http://?http://#http://
http://http//http://@http://http://?http://#http://
           ^ desaparecen los dos puntos del puerto vacío
```

Como los dos puntos detrás del host no iban seguidos de ningún número de puerto, son redundantes y el serializador los descarta. Chrome, Firefox y Safari hacen exactamente la misma limpieza si pegas la URL en la barra de direcciones.

Con `https` ocurre lo mismo:

```text
https://https://https://@https://https://?https://#https://
```

## Qué cambia entre un parser y otro

Cuando Daniel Stenberg publicó esta URL en septiembre de 2022, ni siquiera su propia herramienta la leía igual que el navegador. En aquel momento, `curl` (hasta la versión 7.85.0) la descomponía de otra forma:

| Fragmento | Navegador / WHATWG | `curl` (en 2022) |
| --- | --- | --- |
| `http` | Host | Usuario |
| `//http://` | Parte del path | Contraseña |
| `http:` | Parte del path | Host (puerto por defecto) |
| `//http://` | Parte del path | Path (`//http://`) |
| `http://` | Query | Query |
| `http://` | Fragmento | Fragmento |

El motivo era que el parser de `curl` buscaba la `@` para separar usuario y contraseña antes de comprobar si había aparecido una `/` que cerrara la autoridad. Para `curl`, todo lo que había entre el primer `http://` y la `@` eran credenciales, aun teniendo barras de por medio, algo que la [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) no permite sin codificar (`%2F`).

Tras documentar el caso, el propio Stenberg ajustó el parser de `curl`. Si haces la prueba hoy con una versión actual (`curl 8.x`) usando `-w` para inspeccionar cómo trocea la URL, verás que ya coincide con el navegador:

```bash
curl -w "user: %{url.user}\nhost: %{url.host}\npath: %{url.path}\nquery: %{url.query}\n" \
  "http://http://http://@http://http://?http://#http://" -o /dev/null -s
```

```text
user: 
host: http
path: //http://@http://http://
query: http://
```

El `urllib.parse` de Python, el módulo `URI` de Ruby y el crate `url` de Rust llegan al mismo resultado: sin usuario, sin contraseña y con `@` dentro del path.

## Dos estándares para el mismo concepto

Parte del problema de fondo es que no existe una única especificación de URL:

- **[RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) (IETF, 2005).** Define la sintaxis genérica de las URIs. Es la referencia histórica de muchas librerías de servidor y herramientas de línea de comandos.
- **[URL Living Standard](https://url.spec.whatwg.org/) (WHATWG).** Es el estándar que implementan los navegadores y `new URL()` en JavaScript y Node.js. Documenta además cómo recuperarse de entradas malformadas que la RFC rechazaría.

Entre ambos estándares y las implementaciones propias de cada lenguaje, una misma cadena con caracteres como `@`, `\` o varios `:` puede apuntar a un host distinto según quién la lea.

## Por qué importa en producción

Esta diferencia de interpretación entre parsers no es solo una curiosidad sintáctica; es una fuente clásica de vulnerabilidades web:

- **Falsificación de peticiones en servidor (SSRF) y *open redirects*.** Si una capa de validación comprueba que el host de una URL está en una lista blanca usando un parser y después otra librería hace la petición HTTP con un parser distinto, ambos pueden no estar viendo el mismo `host`. Es exactamente lo que ocurría entre el navegador y versiones antiguas de `curl` con la `@`.

- **Expresiones regulares caseras.** Validar o extraer el dominio de una URL con una regex casi siempre falla en casos límite con puertos vacíos, credenciales con `@` o barras repetidas en el path.

- **Un único parser de principio a fin.** En JavaScript y Node.js, usa siempre `new URL()` o `URL.canParse()`. Y si necesitas pasar esa URL a otro servicio o comando, envía `url.href` ya normalizada en lugar de la cadena original.

La próxima vez que alguien te diga que una URL es "algo sencillo", enséñale esta. 😄

## Fuentes

- [WHATWG URL Standard](https://url.spec.whatwg.org/), la especificación que siguen los navegadores y `new URL()`.
- [RFC 3986 — Uniform Resource Identifier (URI): Generic Syntax](https://datatracker.ietf.org/doc/html/rfc3986), la especificación del IETF.
