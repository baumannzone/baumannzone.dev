---
title: "Evita que la pantalla se duerma con JavaScript: domina la Screen Wake Lock API"
description: "JavaScript te permite mantener la pantalla despierta con la Screen Wake Lock API. Descubre cómo funciona y cómo puedes usarla en tus aplicaciones web. Mejora la UX con este sencillo truco."
pubDate: 2024-10-20
type: blog
author: Jorge Baumann
tags:
  - JavaScript
---

¿Alguna vez has estado cocinando una receta y la pantalla de tu dispositivo se apaga justo cuando estás a punto de leer el siguiente paso? O tal vez estás viendo un video y la pantalla se oscurece un poco porque no has tocado el dispositivo en un rato. La Screen Wake Lock API es la solución a estos problemas.

![Screen Wake Lock API](../../assets/blog/evita-que-la-pantalla-se-duerma-con-javascript-domina-la-screen-wake-lock-api/dirty-hands.webp)

## ¿Qué es la Screen Wake Lock API?

La mayoría de los dispositivos, por defecto, apagan la pantalla después de un tiempo para alargar la vida del hardware. Los dispositivos modernos hacen esto también para ahorrar batería. Aunque es una función útil, algunas aplicaciones necesitan que la pantalla siga encendida para ser realmente efectivas.

La Screen Wake Lock API se encarga de que la pantalla **no se apague**, **no se atenúe ni se bloquee**. Te permite mantener la pantalla _despierta_ sin complicaciones.

## Casos de uso

Perfecto para esas apps que no se pueden dar el lujo de que la pantalla se apague, como cuando estás viendo un video o siguiendo una receta (y no quieres dejar el móvil lleno de churretes). Pero no solo eso, la Screen Wake Lock API también es ideal para cuando estás usando un mapa o incluso cuando estás exponiendo una presentación.

<!-- ![Test end to end](../../assets/blog/el-arte-del-testing-una-oda-a-las-pruebas-automaticas/e2e-test.avif) -->

¿Y qué pasa si tienes una app que funciona con control de voz? Pues te viene de lujo, porque no querrás depender de tocar la pantalla cada dos por tres para que no se duerma.

A día de hoy el soporte es bastante bueno. Tiene soporte para Chrome, Edge, Firefox, Safari. También en sus versiones móviles.

## Ejemplo de uso de la Screen Wake Lock API

Para activar el `WakeLockSentinel`, solo tienes que llamar al método `navigator.wakeLock.request()`, que es una **promesa** que se resuelve si el sistema lo permite.

Cuidado con esto, la petición puede ser rechazada por varias razones, como ajustes del sistema (modo ahorro de energía o batería baja) o si el documento no está activo o visible. Una buena práctica es guardar una referencia al objeto _centinela_ para poder soltarlo más tarde si hace falta.

El _centinela_ está conectado al sistema que mantiene la pantalla despierta, por lo tanto, puede ser liberado por el propio sistema si la batería está muy baja o si la pestaña ya no está activa o visible. También lo puedes liberar tú mismo con el método `WakeLockSentinel.release()`.

Sin embargo, una vez que lo liberes, ya no puedes volver a usar ese _centinela_. Si necesitas bloquear la pantalla para que no se apague de nuevo, tendrás que crear uno nuevo.

### Verificación de soporte

Para poder usar esta API lo primero que debes hacer es comprobar si el navegador soporta la Screen Wake Lock API. Puedes hacerlo con el siguiente código:

```javascript
const isWakeLockSupported = () => "wakeLock" in navigator;
```

### Bloquear el estado de reposo

Para evitar que la pantalla se apague, puedes pedirle un _wake lock_ al navegador con el siguiente código:

```javascript
// Create a reference for the wake lock
let wakeLock = null;

const requestWakeLock = async () => {
  if (!isWakeLockSupported()) return;

  try {
    // Request a wake lock
    wakeLock = await navigator.wakeLock.request();
    console.log("Screen Wake Lock locked:", !wakeLock.released);
  } catch (err) {
    // The wake lock request was rejected, usually due to system settings
    console.error(err);
  }
};

await requestWakeLock();
```

### Liberar el bloqueo de la pantalla

Cuando ya no necesites que la pantalla siga encendida, puedes liberar el bloqueo fácilmente con la función `release()`. Esto es útil si tu aplicación web ha terminado de mostrar contenido relevante y quieres volver a permitir que la pantalla se apague.

```javascript
const releaseWakeState = () => {
  wakelock.release();
  wakelock = null;
};
```

### Escuchando eventos

La API también te permite escuchar eventos para saber cuándo el sistema ha liberado el _wake lock_ por alguna razón. Puedes hacerlo con el siguiente código:

```javascript
let wakeLock = null;

const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request();

    wakeLock.addEventListener("release", () => {
      console.log("Screen Wake Lock released:", wakeLock.released);
    });

    console.log("Screen Wake Lock locked:", !wakeLock.released);
  } catch (err) {
    console.error(err);
  }
};

await requestWakeLock();
// => Screen Wake Lock locked: true

// Si cambio de pestaña en el navegador (es decir, la pestaña ya no está activa)
// => Screen Wake Lock released: true
```

## Seguridad y permisos

El acceso a la Screen Wake Lock API está controlado por la directiva de **Permissions Policy**. Por defecto, solo se permite el uso de esta API para el propio origen de la página (`self`), lo que significa que si tu aplicación tiene iframes del mismo origen, estos podrán usar la API sin problemas. Sin embargo, el contenido de terceros (como iframes de otros dominios) no podrá usar esta funcionalidad, a menos que lo habilites explícitamente.

Si tienes contenido de terceros, como iframes, y quieres que puedan usar la API, necesitarás configurarlo en el servidor con el encabezado `Permissions-Policy`. Por ejemplo, si quiero permitir que la web de **Carlos Azaustre** use la Screen Wake Lock API en mi página, puedo hacerlo de la siguiente manera:

```http
Permissions-Policy: screen-wake-lock=(self "https://carlosazaustre.es")
```

Después tengo que añadir el atributo `allow="screen-wake-lock"` en el iframe correspondiente para que funcione correctamente:

```html
<iframe src="https://carlosazaustre.es" allow="screen-wake-lock"></iframe>
```

Si por el contrario prefieres desactivar completamente el uso de la Screen Wake Lock API en tu sitio web, incluso para ti, puedes hacerlo con este encabezado:

```http
Permissions-Policy: screen-wake-lock=()
```

## Recomendaciones

La Screen Wake Lock API se debe usar para mantener la pantalla encendida y mejorar la experiencia del usuario. Un buen detalle sería mostrar algún tipo de feedback visual en la interfaz para indicar si el wake lock está activo, y de paso ofrecerle al usuario una forma de desactivarlo si le da la gana.

Tambien puede ser interesante usar esta API con un temporizador (`setTimeout`) para liberar el _wake lock_ después de un tiempo determinado, por ejemplo, si el usuario no ha interactuado con la página durante un tiempo.

Otra opción interesante puede ser activar el _wake lock_ hasta que el usuario llegue a un punto concreto de la página (`Intersection Observer API`), como la sección de comentarios que viene después de un artículo.

## Conclusión

Ya has visto que usar la Screen Wake Lock API es súper sencilla implementar. No necesitas permisos especiales ni configuraciones avanzadas para probarla. Solo asegúrate de que estás en una pestaña activa y visible, porque la API no funciona si la página está en segundo plano.

Así que, la próxima vez que quieras mejorar la experiencia de usuario en tus web apps, asegúrate de que la pantalla no se duerma cuando más se necesita. ¡Pon la Screen Wake Lock API a trabajar!
