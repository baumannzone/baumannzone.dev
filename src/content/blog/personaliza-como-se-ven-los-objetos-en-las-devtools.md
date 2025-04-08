---
title: "Personalizar cómo se ven los objetos en las DevTools"
description: "Aprende a usar Custom Object Formatters para hacer que tus objetos en la consola de DevTools se vean más bonitos, útiles y fáciles de entender."
pubDate: 2025-04-07
published: true
tags: ["DevTools", "JavaScript", "TIL"]
author: Jorge Baumann
type: blog
---

Los objetos aparecen en muchos lugares en las **Developer Tools**. Más comúnmente en la herramienta **Console**, pero también aparecen cuando estás en modo detective dentro de **Sources** (o Debugger) cuando depuras código JavaScript.

Las DevTools de cada navegador son las que deciden cómo aparecen estos objetos en la interfaz de usuario. Por ejemplo, las cadenas de texto y los números tienen diferentes colores, los arrays tienen una pequeña vista previa de los elementos y un icono que te permite expandirlos para ver la lista completa de elementos, etc.

Veamos algunos ejemplos de cómo se ven diferentes tipos de datos en la consola:

![Ejemplo de cómo se ven diferentes tipos de datos en la consola](../../assets/blog/personaliza-como-se-ven-los-objetos-en-las-devtools/console.png)

Pero... ¿y si tú quieres algo más? Algo que diga: "_este objeto es especial_"

Bienvenido a los `Custom Object Formatters`, una función no tan conocida que te deja customizar cómo se muestran tus objetos en las DevTools. Puedes hacer que tus objetos aparezcan con estilos personalizados, colores, e incluso con emojis.

Para poder hacer esto, primero necesitas activar el soporte para esta característica en el navegador.

![Activar soporte para Custom Object Formatters en Chrome](../../assets/blog/personaliza-como-se-ven-los-objetos-en-las-devtools/settings.png)

## ¿Cómo se hace la magia?

Los `Custom Object Formatters` no es algo que configures en las DevTools. DevTools no tiene un panel de "personalización de objetos". En lugar de eso, tú defines el formato en el código de tu página, y DevTools lo detecta automáticamente.

### El formato base tiene tres propiedades

```javascript
{
  header: function(obj)   { /* Vista previa del objeto        */ },
  hasBody: function(obj)  { /* ¿Tiene más info para expandir? */ },
  body: function(obj)     { /* Lo que se ve al expandirlo     */ }
}
```

Todo esto se basa en `JsonML` (una forma muy extraña de escribir HTML en arrays). [Link](http://www.jsonml.org/).

### ¿Qué hace cada una?

- `header`: Devuelve una vista previa del objeto, en formato `JsonML`.
- `hasBody`: Devuelve un booleano que indica a DevTools si el objeto se puede expandir para mostrar más información.
- `body`: Devuelve la vista previa del objeto cuando está expandido, también en formato `JsonML`.

## Ejemplo práctico

Digamos que tienes una clase `UserBadge` que representa a un usuario con su nombre y nivel:

```javascript
class UserBadge {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}
```

Ahora quieres que al hacer `console.log(miUsuario)` en las DevTools, no salga esa cosa gris deprimente, sino algo que tenga estilo. Entonces haces tu custom formatter:

```javascript
const userBadgeFormatter = {
  header: function (object) {
    if (!(object instanceof UserBadge)) return null;

    return [
      "div",
      {
        style: `
          background-color: #f0f0f0;
          color: #333;
          border-left: 4px solid ${
            object.level === "Admin" ? "#7c3aed" : "#ffeb00"
          };
          padding: 0.25rem 0.5rem;
          font-weight: bold;
          font-family: sans-serif;
        `,
      },
      `${object.level === "Admin" ? "👑" : "👤"} ${object.name} (${
        object.level
      })`,
    ];
  },

  hasBody: function (object) {
    return object instanceof UserBadge;
  },

  body: function (object) {
    return [
      "div",
      {
        style:
          "margin-top: 0.5rem; font-family: sans-serif; font-size: 0.9rem;",
      },
      [
        "div",
        {},
        ["span", { style: "font-weight: bold; color: #333;" }, "Nombre: "],
        ["span", {}, object.name],
      ],
      [
        "div",
        {},
        ["span", { style: "font-weight: bold; color: #333;" }, "Nivel: "],
        ["span", {}, object.level],
      ],
      [
        "div",
        { style: "margin-top: 0.5rem;" },
        [
          "span",
          { style: "opacity: 0.9;" },
          "🚀 Mira este log. Bien chido. Copado. Estéticamente inmejorable.",
        ],
      ],
    ];
  },
};
```

Añade tu objeto formateador al array global `window.devtoolsFormatters`:

```javascript
window.devtoolsFormatters = [userBadgeFormatter];
```

Eso es todo, no necesitas hacer nada más. Ahora, cada vez que los objetos `UserBadge` se muestren en las DevTools (por ejemplo, cuando uses `console.log(object)`), se mostrarán usando el formateador personalizado que has definido.

## Resultado

En esta imagen puedes ver el resultado de usar el formateador personalizado, primero sin expandir el objeto y luego expandido:

![Resultado de usar el formateador personalizado](../../assets/blog/personaliza-como-se-ven-los-objetos-en-las-devtools/log-1.png)
![Resultado de usar el formateador personalizado](../../assets/blog/personaliza-como-se-ven-los-objetos-en-las-devtools/log-2.png)

## Conclusión

Personalizar cómo se muestran tus objetos en las DevTools no va a resolver todos tus bugs, pero al menos lo harás con algo de dignidad visual.

Los **Custom Object Formatters** no son solo una curiosidad, son una herramienta para mejorar tu productividad, tu comprensión de la aplicación, y por qué no, tu autoestima como developer.
