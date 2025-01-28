---
title: Git Tower
description: "Conoce Git Tower, un cliente Git para macOS y Windows que te ayuda a trabajar con repositorios Git de forma visual y sencilla."
pubDate: 2024-11-13
type: blog
author: Jorge Baumann
tags:
  - Git
  - Tools
published: false
---

<!-- The most powerful Git client for Mac and Windows -->

<!-- Git Tower es el cliente de Git más potente del mercado.
para macOS y Windows que te ayuda a trabajar con repositorios Git de forma visual y sencilla. Si eres un desarrollador que trabaja con Git, este software te permitirá gestionar tus repositorios de una manera más eficiente y productiva. -->

Usar git desde la terminal es algo que deberías aprender si quieres progresar como desarrollador, pero si prefieres una interfaz gráfica, Git Tower es una excelente opción.

## ¿Qué es Git Tower?

Git Tower no es solo otro cliente Git con interfaz gráfica más. Es una herramienta profesional que revoluciona la forma de trabajar con Git. Tras años de experiencia personal utilizándolo, puedo asegurar que ha transformado significativamente mi flujo de trabajo y, sobre todo, mi comprensión de Git.

He aprendido mucho sobre todas las posibilidad que ofrece Git gracias a Git Tower. Te voy a dar un ejemplo que me voló la cabeza cuando lo descubrí. Detrás de cada acción que realizamos en Git Tower, hay un comando de Git, tiene lógica, aunque no lo hayas pensado.

Por ejemplo, ¿sabías que puedes hacer seleccionar las líneas de código que quieres agregar a un commit? Me explico, en vez de agregar todos los cambios del archivo, puedes seleccionar las líneas que quieres agregar.

El comando que tienes que usar en tu terminal es el siguiente:

```bash
git add -p nombre-del-archivo
```

Una vez que ejecutes ese comando, entrarás en un modo interactivo en y Git te mostrará tus cambios divididos en bloques (también llamados "_hunks_"). Para cada uno, podrás elegir:

- `y` para agregarlos al commit
- `n` para omitirlos
- `s` para dividirlos en trozos más pequeños
- `e` para editar manualmente qué líneas se incluyen
- y más opciones.

![Git Tower](../../assets/blog/tower/git-add.png)

De esta forma, tendrás control total sobre qué partes del archivo forman parte del commit.

Esto viene por defecto con Git, no se trata de algo exclusivo de Tower, pero la primera vez que lo usé fue gracias a Tower.

## Control + Z

<!-- ¿Te imaginas poder deshacer tus cambios en git ? Tower ofrece justo eso y más. Es una aplicación con una interfaz muy amigable que te permite deshacer acciones recientes (staging, commits e incluso merges) con un simple clic. Básicamente, es como tener una red de seguridad en todo momento, sin necesidad de teclear los comandos manualmente. -->
