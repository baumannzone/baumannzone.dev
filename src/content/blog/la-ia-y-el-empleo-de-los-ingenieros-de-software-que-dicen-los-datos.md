---
title: "La IA y el empleo de los ingenieros de software: qué dicen los datos"
description: "Más código generado no equivale a más software entregado ni demuestra que desaparezcan los puestos de ingeniería. Una lectura de los datos con matices."
pubDate: 2026-09-21
updatedDate: 2026-09-29
author: "Jorge Baumann"
type: "blog"
tags: ["IA", "Career"]
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=La%20IA%20y%20el%20empleo%20de%20los%20ingenieros%20de%20software%3A%20qu%C3%A9%20dicen%20los%20datos&tags=IA,Career"
relatedPosts:
  - "como-dar-mejor-contexto-a-un-agente-de-ia-para-programar"
  - "si-solo-escribes-codigo-no-estas-haciendo-suficiente-segun-esta-metrica"
---

Llevamos un par de años con el mismo runrún: _"la IA va a quitar el trabajo a los programadores"_. Cada semana hay un CEO anunciando despidos "por la IA" y un tuit con el porcentaje de código que ya escribe un modelo.

Yo también me lo he preguntado. Y la respuesta que más me ha convencido hasta ahora no viene de un hilo de X, sino de un ensayo con datos: [Why AI hasn't replaced software engineers, and won't](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers), de **Arvind Narayanan** y **Sayash Kapoor**, los autores de _AI as Normal Technology_ (Princeton).

Este post es mi lectura de ese ensayo, con mis opiniones. No es una traducción. Si te interesa el tema, lee el original: merece la pena.

## Los despidos "por la IA" son, muchas veces, _AI washing_

Los autores cogen tres despidos masivos de 2026 que la prensa vendió como "culpa de la IA" y miran qué había detrás:

- **Block** (Cash App, Square): 4.000 despidos. Jack Dorsey habló de "equipos más pequeños y planos" gracias a la IA. La realidad: la empresa había más que triplicado su plantilla en la pandemia y tenía una presión financiera enorme. Una data scientist de Cash App contó que les habían "metido la IA a la fuerza" y que las mejoras de productividad eran mínimas.
- **Snap**: 1.000 despidos. El CEO citó la IA y el famoso "el 65 % del código nuevo lo escribe la IA". La realidad: un inversor activista exigiendo recortes. Y los recortes ni siquiera cuadraban con lo que esperarías si fuera por IA: no fue un tijeretazo a los puestos de programación, sino, por ejemplo, 150 puestos de todo tipo en la división de realidad aumentada.
- **Intuit**: 3.000 despidos anunciados a la vez que acuerdos con Anthropic y OpenAI. Aquí el propio CEO desmontó la historia: _"nada de esto tenía que ver con la IA"_. Eran capas de management y puestos de coordinación.

Y esto no es cosa de tres empresas. Hay datos a nivel de toda la economía:

- El **59 % de los responsables de contratación** en EE. UU. admite en [una encuesta](https://www.resumetemplates.com/the-great-turnover-9-in-10-companies-plan-to-hire-in-2026-yet-6-in-10-will-have-layoffs-2/) que menciona la IA al explicar despidos o congelaciones porque **queda mejor que decir "no hay dinero"**.
- Nueva York añadió en 2025 una casilla a las notificaciones oficiales de despidos masivos (la ley WARN) para indicar si la causa era la IA o la automatización. En el primer año, más de **160 empresas** presentaron notificaciones. **Ninguna marcó la casilla.** Ni una. (Meses después, una: Nespresso).

Hay una idea más de fondo que me parece la clave: **los despidos son una mala señal para medir la productividad de la IA**. Si una herramienta realmente te hace más productivo, lo que haces es contratar más despacio, no despedir a la gente que tiene el conocimiento del sistema. Despedir es caro, destroza la moral y te cargas justo el conocimiento tácito que hace falta para usar bien la IA.

¿Significa esto que la IA no afecta al empleo? No. Un [estudio de la Reserva Federal](https://www.federalreserve.gov/econres/feds/files/2026018pap.pdf) calcula que el empleo de ingenieros de software sigue creciendo, pero unos **3 puntos porcentuales al año más despacio** que en un escenario sin IA. Los propios autores avisan de que no es un efecto causal limpio, pero apunta a un frenazo, no a un colapso.

## El sándwich: decidir, ejecutar, entregar

Esta es la parte del ensayo que más me gusta, porque explica el **porqué**.

El razonamiento típico es: _"si la IA escribe todo el código, ya no hacen falta programadores"_. El problema es la premisa. **Escribir código nunca fue el cuello de botella.** Un paper de 2019 resumía los estudios existentes con esta conclusión: los desarrolladores dedican a escribir código entre el **9 % y el 61 %** de su tiempo, según el estudio. Y sus propios datos, de 6.000 developers de Microsoft, decían lo mismo. El resto es otra cosa.

¿Y qué es esa otra cosa? Los autores lo resumen como un **sándwich de tres capas**:

1. **Decidir**: entender el problema, especificar qué hay que construir, planificar. Requiere pensar en usuarios, negocio, prioridades y a veces regulación.
2. **Ejecutar**: diseñar e implementar. Escribir el código.
3. **Entregar**: probar, verificar, integrar, mantener y **responsabilizarte** de lo que sale a producción.

Y todo eso apoyado en una cuarta cosa que atraviesa las tres: **entender profundamente el sistema**, el código, el negocio y el entorno.

La IA ha comprimido brutalmente la capa del medio. Pero las otras dos siguen ahí, casi intactas.

Hay un dato que lo demuestra de forma bastante clara: [un estudio con más de 100.000 desarrolladores en GitHub](https://cepr.org/voxeu/columns/writing-code-versus-shipping-code-productivity-effects-across-generations-ai-coding) encontró que, sumando autocompletado, agentes interactivos y agentes autónomos, los commits subieron un **180 %**… pero las releases solo un **30 %**. Casi el triple de commits, un 30 % más de software entregado. Ahí tienes el sándwich: el medio se ha aplastado, pero el pan de arriba y el de abajo siguen siendo humanos.

¿Y no se puede comprimir más el sándwich con modelos mejores? Los autores creen que no, y yo estoy bastante de acuerdo. Cuando una decisión se puede delegar a la IA, deja de ser una ventaja competitiva y **el valor de decidir sube de nivel**. Siempre hay una decisión más arriba que sigue siendo tuya. Y en la capa de entregar, alguien tiene que ser responsable de lo que se despliega. Podemos elegir, como sociedad e industria, que ese alguien siga siendo una persona.

La metáfora que usan me encanta: el ingeniero del futuro se parece más a un **operador de grúa**. La máquina levanta el peso, pero tú decides dónde va cada cosa y respondes si algo se cae.

Por cierto, esto no es nuevo. Hace más de veinte años que en EE. UU. se contabiliza "programador" por separado de "ingeniero de software". El programador solo hace la capa del medio. Y es un rol que **encoge y se paga peor**. La IA no ha inventado la tendencia, solo ha pisado el acelerador.

## Vibe coding no es ingeniería agéntica

Parte de la confusión viene de que llamamos _vibe coding_ a cosas que no tienen nada que ver entre sí.

**Vibe coding de verdad** es: le dices al agente lo que quieres, no lo supervisas, no lees el código (puede que ni sepas leerlo) y no evalúas el resultado más allá de ver si "funciona".

**Ingeniería agéntica** es lo que hace la mayoría de developers que usan agentes en serio: los usas como herramienta, revisas lo que hacen, y **la responsabilidad del resultado sigue siendo tuya**.

Y resulta que supervisar bien a un agente **cansa**. Simon Willison cuenta que a las 11 de la mañana ya está mentalmente agotado de supervisar agentes. Cualquiera que haya pasado un día entero con Claude Code o Cursor sabe de qué habla.

Los datos van en la misma línea. En [SWE-chat](https://arxiv.org/abs/2604.20779), un dataset de sesiones reales con agentes que los propios desarrolladores compartieron:

- Solo el **44 % del código generado por agentes sobrevive** hasta el commit final.
- Los commits hechos con vibe coding introducen **9 veces más vulnerabilidades** que los hechos solo por humanos.
- Lo que más pide la gente al agente **no es generar código nuevo, sino entender el existente**.

Esto conecta con algo que ya conté en [cómo dar mejor contexto a un agente de IA](/blog/como-dar-mejor-contexto-a-un-agente-de-ia-para-programar): el trabajo real con un agente no es escribir el prompt y esperar. Es **definir el entorno en el que piensa**, revisar lo que hace y saber cuándo se está equivocando. Eso es ingeniería. Y para hacerlo bien tienes que entender el código que estás supervisando.

La conclusión práctica para el debate del empleo es simple: **no puedes sacar software a producción contratando vibe coders en lugar de ingenieros**.

## ¿Y el futuro?

Aquí el ensayo se pone optimista, con matices.

Cuando algo se vuelve más barato de producir, se produce **mucho más**. El software es extremadamente elástico: no hay un tope de "cuánto software necesita el mundo". Un coche moderno lleva unos **100 millones de líneas de código**. Y ahora que programar es más barato, la gente está creando utilidades de usar y tirar que antes no tenía sentido crear. Más software barato → más demanda de software → más demanda de gente que sepa decidir qué construir y responsabilizarse de ello.

Compara con la agricultura: ahí la automatización sí arrasó con el empleo, porque la cantidad de calorías que comemos es más o menos fija. La cantidad de software que consumimos, no.

¿Y lo de que "ahora cualquiera puede programar"? Los autores apuestan en contra, y me parece un argumento sólido. **Cada vez que ha salido una herramienta "para que programe cualquiera" se ha dicho lo mismo**: FORTRAN, COBOL, SQL. Nunca pasó. Porque la barrera nunca fue la sintaxis. **La barrera es tener el criterio para tomar buenas decisiones y responder por ellas.**

Eso sí, hay un aviso importante al final: que la **demanda agregada** de ingenieros se mantenga fuerte **no significa que tu carrera concreta esté a salvo**. Va a haber cambios estructurales enormes en cómo se produce software, y va a importar mucho en qué tipo de empresa estás, tu nivel y, sobre todo, **a qué velocidad te adaptas**. Ese es el tema del siguiente ensayo de la serie, y también me parece la parte más honesta.

## Con qué me quedo

Si me quedo con una idea: **la IA no reemplaza al ingeniero, reemplaza al programador puro**. Al que solo hace la capa del medio. Y ese rol ya llevaba tiempo en declive.

Lo que sube de valor es justo lo que la IA no hace bien: entender el problema, decidir qué construir, revisar lo que sale y dar la cara por ello. El código es cada vez más barato. El criterio, no.

Así que mi consejo es el de siempre, pero con más urgencia: aprende a supervisar agentes como si fuera parte de tu trabajo (porque lo es), y no dejes de entender el código que firmas.

¿Tú qué ves en tu equipo? ¿Más código, más releases, o solo más ruido? Te leo en los comentarios.
