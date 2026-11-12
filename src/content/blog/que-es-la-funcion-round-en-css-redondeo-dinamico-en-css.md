---
title: "Qué es la función round() en CSS: redondeo dinámico"
description: "Descubre qué es y cómo utilizar la función round() en CSS para manejar valores de manera dinámica. Aprende a redondear hacia arriba, hacia abajo (o hacia cero). ¡Potencia tu CSS con esta nueva función matemática!"
pubDate: 2025-02-12
updatedDate: 2026-11-12
type: blog
author: Jorge Baumann
tags:
  - CSS
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Qu%C3%A9%20es%20la%20funci%C3%B3n%20round()%20en%20CSS%3A%20redondeo%20din%C3%A1mico&tags=CSS"
---

La función `round()` de CSS redondea un valor al múltiplo más cercano de otro: `round(123px, 50px)` da `100px`. Funciona en todos los navegadores modernos desde mayo de 2024 y se une a otras funciones matemáticas como `calc()` o `min()`, permitiendo cálculos más precisos sin hacks de JavaScript.

## Sintaxis

```css
round(<estrategia>, <valor>, <intervalo>)
```

Por ejemplo:

```css
width: round(up, var(--ancho), 50px);
```

## Cómo funciona la función round() en CSS

La función `round()` permite redondear un número al múltiplo más cercano de un valor específico. Se compone de 3 parámetros:

- **Estrategia de redondeo** (opcional): Puede ser `nearest` (por defecto), `up`, `down` o `to-zero`.
- **Valor a redondear**: Puede ser una variable CSS, un valor numérico o el resultado de otra operación matemática.
- **Múltiplo al que redondear**: Define el valor base al que se ajustará el resultado.

El valor y el múltiplo tienen que ser del mismo tipo: dos longitudes, dos números, dos ángulos... Si mezclas un número sin unidad con una longitud, como en `round(123, 50px)`, la declaración es inválida y el navegador la descarta.

## Ejemplos de uso de la función round() en CSS

```css
--customProp: 123px;

/* Redondea al múltiplo más cercano de 50px */
width: round(var(--customProp), 50px); /* ==> 100px */

/* Redondea hacia abajo al múltiplo de 50px más cercano */
width: round(down, var(--customProp), 50px); /* ==> 100px */

/* Redondea hacia arriba */
width: round(up, var(--customProp), 50px); /* ==> 150px */

/* Redondea acercándose a cero */
width: round(to-zero, var(--customProp), 50px); /* ==> 100px */
```

## Estrategias de redondeo explicadas

En esta tabla puedes ver los resultados de ejecutar `round(estrategia, valor, 50px)` con las cuatro estrategias, para un valor positivo y otro negativo:

| Estrategia                | Descripción                      | Con `123px` | Con `-123px` |
| :------------------------ | :------------------------------- | :---------- | :----------- |
| `nearest` _(por defecto)_ | Redondea al múltiplo más cercano | `100px`     | `-100px`     |
| `up`                      | Siempre redondea hacia arriba    | `150px`     | `-100px`     |
| `down`                    | Siempre redondea hacia abajo     | `100px`     | `-150px`     |
| `to-zero`                 | Redondea acercándose a cero      | `100px`     | `-100px`     |

Con valores positivos `to-zero` y `down` dan lo mismo. La diferencia aparece con los negativos: `down` se aleja de cero (hacia abajo siempre es hacia menos infinito) y `to-zero` se acerca.

Ejemplo:

```css
width: round(to-zero, -123px, 50px); /* ==> -100px */
width: round(down, -123px, 50px); /* ==> -150px */
```

## Compatibilidad

La función `round()` es parte del estándar CSS Values and Units Level 4 y está disponible en los tres motores principales desde mayo de 2024:

| Navegador      | Disponible desde               |
| :------------- | :----------------------------- |
| Chrome y Edge  | Versión 125 (mayo de 2024)     |
| Firefox        | Versión 118                    |
| Safari         | Versión 15.4                   |

## ¿Por qué usar round() en CSS?

- **Precisión**: Permite cálculos más precisos y consistentes en el diseño.
- **Menos dependencia de JavaScript**: Se puede hacer redondeo directamente en CSS.
- **Compatibilidad creciente**: Soporte en navegadores modernos sin necesidad de hacks.
- **Manejo de intervalos personalizados**: Puedes definir intervalos de redondeo personalizados (`20px` o `13%`), lo que te permite ajustar el redondeo según el contexto.
- **Simplificación del código**: `round()` evita cálculos manuales o combinaciones de `calc()` y condicionales, haciendo tu código más limpio y mantenible.

## Cuándo round() es realmente útil en CSS

Si usas `round()` con un número fijo (por ejemplo, `round(123px, 50px)`), entonces podrías simplemente escribir `100px` directamente en tu CSS. La verdadera utilidad de `round()` está en los valores dinámicos, como:

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

## Fuentes

- [`round()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/round), en MDN (en inglés), con la tabla de compatibilidad de navegadores.
- [CSS Values and Units Module Level 4](https://www.w3.org/TR/css-values-4/#round-func), la sección de la especificación del W3C que define `round()`, `mod()` y `rem()`.
