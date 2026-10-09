---
title: "git history: el nuevo comando experimental de Git para reescribir commits"
description: "Aprende a corregir, renombrar, dividir y eliminar commits concretos con git history, el comando experimental de Git."
pubDate: 2026-08-19
updatedDate: 2026-09-29
published: true
tags:
  - Git
  - TIL
author: Jorge Baumann
type: blog
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=git%20history%3A%20el%20nuevo%20comando%20experimental%20de%20Git%20para%20reescribir%20commits&tags=Git,TIL"
relatedPosts:
  - "git-tower-el-gui-de-git-mas-potente-para-macos-y-windows"
---

Si alguna vez has abierto un rebase interactivo solo para cambiar un commit, `git history` te puede ahorrar pasos. Es un comando experimental que actúa directamente sobre un commit concreto: le dices qué quieres hacer y Git se encarga del resto.

El rebase interactivo es potente, pero también una de esas partes de Git que muchos developers prefieren no tocar si pueden evitarlo. Por eso este comando me llamó la atención.

## Qué versión necesitas

`git history` llegó en Git 2.54 con `reword` y `split`. Git 2.55 añadió `fixup` y Git 2.56 incorporó `drop`. Para probar **todos** los ejemplos de este artículo necesitas Git 2.56 o posterior:

```bash
git --version
```

## Corregir un commit anterior con `fixup`

Imagina este historial:

```text
8d4c2a1 Añade validación al formulario
3b7e910 Crea el formulario de registro
```

Si un cambio pertenece al commit `3b7e910`, prepáralo en el staging y aplícalo a ese commit:

```bash
git add src/register-form.js
git history fixup 3b7e910
```

Git incorpora el cambio al commit elegido y vuelve a crear los posteriores. El mensaje y la autoría del commit corregido se conservan por defecto. Si la operación provoca un conflicto, se cancela.

## Cambiar el mensaje con `reword`

Si el contenido es correcto pero el mensaje no, usa:

```bash
git history reword 3b7e910
```

Git abre el editor con el mensaje actual. El contenido y la autoría del commit no cambian.

## Dividir un commit con `split`

Si un commit mezcla dos cambios independientes, puedes separarlos:

```bash
git history split 8d4c2a1
```

Git te enseña cada hunk y te pregunta si debe pasar al nuevo commit. Al terminar, te pide los mensajes de los dos commits resultantes. Tienes que elegir al menos un hunk y dejar al menos otro en el original; si no, uno de los dos quedaría vacío.

También puedes limitar la selección a ciertos archivos:

```bash
git history split 8d4c2a1 -- src/register-form.js
```

Los archivos que no coincidan con esa ruta permanecen en el commit original.

## Eliminar un commit con `drop`

Desde Git 2.56 puedes quitar un commit del historial y reaplicar sus descendientes sobre el padre:

```bash
git history drop 8d4c2a1
```

No puedes eliminar el commit raíz ni un commit de merge. Si reaplicar los descendientes produce un conflicto, la operación se cancela.

## Antes de usarlo

El comando sigue siendo experimental y la [documentación oficial](https://git-scm.com/docs/git-history) avisa de que su comportamiento puede cambiar.

Todas estas operaciones reescriben el historial: el commit que tocas y todos sus descendientes reciben hashes nuevos.

`git history` no funciona con historiales que contienen merges y, de momento, no ejecuta hooks. Para mover una serie de commits a otra base o editar varios de una vez, sigue usando `git rebase`.

Por defecto, `git history` actualiza todas las ramas locales descendientes del commit original. Si solo quieres actualizar la rama actual, añade `--update-refs=head`:

```bash
git history fixup 3b7e910 --update-refs=head
```

Evita reescribir commits que ya hayas compartido: como cambian los hashes, necesitarías un push forzado y romperías el historial local de tus compañeros. Para empezar, pruébalo en una rama local.

Aun con sus limitaciones, me gusta la dirección: en lugar de editar una lista de `pick` y recordar qué palabra va en cada línea, dices directamente lo que quieres (corregir, renombrar, dividir o eliminar). Reescribir el historial de Git da un poco menos de miedo.
