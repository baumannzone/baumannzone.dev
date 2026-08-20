---
title: "git history: el nuevo comando experimental para reescribir commits de git"
description: "Descubre cómo usar git history para corregir, renombrar y dividir commits sin recurrir siempre a un rebase interactivo."
pubDate: 2026-08-19
published: true
tags:
  - Git
  - TIL
author: Jorge Baumann
type: blog
---

Git está probando una forma nueva de reescribir el historial. Se llama `git history` y permite corregir, renombrar o dividir commits sin recurrir siempre a un rebase interactivo. Suena bien, aunque todavía es experimental y tiene limitaciones importantes.

Reescribir el historial no significa modificar los archivos actuales, sino reemplazar commits que ya existen por otros nuevos. Hasta ahora, operaciones como corregir un commit anterior, cambiar su mensaje o dividirlo suelen pasar por un rebase interactivo. Es una herramienta potente, pero también una de esas partes de Git que muchos developers prefieren no tocar si pueden evitarlo.

## ¿Qué es `git history`?

`git history` ofrece una interfaz más directa y opinionada para modificar commits concretos. No pretende sustituir todos los usos de `git rebase`, sino simplificar algunas operaciones frecuentes sobre el historial:

- `git history fixup <commit>` incorpora los cambios del staging al commit indicado.
- `git history reword <commit>` permite cambiar el mensaje de un commit.
- `git history split <commit>` divide un commit seleccionando interactivamente qué cambios deben separarse.

## Corregir un commit anterior con `fixup`

Imagina que tienes este historial:

```bash
8d4c2a1 Añade validación al formulario
3b7e910 Crea el formulario de registro
```

Después descubres un cambio que debería formar parte de `3b7e910`. Primero añades ese cambio al staging y después indicas qué commit quieres corregir:

```bash
git add src/register-form.js
git history fixup 3b7e910
```

Git incorpora los cambios preparados al commit seleccionado y vuelve a crear los commits posteriores sobre el nuevo historial. Como consecuencia, tanto el commit corregido como sus descendientes reciben hashes nuevos.

Si la operación produce un conflicto, `git history fixup` aborta en lugar de dejar el repositorio en un estado intermedio que tengas que resolver manualmente.

## Cambiar el mensaje de un commit con `reword`

Si el contenido de un commit es correcto, pero su mensaje no explica bien el cambio, puedes modificarlo indicando su hash:

```bash
git history reword 3b7e910
```

Git abrirá el editor configurado para que escribas el nuevo mensaje. El contenido, la autoría y el resto de los datos del commit se conservan, aunque su hash y los de los commits posteriores cambiarán al reescribir el historial.

## Dividir un commit con `split`

A veces un commit termina mezclando dos cambios que deberían vivir por separado. `split` permite dividirlo seleccionando interactivamente los bloques de código que quieres extraer:

```bash
git history split 8d4c2a1
```

Git mostrará cada hunk del commit y preguntará si debe pasar al nuevo commit. Cuando termine la selección, solicitará los mensajes de los dos commits resultantes.

No puedes seleccionar todos los cambios ni dejar la selección vacía, porque una de las dos partes quedaría sin contenido. También puedes limitar la operación a determinados archivos mediante un pathspec:

```bash
git history split 8d4c2a1 -- src/register-form.js
```

Los archivos que no coincidan con el pathspec permanecerán en el commit original.

## Limitaciones y precauciones

Antes de probar `git history`, conviene recordar que todavía es experimental:

- Su comportamiento puede cambiar en futuras versiones de Git.
- No funciona con historiales que contienen merges.
- Las operaciones que producirían conflictos se cancelan.
- Actualmente no ejecuta los hooks de Git.

Además, por defecto actualiza todas las ramas locales que descienden del commit original. Si solo quieres modificar la rama actual, puedes utilizar `--update-refs=head`:

```bash
git history fixup 3b7e910 --update-refs=head
```

> **Importante:** evita reescribir commits que ya hayas compartido o subido a una rama utilizada por otras personas. Los hashes cambiarán y probablemente necesitarás hacer un force push, lo que puede romper el historial local de otros colaboradores.

## ¿Qué versión de Git necesitas?

`git history` apareció en Git 2.54 con los subcomandos `reword` y `split`. El subcomando `fixup` llegó después, en Git 2.55.

Puedes comprobar tu versión instalada con:

```bash
git --version
```

Para reproducir todos los ejemplos de este artículo necesitas Git 2.55 o una versión posterior. La sintaxis y las limitaciones actuales están disponibles en la [documentación oficial de `git history`](https://git-scm.com/docs/git-history).

## ¿Sustituye `git history` a `git rebase`?

No. `git rebase` sigue siendo la herramienta adecuada cuando quieres reaplicar un conjunto de commits sobre otra base o editar varios commits a la vez. `git history` tiene un objetivo más limitado: realizar una operación concreta sobre un commit determinado.

Precisamente ahí está su atractivo. En lugar de abrir una lista interactiva y recordar qué acción debes indicar en cada línea, expresas directamente lo que quieres hacer: corregir, renombrar o dividir.

Por ahora conviene probarlo en ramas locales o repositorios desechables. Sigue siendo experimental y sus limitaciones son importantes, pero apunta en una dirección interesante: conseguir que reescribir el historial de Git resulte un poco menos intimidante.
