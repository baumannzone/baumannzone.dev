---
title: "Enlaces de afiliados bien etiquetados con 'sponsored'"
description: "Mejora tu SEO marcando enlaces de afiliados como patrocinados. Google te lo agradecerá."
pubDate: 2025-09-14
tags:
  - TIL
  - SEO
  - HTML
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Enlaces%20de%20afiliados%20bien%20etiquetados%20con%20'sponsored'&tags=SEO,TIL"
---

Hace unos días, estaba revisando la documentación sobre los enlaces en HTML y vi, por primera vez, la recomendación de usar `rel="sponsored"` para enlaces de afiliados. 

**TL;DR:** Si un enlace implica dinero (afiliado o patrocinio), márcalo con `rel="sponsored"`.

## ¿Qué es `rel="sponsored"`?

El atributo `rel` (de "_relationship_") describe la relación entre tu página y el destino del enlace. Cuando usas `rel="sponsored"`, indicas que el enlace es comercial, es decir, que hay una compensación por recomendar ese producto o servicio.

## ¿Por qué es importante?

- **Cumples las directrices de Google**: ayudas a los buscadores a identificar correctamente enlaces de afiliación
- **Mejor SEO**: tus páginas se indexan con mayor precisión al dar contexto sobre la naturaleza comercial
- **Transparencia**: refuerzas la confianza con tu audiencia al señalar la relación comercial

## Ejemplo básico

```html
<a
  href="https://amzn.to/41PGFr4"
  target="_blank"
  rel="sponsored"
>
  Gloomhaven
</a>
```

Es realmente sencillo. Solo añade `rel="sponsored"` a tus enlaces de afiliados. Yo acabo de actualizar varios posts antiguos con enlaces de Amazon y otros programas de afiliados.

## Más allá de `sponsored`

Además de `sponsored`, existen otros valores útiles para el atributo `rel`:

- `nofollow`: Indica a los motores de búsqueda que no sigan el enlace. Útil para enlaces no confiables o de baja calidad.
- `ugc`: Significa "_User Generated Content_" y se usa para enlaces en comentarios o foros.
- `noopener` y `noreferrer`: Mejoran la seguridad y privacidad al abrir enlaces en una nueva pestaña.

### Más info
- https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links

