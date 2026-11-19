---
title: "RSL: el nuevo estándar que quiere que la IA pague por tu contenido"
description: "RSL 1.0 ya es un estándar oficial. Qué es Really Simple Licensing, cómo se declara en el robots.txt, qué modelos de pago admite y por qué aún es voluntario."
pubDate: 2025-09-22
updatedDate: 2026-11-19
author: Jorge Baumann
intro: true
tags:
  - IA
  - Web
  - SEO
relatedPosts:
  - "controla-lo-que-los-motores-de-busqueda-rastrean-en-tu-web-guia-practica-de-robots-txt"
  - "enlaces-de-afiliados-bien-etiquetados-con-sponsored"
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=RSL%3A%20el%20nuevo%20est%C3%A1ndar%20que%20quiere%20que%20la%20IA%20pague%20por%20tu%20contenido&tags=IA,Web,SEO"
---

**RSL (Really Simple Licensing)** es un estándar abierto para decirles a los bots de IA, en un formato que entienden las máquinas, qué pueden hacer con tu contenido y cuánto les cuesta. Se declara con una línea en el `robots.txt` que apunta a un archivo XML con tus condiciones. La versión 1.0 es oficial desde el 10 de diciembre de 2025, pero cumplirla sigue siendo voluntario.

Cuando escribí este post, en septiembre de 2025, RSL acababa de presentarse con **Reddit**, **Yahoo** y **Medium** a bordo. En tres meses pasó de propuesta a estándar, así que lo he actualizado.

![RSL: el nuevo estándar que busca que las empresas de IA paguen por entrenar con contenido](../../assets/blog/rsl-el-nuevo-estandar-que-quiere-que-la-ia-pague-por-tu-contenido/image.png)

## ¿Qué es RSL (Really Simple Licensing)?

Hasta ahora, la única defensa que teníamos era el clásico `robots.txt` para bloquear rastreadores. El problema es que eso solo sirve para impedir, no para negociar: o dejas pasar al bot o no.

RSL añade una capa de licencias encima. Puedes permitir el acceso y, a la vez, decir qué usos valen (entrenar modelos, generar respuestas, aparecer en un buscador) y bajo qué condiciones económicas.

Se inspira en dos cosas que ya conoces: el formato RSS y el protocolo de exclusión de robots, el del `robots.txt`. Lo mantiene un comité técnico con gente de Yahoo, Automattic, Fastly, Condé Nast, O'Reilly, Ziff Davis y Schema.org.

## ¿Cómo funciona RSL en la práctica?

Necesitas dos piezas: un archivo XML con la licencia y una forma de que los bots lo encuentren.

La forma más sencilla de enlazarlo es una línea `License:` en tu `robots.txt`:

```plaintext
User-agent: *
License: https://example.com/rsl-license.xml
```

También se puede anunciar con una cabecera HTTP `Link`, dentro de un feed RSS o con un `<link>` en el HTML.

El archivo XML describe las condiciones. Este, por ejemplo, deja que los buscadores te indexen pero prohíbe cualquier uso por IA, incluidos los resúmenes generados en el propio buscador:

```xml
<rsl xmlns="https://rslstandard.org/rsl">
  <content url="/">
    <license>
      <prohibits type="usage">ai-all</prohibits>
    </license>
  </content>
</rsl>
```

Y este otro permite entrenar modelos con todo el sitio, pero cobra 0,015 dólares cada vez que un bot descarga una página:

```xml
<rsl xmlns="https://rslstandard.org/rsl">
  <content url="/">
    <license>
      <permits type="usage">ai-train</permits>
      <payment type="crawl">
        <amount currency="USD">0.015</amount>
        <standard>https://example.com/licenses/pay-per-crawl</standard>
      </payment>
    </license>
  </content>
</rsl>
```

El atributo `url` usa las mismas rutas y comodines que el `robots.txt`, así que puedes poner condiciones distintas para `/articulos/` y para el resto del sitio.

## ¿Qué puedes permitir o prohibir?

Estos son los usos que define el estándar:

- `all`: cualquier procesamiento automático, incluidos la IA y los buscadores.
- `ai-all`: cualquier uso por IA. Incluye los tres siguientes.
- `ai-train`: entrenar o ajustar modelos.
- `ai-input`: usar tu contenido para generar respuestas, como en RAG o en los resúmenes con IA de un buscador.
- `ai-index`: guardarlo en el índice interno de un sistema de IA.
- `search`: indexarlo y mostrar enlaces y fragmentos en un buscador. No incluye los resúmenes generados con IA.

Además puedes limitar la licencia por tipo de usuario (comercial, educativo o personal) y por país.

