---
title: "RIP styled-components: 2016–2025 💅"
description: "Una despedida breve para una herramienta que nunca terminó de convencerme. No habrá más features y tampoco lágrimas."
pubDate: 2025-04-14
tags:
  - JavaScript
  - Tools
---

**Styled-components**, esa pequeña gran herramienta que alguna vez se sintió como magia en React, ha sido oficialmente enviada al _modo maintenance_.

Fin del soporte. No del todo inesperado. Algunos lo usaron, otros lo amaron. Yo solo lo toleré.

Sin anuncios rimbombantes ni despedidas grandilocuentes. Solo una [nota](https://opencollective.com/styled-components/updates/thank-you) y la desaparición del botón de donaciones.

## ¿Por qué murió?

- React cambió las reglas del juego y dejó a styled-components sin terreno donde jugar.
- La moda `CSS-in-JS` se fue con la misma velocidad con la que llegó. Tailwind, PostCSS y los CSS modules dijeron "hola" mientras los demás cerraban el telón.
- El maintainer principal (Evan Jacobs) lleva años sin usarlo en producción: sin uso activo, no hay contexto real, ni urgencia, ni ganas. Y eso se nota.

No hay odio aquí. Tal vez fue útil en su momento, pero ese momento ya pasó.

## La verdad

Sinceramente, nunca me convenció. Siempre me pareció un poco forzado, una solución elegante a un problema creado por el propio ecosistema.

```javascript
const FancyButton = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "red")};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`;
```

```html
<FancyButton primary>Click me</FancyButton>
```

Eso sí, fue el uso más creativo de las `template literals` que existió en el momento. Convirtieron un simple `string` multi-línea en un pequeño motor de estilos dinámicos, donde podías interpolar props, condiciones y CSS (y estaba lleno de ternarios).

## Cuando mantener deja de tener sentido

Por otro lado, pobre _quantizor_. Mantener un proyecto open source grande, con miles de usuarios y expectativas constantes, sin usarlo ya en tu día a día... es una receta para el agotamiento.

Lo sorprendente no es que haya entrado en maintenance mode, lo sorprendente es que haya aguantado tanto. Hacer esto sin motivación ni contexto real de uso es simplemente abrumador.

### RIP styled-components

Descansa tranquilo en `node_modules`. Te lo mereces (creo).

## ¿Y ahora qué?

Si vas a empezar un proyecto nuevo, ni se te ocurra considerar styled-components. No está dormido, está fuera de combate.

Y si ya lo tienes en tu proyecto... es hora de ir planeando esa migración que llevas postergando desde 2017.
