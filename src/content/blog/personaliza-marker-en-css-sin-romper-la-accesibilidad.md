---
title: "Personaliza ::marker en CSS sin romper la accesibilidad"
description: "Personaliza ::marker en CSS sin afectar la accesibilidad. Aprende a separar contenido visual y lectura de pantalla fácilmente."
pubDate: "2025-05-06"
author: "Jorge Baumann"
published: false
tags: ["CSS"]
---

Añadir un emoji o ícono bonito a tus listas puede parecer una mejora visual inofensiva... hasta que lo pruebas con un lector de pantalla. ¿Sabías que el contenido de ::marker también se lee en voz alta?

Eso que tú ves como un simple adorno puede convertirse en ruido innecesario para quien navega con tecnología asistiva.

Imagina esto:

```css
summary::marker {
  content: "🎵";
}
```

```html
<summary>Playlist</summary>
```

A simple vista, todo bien. Pero con un lector de pantalla, se oye: "_Nota musical Playlist_". Puede que no sea lo que querías comunicar.

Por suerte, CSS tiene un truco bajo la manga: puedes añadir un segundo valor para controlar lo que se lee (o no) con tecnologías de asistencia.

## 🎯 Opción 1: Personalizar lo que se lee

```css
summary::marker {
  content: "🎵" / "Música";
}
```

Esto hará que el lector diga "_Música Playlist_" en lugar de intentar traducir el emoji.

## 🤐 Opción 2: Que no lea nada

```css
summary::marker {
  content: "🎵" / "";
}
```

En este caso, el lector de pantalla solo leerá "_Playlist_", ignorando el emoji. Visualmente no cambia nada, pero la experiencia auditiva es más limpia.

---

![Ejemplo de personalización de markers en CSS](../../assets/blog/personaliza-marker-en-css-sin-romper-la-accesibilidad/image.png)

Pruébalo tú mismo con VoiceOver (`CMD` + `F5`) en macOS usando Chrome.