## Modelos de pago

La licencia puede pedir distintos tipos de compensación:

- **Pago único** (`purchase`).
- **Suscripción** (`subscription`): pago recurrente por acceso continuado.
- **Pago por entrenamiento** (`training`): cada vez que tu contenido se usa para entrenar un modelo.
- **Pago por rastreo** (`crawl`): cada vez que un bot descarga tu contenido.
- **Pago por uso** (`use`): cada vez que tu contenido contribuye a una respuesta generada por IA.
- **Contribución** (`contribution`): una aportación de buena fe, en dinero o en especie.
- **Atribución** (`attribution`): gratis, pero con crédito visible y un enlace al original.
- **Gratis** (`free`): sin pago ni atribución.

Para cobrar de verdad, el estándar incluye tres protocolos opcionales: uno para conseguir y validar licencias (OLP, una extensión de OAuth 2.0), otro para que los bots con licencia se autentiquen (CAP) y otro para cifrar contenido de pago (EMS). Si no los necesitas, puedes usar RSL solo para publicar tus condiciones.

## ¿Por qué es importante para creadores de contenido y medios de comunicación?

Esto es lo guapo:

- **Más poder de negociación**. Los creadores dejan de estar en manos de los gigantes de IA.
- **Recuperar valor perdido**. Si antes los modelos se llevaban contenido gratis, ahora hay un marco para pedir compensación.
- **Nuevo modelo de negocio**. Esto puede abrir la puerta a ingresos adicionales para medios grandes y pequeños.

En un ecosistema donde Google y OpenAI ya han cerrado acuerdos millonarios con medios, RSL busca democratizar esas reglas y que no dependas de un contrato privado para proteger tu contenido.

## ¿Quién apoya RSL?

- **10 de septiembre de 2025**: se presenta el estándar, con Reddit, Yahoo y Medium entre los primeros apoyos.
- **10 de diciembre de 2025**: se publica RSL 1.0 como _Recommendation_, es decir, una versión estable y lista para implementar.
- **Noviembre de 2026**: según la web oficial, más de 1.500 editores, marcas, empresas tecnológicas y organizaciones de estándares han anunciado su apoyo.

Entre ellos hay CDN como Cloudflare y Akamai, que ya ofrecen servicios para cobrar a los bots de IA, y Fastly, que forma parte del comité. Esto importa más de lo que parece: una CDN puede bloquear o cobrar a un bot antes de que llegue a tu servidor.

## ¿Cuáles son los problemas de RSL?

Pues... no es tan simple:

- **Cumplirlo es voluntario**. Un archivo XML no detiene a un bot que decide ignorarlo. RSL te da un registro de licencias y pruebas que pueden ayudarte en un juicio, pero no es una ley.
  (Si quieres saber más sobre robots.txt, [mira esta guía](/blog/controla-lo-que-los-motores-de-busqueda-rastrean-en-tu-web-guia-practica-de-robots-txt/))
- **Adopción desigual**. Que miles de webs publiquen sus condiciones no sirve de mucho si los bots de IA no las consultan. El estándar no obliga a ninguna empresa de IA a hacerlo.
- **Riesgo de fragmentación**. Hay otras iniciativas parecidas, y si cada plataforma usa la suya, la movida no funciona. RSL intenta evitarlo dejando que una licencia apunte a los sistemas de cobro que ya usan las CDN.

En resumen: es un buen comienzo, pero no es la solución definitiva.

## ¿Lo uso en este blog?

No. Mi `robots.txt` hace justo lo contrario: da la bienvenida explícita a los bots de IA, tanto a los que entrenan modelos como a los de búsqueda.

Pero si vives de lo que publicas, RSL te da algo que el `robots.txt` nunca tuvo: una forma de decir "sí, pero pagando".

## Conclusión

RSL pasó de anuncio a estándar oficial en tres meses, y el apoyo de las CDN le da algo con lo que bloquear o cobrar a los bots. Lo que falta es que las empresas de IA lo lean y lo respeten.

¿Será suficiente? Nadie lo sabe. Pero lo que está claro es que estamos pasando de un "los bots hacen lo que quieren" a un "si quieres mi contenido, hablamos de condiciones". Y eso, para el futuro de la web, ya es un paso enorme.

## Fuentes

- [RSL 1.0 Specification](https://rslstandard.org/rsl), en la web oficial de RSL.
- [About RSL](https://rslstandard.org/about), con el comité técnico y los apoyos.
- [Really Simple Licensing spec lets web publishers demand their due from AI scrapers](https://www.theregister.com/2025/12/10/really_simple_licensing_spec_takes/), en The Register.
