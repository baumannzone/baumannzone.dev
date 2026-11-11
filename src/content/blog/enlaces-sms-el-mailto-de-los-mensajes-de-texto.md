---
title: "Enlaces sms: el mailto: de los mensajes de texto"
description: "El esquema de URL sms: abre la app de mensajes del móvil con el destinatario y el texto ya escritos. Cómo funciona según la RFC 5724 y qué cambia en iPhone."
pubDate: 2026-11-10
tags:
  - HTML
  - Web
  - TIL
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Enlaces%20sms%3A%20el%20mailto%3A%20de%20los%20mensajes%20de%20texto&tags=HTML,Web,TIL"
relatedPosts:
  - "http-http-http-es-una-url-valida"
  - "fragmentos-de-texto-en-urls-navegacion-exacta-sin-anclas"
---

Pulsas un enlace en una web desde el móvil y se abre la aplicación de mensajes con el número del destinatario y el texto ya escritos, listos para darle a enviar. Sin pasar por WhatsApp, sin copiar el teléfono al portapapeles y [sin una línea de JavaScript](/blog/acordeones-nativos-en-html-sin-una-linea-de-javascript/).

Eso es lo que hace el [esquema de URL](/blog/http-http-http-es-una-url-valida/) `sms:`, el equivalente a `mailto:` o `tel:` para mensajes de texto, estandarizado en la [RFC 5724](https://www.rfc-editor.org/rfc/rfc5724.html).

## Cómo funciona

En HTML no necesitas más que un enlace normal con el esquema `sms:` en el atributo `href`:

```html
<a href="sms:+34600000000?body=Hola%20Baumann!">Escríbeme por SMS</a>
```

La estructura tiene dos partes opcionales: el número (o números) de destino después de `sms:` y el parámetro `body` en la query string con el contenido del mensaje.

| Enlace | Qué hace al abrirlo en el móvil |
| --- | --- |
| [`sms:`](sms:) | Abre la app de mensajes sin destinatario ni texto |
| [`sms:+34600000000`](sms:+34600000000) | Abre una conversación con ese número |
| [`sms:+34600000000?body=Hola%20mundo!`](sms:+34600000000?body=Hola%20mundo!) | Rellena el destinatario y el texto del mensaje |

El contenido de `body` tiene que ir codificado como componente de URI: los espacios son `%20`, los saltos de línea `%0A` y cualquier carácter especial pasa antes por `encodeURIComponent()` si construyes el enlace desde JavaScript.

Por seguridad, ningún sistema operativo envía el SMS automáticamente al tocar el enlace: el navegador solo abre la aplicación de mensajes con los campos rellenos y es el usuario quien pulsa enviar.

## El problema de los varios destinatarios en iOS

Según la RFC 5724, para enviar el mismo mensaje a varios números basta con separarlos por comas:

```text
sms:+34600000001,+34600000002?body=Hola%20equipo!
```

En Android funciona tal cual. En iPhone, no: la app Mensajes de iOS ignora el formato estándar cuando hay más de un número y espera una ruta propia con `sms://open` y el parámetro `addresses`:

```text
sms://open?addresses=+34600000001,+34600000002&body=Hola%20equipo!
```

Si estás leyendo esto desde el móvil, puedes comprobar la diferencia entre los dos enlaces:

- [Formato estándar RFC 5724 (Android)](sms:+34600000001,+34600000002,+34600000003?body=Hola%20equipo!)
- [Formato propietario de Apple (iPhone)](sms://open?addresses=+34600000001,+34600000002,+34600000003&body=Hola%20equipo!)

La documentación de Apple no ayuda a entender el porqué. Su [referencia archivada sobre enlaces SMS](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/SMSLinks/SMSLinks.html) solo describe el formato básico con un número de teléfono: no contempla el parámetro `body` ni varios destinatarios, y `sms://open?addresses=` no aparece en ella.

Si solo necesitas un destinatario, el problema no te afecta: `sms:+34600000000?body=...` funciona igual en Android y en iOS.

## Cómo generar el enlace para ambos sistemas

Cuando necesitas varios destinatarios no hay *feature detection* posible desde el navegador: `<a>` es un enlace pasivo y el DOM no tiene forma de saber cómo va a interpretar la URL la aplicación de mensajes del sistema. El único recurso práctico es comprobar el `userAgent`:

```js
function smsHref(numbers = [], body = "") {
  const isIOS = /iPhone|iPod/.test(navigator.userAgent);
  const recipients = numbers.join(",");
  const text = encodeURIComponent(body);

  if (isIOS && numbers.length > 1) {
    const query = body ? `&body=${text}` : "";
    return `sms://open?addresses=${recipients}${query}`;
  }

  const query = body ? `?body=${text}` : "";
  return `sms:${recipients}${query}`;
}

smsHref(["+34600000001", "+34600000002"], "¿Entrenamos a las 8?");
```

Esta expresión regular solo detecta iPhone y iPod touch. Desde iPadOS 13, Safari en el iPad se identifica como `Macintosh`, igual que un Mac, así que ambos reciben el formato estándar aunque también abran la app Mensajes de Apple. Para distinguir un iPad de un Mac se suele combinar `Macintosh` con `navigator.maxTouchPoints > 1`.

## Cuándo resulta útil

Aunque en España casi toda la mensajería personal pasa por WhatsApp o Telegram, el esquema `sms:` sigue resolviendo bien varios casos donde no quieres asumir qué aplicaciones tiene instaladas el usuario:

- **Códigos QR físicos.** Un código QR que codifica `sms:+34600000000?body=...` abre directamente el mensaje listo para enviar al escanearlo con la cámara, sin pasar por una página intermedia.
- **Verificación o alta por SMS.** Flujos donde el usuario tiene que enviar un código o palabra clave a un número corto o a un número de soporte.
- **Contacto rápido desde web móvil.** Negocios locales, incidencias o asistencia en carretera donde un mensaje de texto con los datos prellenados es más directo que un formulario.

## Fuentes

- [RFC 5724 — URI Scheme for Global System for Mobile Communications (GSM) Short Message Service (SMS)](https://www.rfc-editor.org/rfc/rfc5724.html), la especificación oficial del IETF.
- [Apple URL Scheme Reference — SMS Links](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/SMSLinks/SMSLinks.html), la documentación archivada de Apple sobre el esquema `sms:` en iOS.
