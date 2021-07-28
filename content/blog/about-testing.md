---
title: About Testing
description: ¿Haces pruebas en tus aplicaciones web? ¿Deberías probar tu código de manera automática? En este artículo trataremos este tema a fondo. 
created: 2019-07-13
type: blog
author: Jorge Baumann
tags:
  - nodejs
  - testing
  - javascript
---

¿Haces pruebas en tus aplicaciones?  
Hola querido/a dev. En este escrito vamos a intentar redactar de manera amigable algunos aspectos del **testing** de aplicaciones.

Tú, como developer, cuando haces una entrega, quieres que el código entregado sea lo más robusto posible y sin errores.

¿Qué pasa si haces una subida a producción el viernes a última hora? Llega el lunes y te das cuenta de que los cambios que hiciste el viernes provocaron que la aplicación se rompiera.  
Has estado 3 días con tu aplicación rota ☠️..

![Friday push to production](/blog/about-testing/friday-push.jpg)


Entonces, developer, ¿cómo puedes ayudar a evitar este tipo de situaciones? Exacto, probando (_testeando_) tu código.

Sin embargo, no es oro todo lo que reluce:

- Un buen sistema de pruebas puede acelerar el desarrollo, mejorar la calidad del código y reducir los errores de tu aplicación.
- Un mal enfoque de pruebas puede ser perjudicial para tu aplicación.

## ¿Qué es probar (testear) una aplicación?

Desde mi punto de vista, se podría decir que testear es “el proceso de comprobar que tu aplicación funciona correctamente”.

Podemos decir que nuestras aplicaciones se pueden probar de 2 formas: de forma **manual** o de forma **automática**.

## Pruebas Manuales

Como su propio nombre indica, consiste en hacer las comprobaciones a mano. Es lo que haces siempre cada vez que terminas una tarea.

Esto te lleva un par de segundos o minutos, dependiendo de lo que tengas que probar: levantar servidores, servicios, introducir datos, etc.  
Y si al hacer las pruebas estuviéramos hablando de minutos en vez de segundos, estaríamos ante un proceso costoso, ¡y no solo en tiempo!

Hacer las pruebas a mano puede ser una opción válida en aplicaciones pequeñas. Puede ser que, para ese proyecto pequeño, no necesites un conjunto de pruebas automáticas.

> Aquí es cuando tienes que definir qué es o qué se considera un proyecto pequeño o grande.

Estimado lector, este ejercicio te lo dejo a ti.

---

Pero… ¿qué pasa cuando estás en un **proyecto grande**?  
Un proyecto donde sea complicado seguir el flujo de la lógica de la aplicación. Con mucha funcionalidad. Un proyecto pequeño que se ha convertido, progresivamente, en uno grande.

🐛 Ahora resulta que tu proyecto ha crecido tanto que necesitas un equipo que se dedique exclusivamente a probar que todo funciona como es debido cada vez que se añade una nueva funcionalidad.  
Porque, como todo software, tiene bugs. Bugs que no quieres que lleguen al usuario o cliente final, bugs que quieres detectar antes de que se desplieguen en pro con la nueva funcionalidad.

![Testing Meme](/blog/about-testing/testing-meme.jpg)

Y aun así, con un equipo que se dedique exclusivamente a testear, no tienes la garantía de que se vayan a detectar todos los posibles errores que pueda tener tu aplicación.  
Sobre todo porque las pruebas manuales requieren mucha concentración y es fácil despistarse, por lo que es probable que tu código no esté funcionando como es debido.

Llegados a este momento, seguramente pases más tiempo probando las funcionalidades antiguas que probando las nuevas. Y todo porque no tienes un mecanismo que te garantice que la aplicación funciona como es debido con las nuevas _features_.

Ahora es cuando entiendes la **necesidad** de tener pruebas automáticas. 🙌

## Pruebas Automáticas

Entendamos por pruebas automáticas el proceso de escribir código que realice dichas comprobaciones por ti.

> Desde ahora en adelante, cuando hablemos de pruebas, nos estaremos refiriendo a pruebas automáticas.

😱 ¡Sí!, vas a escribir código extra que compruebe el código de tu aplicación.  
A cambio, ganas que cuando dicho programa esté listo, puedas probar tu aplicación las veces que quieras sin apenas esfuerzo y en cuestión de segundos.

Aunque hay varias técnicas para automatizar las pruebas, cada una con sus pros y sus contras, todas tienen algo en común: _te van a ahorrar tiempo a la hora de probar tu aplicación_.

> Los tests, independientemente del tipo que sean, te van a ahorrar tiempo a la hora de probar tu aplicación.

Por lo tanto, todo el tiempo que se invertía en probar la aplicación del ejemplo anterior, se podría reducir considerablemente con esta práctica.

Hace unos años compartía en twitter [este meme](https://twitter.com/baumannzone/status/648826797770043392). Describe a la perfección esa sensación que te da cuando todos los tests de tu aplicación están en verde.

## Happy developers!

A todo esto le podemos añadir que tener pruebas en nuestra aplicación es sinónimo de tener un **equipo de desarrollo** feliz y motivado, que trabaja con seguridad y confianza en el proyecto.   
Que está convencido de que puede desarrollar funcionalidades nuevas sin miedo a romper otras partes de la aplicación.   
Y que, en el supuesto y (muy) probable caso de que eso ocurra, dicho fallo se va a detectar a tiempo y se va a poder resolver de manera sencilla.

## TDD

Antes de seguir, me gustaría hacer un pequeño break para revisar este concepto.  
**Test-Driven Development**, TDD para los amigos, es una práctica (o flujo de trabajo) en la cual tú escribes tus pruebas (suelen ser pruebas unitarias) antes de escribir el código de la aplicación.

![TDD flow](/blog/about-testing/tdd-flow.jpg)

En primer lugar, se escriben las pruebas y se verifica que las pruebas fallan. A continuación, se implementa el código que hace que la prueba pase satisfactoriamente y seguidamente, si es posible, se refactoriza el código escrito. Y así con cada nueva funcionalidad.

## Cuando no testear

Existe la posibilidad de que desarrollar pruebas automáticas haga más lenta tu experiencia de desarrollo. Es decir, los tests te pueden _perjudicar_.   
Recordemos que el propósito de las pruebas automáticas es **ahorrar tiempo**.

A modo resumen, quédate con esto:

- No siempre hace falta tener pruebas automáticas (_Madre mía... ¿en qué quedamos?_)
- No necesitas tests si pasas más tiempo re-escribiendo tests que desarrollando funcionalidades (Ej: prototipos, proyectos cortos e inestables)
- Tu objetivo no es obtener el 100% de cobertura en tus tests. En serio, no eres mejor tester por tener todo al 100%.
- TDD es bien. Sin embargo, cualquier metodología a rajatabla puede ser un dolor de cabeza.

Si el testing te da muchos problemas, siempre puedes poner en práctica [esto](https://twitter.com/baumannzone/status/1093427647336640512).

![No test, no fail](/blog/about-testing/no-test-no-fail.jpg)

Existe un gigantesco mundo alrededor del testing: _librerías, frameworks, test runners, herramientas, plugins, etc_... En futuros seguiremos hablando de testing.

Ahora solo espero que, después de leer esto, estés motivado y que tengas el convencimiento de que los tests son siempre bien y que el testing es un mundo fantástico.

Hasta aquí llega esta lectura, apreciado developer. Si te gustó, déjame tus impresiones por [instagram](https://instagram.com/baumannzone) compártelo si te ha sido útil. Recuerda, _sharing is caring_.

¡Hasta la próxima! 👋 👋
