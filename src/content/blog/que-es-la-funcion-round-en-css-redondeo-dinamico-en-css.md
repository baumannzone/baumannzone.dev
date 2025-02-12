---
title: "Qué es la función round() en CSS: redondeo dinámico"
description: "Descubre qué es y cómo utilizar la función round() en CSS para manejar valores de manera dinámica. Aprende a redondear hacia arriba, hacia abajo (o hacia cero). ¡Potencia tu CSS con esta nueva función matemática!"
pubDate: 2025-02-12
type: blog
author: Jorge Baumann
tags:
  - CSS
---

Desde mayo de 2024, podemos utilizar la función `round()` para redondear valores en CSS. Esta función se une a otras funciones matemáticas como `calc()` o `min()`, permitiendo cálculos más precisos sin hacks de JavaScript.

## Sintaxis

```css
width: round(120px, var(--rounding-interval));
```

## Cómo funciona la función round() en CSS

La función `round()` permite redondear un número al múltiplo más cercano de un valor específico. Se compone de 3 parámetros:

- **Estrategia de redondeo** (opcional): Puede ser `nearest` (por defecto), `up`, `down` o `to-zero`.
- **Valor a redondear**: Puede ser una variable CSS, un valor numérico o el resultado de otra operación matemática.
- **Múltiplo al que redondear**: Define el valor base al que se ajustará el resultado.

## Ejemplos de uso de la función round() en CSS

```css
--customProp: 123;

/* Redondea al múltiplo más cercano de 50px */
width: round(var(--customProp), 50px); /* ==> 150px */

/* Redondea hacia abajo al múltiplo de 50px más cercano */
width: round(down, var(--customProp), 50px); /* ==> 100px */

/* Redondea hacia arriba */
width: round(up, var(--customProp), 50px); /* ==> 150px */

/* Redondea acercándose a cero */
width: round(to-zero, var(--customProp), 50px); /* ==> 100px */
```

## Estrategias de redondeo explicadas

En esta tabla puedes ver los resultados de ejecutar `round(strategy, 123, 50px)` con diferentes estrategias de redondeo:

| Estrategia                | Descripción                      | Ejemplo |
| :------------------------ | :------------------------------- | :------ |
| `nearest` _(por defecto)_ | Redondea al múltiplo más cercano | `150px` |
| `up`                      | Siempre redondea hacia arriba    | `150px` |
| `down`                    | Siempre redondea hacia abajo     | `100px` |
| `to-zero`                 | Redondea acercándose a cero      | `100px` |

`to-zero` es interesante porque, a diferencia de `down`, también afecta a valores negativos.

Ejemplo:

```css
width: round(to-zero, -123px, 50px); /* ==> -100px */
```

## Compatibilidad

La función `round()` es parte del estándar CSS [Values and Units Level 4](https://www.w3.org/TR/css-values-4/) y es compatible con la mayoría de los navegadores modernos desde mayo de 2024.

## ¿Por qué usar round() en CSS?

- **Precisión**: Permite cálculos más precisos y consistentes en el diseño.
- **Menos dependencia de JavaScript**: Se puede hacer redondeo directamente en CSS.
- **Compatibilidad creciente**: Soporte en navegadores modernos sin necesidad de hacks.
- **Manejo de intervalos personalizados**: Puedes definir intervalos de redondeo personalizados (`20px` o `13%`), lo que te permite ajustar el redondeo según el contexto.
- **Simplificación del código**: round() evita cálculos manuales o combinaciones de calc() y condicionales, haciendo tu código más limpio y mantenible.

## Cuándo round() es realmente útil en CSS

Si usas `round()` con un número fijo (por ejemplo, `round(123px, 50px)`), entonces podrías simplemente escribir `150px` directamente en tu CSS. La verdadera utilidad de `round()` está en los valores dinámicos, como:

1. Variables CSS

```css
--dynamic-width: 127px;
width: round(var(--dynamic-width), 50px); /* Se adapta dinámicamente */
```

2. Resultados de `calc()`

```css
width: round(calc(100% / 3), 10px); /* Redondea el resultado de una división */
```

3. Ajuste dinámico con `clamp()`

```css
width: round(clamp(120px, 50vw, 300px), 25px);
```

4. Diseños responsive (evitando píxeles fraccionados)

```css
font-size: round(1.3rem, 0.25rem);
```

5.  Redondeo en valores negativos con `to-zero`

```css
width: round(to-zero, -137px, 50px); /* ==> -100px */
```

### ✍️ TL;DR:

- Si el valor es estático, redondéalo manualmente.
- Si el valor es dinámico (variables, `calc()`, `clamp()`), `round()` ayuda a mantener el código limpio y predecible.

---

🚀 Ahora que ya conoces `round()`, ¿cómo lo aplicarías en tu CSS? Deja tu comentario abajo 👇.
