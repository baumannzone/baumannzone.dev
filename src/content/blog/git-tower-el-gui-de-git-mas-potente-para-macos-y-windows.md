---
title: "Git Tower: el GUI de Git más potente para macOS y Windows"
description: "Conoce Git Tower, un cliente Git para macOS y Windows que te ayuda a trabajar con repositorios Git de forma sencilla y que te hará ser mejor programador."
pubDate: 2025-01-30
type: blog
author: Jorge Baumann
tags:
  - Git
  - Tools
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Git%20Tower%3A%20el%20GUI%20de%20Git%20m%C3%A1s%20potente%20para%20macOS%20y%20Windows&tags=Git,Tools"
---

Usar Git desde la terminal es algo que deberías dominar si quieres progresar como desarrollador. Sin embargo, si prefieres una interfaz gráfica, [Git Tower](https://www.git-tower.com/?via=baumannzone) es una excelente alternativa.

## ¿Qué es Git Tower?

[![Logo de Git Tower](../../assets/blog/git-tower-el-gui-de-git-mas-potente-para-macos-y-windows/logo.png)](https://www.git-tower.com/?via=baumannzone)

Git Tower no es simplemente otro cliente Git con interfaz gráfica. Se trata de una herramienta profesional que revoluciona la manera de trabajar con Git. Llevo años utilizándolo y, gracias a esta experiencia, puedo afirmar que ha transformado mi flujo de trabajo y, sobre todo, mi comprensión de Git.

Sí, he aprendido mucho sobre Git gracias a Tower, sigue leyendo y al final te cuento cómo.

Detrás de cada acción que realizamos en cualquier cliente gráfico de Git, existe un comando de Git. Tiene sentido, ¿no?

## Deshacer con `⌘ + Z`

Esta es una de las funcionalidades que más me gustan de Git Tower. La que más uso en mi día a día como desarrollador.

¿Te imaginas deshacer tus cambios en Git con un simple clic? Tower ofrece justo eso y más. Con `⌘ + Z` deshacer acciones recientes con un simple clic o con un atajo de teclado.

- Creas una rama nueva y quieres volver atrás: `⌘ + Z`
- Haces un commit y te das cuenta de que te has equivocado: `⌘ + Z`
- Borras un stash por error: `⌘ + Z`

<figure  >
<video width="100%" controls loop autoplay muted>
  <source src="https://res.cloudinary.com/baumannzone/video/upload/v1738190748/BlogBaumannzone.dev/git-tower-cmd-z.mp4" type="video/mp4">
</video>
<figcaption>En el video se muestra cómo se crea una rama y con <code>⌘ + Z</code> se deshace la acción, haciendo que la rama desaparezca. Si luego cambias de opinión y deseas conservar la rama, puedes pulsar <code>Shift + ⌘ + Z</code> para rehacerla.</figcaption>
</figure>

Si después de deshacer una acción te das cuenta de que no era lo que querías hacer, siempre puedes rehacerla con `Shift + ⌘ + Z`. ¡Magia! 🔮

## Arrastra todo en Git Tower con Drag & Drop

Una de las características más irresistibles de [Git Tower](https://www.git-tower.com/?via=baumannzone) es la posibilidad de arrastrar y soltar prácticamente cualquier elemento dentro de la aplicación.

- Quieres hacer un cherry-pick: arrastra y suelta el commit
- Quieres reordenar tus commits: arrastra y suelta el commit
- Quieres mover un stash a otra rama: arrastra y suelta el stash

<video width="100%" controls loop autoplay muted>
  <source src="https://res.cloudinary.com/baumannzone/video/upload/v1738259325/BlogBaumannzone.dev/git-tower-drag-and-drop.mp4" type="video/mp4">
</video>

## Desbloquea el modo interactivo de `git add` y conviértete en la GOAT

He aprendido mucho sobre todas las posibilidad que ofrece Git gracias a Git Tower. **¿Cuántas veces has ejecutado un comando de Git sin saber qué hace realmente por detrás?** Yo lo he hecho muchas veces.

🤯 Te voy a dar un ejemplo que me voló la cabeza cuando lo descubrí y que me hizo ser mejor programador. ¡Este es mi trucazo secreto!

**¿Sabías que puedes seleccionar las líneas de código que quieres agregar a un commit?** Me explico, en vez de agregar todos los cambios del archivo, puedes seleccionar las líneas que quieres agregar y dejar otras fuera del commit.

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

[![Modo interactivo de git add -p con sus subcomandos y significados](../../assets/blog/git-tower-el-gui-de-git-mas-potente-para-macos-y-windows/git-add.png)](https://www.git-tower.com/?via=baumannzone)

En la imagen se puede ver la accion que puedes realizar (`Stage this hunk`) y el listado de subcomandos disponibles para cada hunk: `[y, n, q, a, d, s, e, ?]`.

En el modo interactivo, puedes elegir qué líneas quieres agregar a tu commit y cuáles no. Esto es muy útil si, por ejemplo, has editado varias partes de un archivo (como el `<header>` y el `<footer>` de tu `index.html`) y quieres hacer un commit parcial para tener todo organizado y separado por funcionalidades.

Esta funcionalidad viene por defecto con Git, no es algo exclusivo de Tower. Sin embargo, la primera vez que la utilicé fue precisamente gracias a Tower. A partir de ahí, empecé a profundizar más en Git y a interesarme por los comandos que hay detrás de cada acción.

## Conclusiones finales

Para cerrar, no olvides que **existen varias alternativas gratuitas** a Git Tower. Sin embargo, si usas Git y GitHub a diario, Git Tower puede transformarse en tu mejor aliado. Al ser de pago, el equipo invierte recursos en mejoras constantes y soporte de calidad, lo cual se traduce en un producto mucho más robusto.

Además, **si eres estudiante**, puedes solicitar una [licencia gratuita](https://www.git-tower.com/students/mac?via=bmn) y comenzar a sacarle todo el partido sin coste alguno.

¡Y esto es todo! Espero que mis trucazos secretos y experiencias con Git Tower te sirvan para optimizar tu flujo de trabajo y sacarle el máximo provecho a Git.

Si quieres probar Git Tower, puedes descargar una versión de prueba de 30 días desde su [página web](https://www.git-tower.com/?via=baumannzone). Si decides comprar una licencia, puedes hacerlo a través de mi enlace de afiliado y me ayudarás a seguir creando contenido como este. 🫶
