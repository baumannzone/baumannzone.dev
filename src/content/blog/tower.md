---
title: "Git Tower: el GUI de Git más potente para macOS y Windows"
description: "Conoce Git Tower, un cliente Git para macOS y Windows que te ayuda a trabajar con repositorios Git de forma sencilla y que te hará ser mejor programador."
pubDate: 2025-01-30
type: blog
author: Jorge Baumann
tags:
  - Git
  - Tools
published: true
---

Usar Git desde la terminal es algo que deberías dominar si quieres progresar como desarrollador. Sin embargo, si prefieres una interfaz gráfica, [Git Tower](https://www.git-tower.com/?via=baumannzone) es una excelente alternativa.

## ¿Qué es Git Tower?

[![Git Tower](../../assets/blog/tower/logo.png)](https://www.git-tower.com/?via=baumannzone)

Git Tower no es solo otro cliente Git con interfaz gráfica más. Es una herramienta profesional que revoluciona la forma de trabajar con Git. Tras años de experiencia personal utilizándolo, puedo asegurar que ha transformado significativamente mi flujo de trabajo y, sobre todo, mi comprensión de Git.

Detrás de cada acción que realizamos en cualquier cliente gráfico de Git, hay un comando de Git. Es lógico, ¿no?

## Deshacer con `⌘ + Z`

¿Te imaginas poder deshacer tus cambios en Git con un simple clic? Tower ofrece justo eso y más. Puedes usar `⌘ + Z` para deshacer acciones recientes (staging, commits e incluso merges) con un simple clic o con un atajo de teclado.

- Creas una rama nueva y quieres volver atrás: `⌘ + Z`
- Haces un commit y te das cuenta de que te has equivocado: `⌘ + Z`
- Borras un stash por error: `⌘ + Z`

<video width="100%" controls loop autoplay muted>
  <source src="https://res.cloudinary.com/baumannzone/video/upload/v1738190748/git-tower-cmd-z.mp4" type="video/mp4">
</video>

Si despues de deshacer una acción te das cuenta de que no era lo que querías hacer, puedes rehacerla con `Shift + ⌘ + Z`. 🔮 ¡Magia!

## `git add` interactivo

He aprendido mucho sobre todas las posibilidad que ofrece Git gracias a Git Tower. **¿Cuántas veces has ejecutado un comando de Git sin saber qué hace realmente por detrás?** Yo lo he hecho muchas veces.

🤯 Te voy a dar un ejemplo que me voló la cabeza cuando lo descubrí y que me hizo ser mejor programador.

¿Sabías que puedes seleccionar las líneas de código que quieres agregar a un commit? Me explico, en vez de agregar todos los cambios del archivo, puedes seleccionar las líneas que quieres agregar y dejar otras fuera del commit.

El comando que tienes que usar en tu terminal es el siguiente:

```bash
git add -p nombre-del-archivo
```

Una vez que ejecutes ese comando, entrarás en el **modo interactivo** y Git te mostrará tus cambios en bloques (también llamados "_hunks_"). Para cada uno, podrás elegir:

- `y` para agregarlos al commit
- `n` para omitirlos
- `s` para dividirlos en trozos más pequeños
- `e` para editar manualmente qué líneas se incluyen
- y más opciones que puedes ver en la ayuda (`?`)

![Git Tower](../../assets/blog/tower/git-add.png)

En la imagen se puede ver la accion que puedes realizar (`Stage this hunk`) y el listado de subcomandos disponibles para cada hunk: `[y, n, q, a, d, s, e, ?]`.

En el modo interactivo, puedes elegir qué líneas quieres agregar a tu commit y cuáles no. Esto es muy útil si, por ejemplo, has editado varias partes de un archivo (como el `<header>` y el `<footer>` de tu `index.html`) y quieres hacer un commit parcial para tener todo organizado y separado por funcionalidades.

Esta funcionalidad viene por defecto con Git, no es algo exclusivo de Tower. Sin embargo, la primera vez que la utilicé fue precisamente gracias a Tower. A partir de ahí, empecé a profundizar más en Git y a interesarme por los comandos que hay detrás de cada acción.
