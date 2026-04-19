---
title: "Cómo dar mejor contexto a un agente de IA para programar"
description: "Una guía práctica para dar mejor contexto a un agente de IA al programar, reducir errores y conseguir respuestas más útiles desde el primer intento."
pubDate: 2026-03-17
# published: false
author: "Jorge Baumann"
type: "blog"
tags: ["IA", "Fundamentals"]
---

Los asistentes de programación con IA son increíblemente potentes… pero también increíblemente sensibles al contexto.
Muchas veces no fallan porque el modelo sea malo, sino porque le estamos dando **el contexto equivocado**.

Aquí tienes consejos prácticos para dar mejor contexto al trabajar con asistentes de código con IA:

## Sé específico en tus prompts 
Las instrucciones vagas producen resultados vagos. En lugar de "_arregla esto_", di "_arregla el undefined is not a function en el flujo de registro de usuarios_". Una intención clara le da al modelo un objetivo mejor.

## Incluye los archivos relevantes 
La mayoría de los asistentes de código con IA extraen automáticamente contexto de tus archivos abiertos, la salida de la terminal y los errores del linter. Asegúrate de que los archivos más relevantes para tu tarea estén abiertos o se mencionen explícitamente para que el modelo tenga la información correcta con la que trabajar.

## Usa imágenes cuando ayuden 
Muchas de estas herramientas de IA admiten archivos adjuntos de imagen. Si tienes un mockup de diseño, una captura de un error o un diagrama, adjúntalo directamente en lugar de intentar describirlo con texto. Casi siempre funcionan pegando (con `Cmd ⌘ + V`) la imagen en el chat.

## Mantén las conversaciones organizadas
Cada mensaje en una conversación, tanto los tuyos como las respuestas de la IA, se acumula en la **ventana de contexto**. Las conversaciones largas y dispersas hacen que al modelo le cueste más mantenerse en el buen camino. Empieza una conversación nueva cuando cambies a una tarea distinta.

## Vigila tus límites de contexto 
Los modelos tienen una longitud máxima de contexto. A medida que las conversaciones se alargan, la información más antigua puede quedarse fuera de la ventana. Si notas que el modelo pierde el hilo de decisiones anteriores, plantéate resumir el estado actual y empezar de nuevo.

## Proporciona un plan o una estructura 
Para tareas complejas, darle al modelo un plan paso a paso (o pedirle que genere uno antes de ejecutar) ayuda a mantener organizada la memoria de trabajo, igual que una receta guía un proceso de cocina. Casi todas las herramientas de IA ya vienen con un **Plan Mode** que puedes activar para esto.

---

Hoy en día, este tipo de prácticas aplican a herramientas avanzadas como **Cursor**, **Codex** o **Claude Code**. 

Todas estas soluciones comparten una misma base: su rendimiento depende directamente del contexto que reciben. Entender cómo alimentar correctamente ese contexto es lo que marca la diferencia entre obtener resultados mediocres o soluciones realmente útiles desde el primer intento.

En otras palabras: no estás "hablando con una IA", estás **definiendo el entorno en el que piensa**.

Si mejoras esto, no necesitas mejores prompts. Necesitas menos intentos.