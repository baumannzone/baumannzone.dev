---
title: "El arte del testing: una oda a las pruebas automáticas"
description: "Quieres saber qué es el testing y qué tipos de pruebas existen? En este artículo te lo explicamos."
pubDate: 2023-05-23
updatedDate: 2024-06-06
type: blog
author: Jorge Baumann
tags:
  - JavaScript
  - Testing
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=El%20arte%20del%20testing%3A%20una%20oda%20a%20las%20pruebas%20autom%C3%A1ticas&tags=JavaScript,Testing"
---

¿Quieres escuchar un secreto? **La mayoría de los desarrolladores no tienen tests en sus aplicaciones**. ¡Sí, has oído bien! Parece que prefieren vivir peligrosamente, como si programar sin una buena cobertura de tests fuera la norma.

¿Sabes qué es peor que eso? Descubrir que acabas de romper la aplicación justo después de hacer push al servidor de producción. ¡Qué horror!

Hay una solución para evitar ese desastre: tener pruebas (test) automáticas.

Sí, lo sé, parece una locura. Pero tener tests en tu aplicación, además de evitar errores puede acelerar el desarrollo y mejorar la calidad del código.

## Definición de testing

Como sabemos que a algunos de nuestros queridos lectores no les interesa mucho el testing, o si les interesa, nunca tienen tiempo para hacerlo, vamos a hacerles un favor. Vamos a definir qué quiere decir testear una aplicación.

Desde mi punto de vista, testear es **"el proceso de comprobar que tu aplicación funciona correctamente"**. Vamos, ¡lo que cualquier persona sensata haría antes de lanzar una aplicación al público!

Las pruebas (o tests) se pueden dividir en dos grandes grupos: **pruebas manuales** y **pruebas automáticas**.

- Las pruebas manuales consisten en comprobar que una aplicación funciona correctamente interactuando con ella manualmente.
- Las pruebas automáticas, por otro lado, son cuando escribes programas para que realicen las comprobaciones por ti.

La mayor parte de este artículo trata sobre las pruebas automáticas. Pero para entender los beneficios de las pruebas automáticas, necesitas primero entender las pruebas manuales.

## Pruebas manuales

Todos los developers que se toman en serio su trabajo prueban su código manualmente. Es el siguiente paso lógico después de escribir el código, al igual que el siguiente paso después de masticar la comida es tragarla.

Imagina que estás programando un formulario de registro de usuarios. Cuando terminas de escribir el código, no cierras tu editor de texto y le dices a tu equipo que ya has terminado el formulario.

No. Abres el formulario, lo rellenas y te aseguras de que el proceso de registro se completa correctamente. Es decir, pruebas el código manualmente.

**Las pruebas manuales funcionan bien para proyectos pequeños**. Si tienes una aplicación que puedes probar manualmente en menos de dos minutos, tal vez no necesites pruebas automáticas (por ejemplo, una app de conversión metros a centímetros).

Pero, si tu aplicación crece, depender solo de pruebas manuales puede convertirse en un dolor de cabeza.

Déjame que te cuente una historia sobre el desarrollo de una API de una gran empresa de software nacional que no tenía tests automáticos en el momento en el yo entré en el proyecto. Cada vez que se hacía un cambio en la API, **el equipo de desarrollo tenía que probar manualmente la aplicación**. Más de 100 endpoints. Manualmente. Cada vez. Cada cambio. Fue un proceso muy doloroso.

Aunque una parte del tiempo se invertía en probar las nuevas funcionalidades desarrolladas, la mayor parte del mismo se dedicaba a probar las features antiguas para asegurarnos de que aún funcionaban. Este tipo de pruebas se conocen como **pruebas de regresión**.

Como humanos, las pruebas de regresión son tareas difíciles, pues requieren mucha atención y son aburridas. ¡Suerte que existen los tests automáticos!

Si todavía crees que los tests manuales son una buena elección, te invito a que lo pienses de nuevo.

## Pruebas automáticas

¿Pruebas automáticas? ¿Para qué molestarse si podemos pasar horas haciendo pruebas manuales? ¡Es mucho más emocionante!

**Las pruebas automáticas son el proceso de utilizar programas para comprobar que tu aplicación funciona correctamente**. En otras palabras, escribes código adicional para probar el código de tu aplicación. Una vez que se ha escrito el test, podrás probar tu aplicación tantas veces como quieras con un esfuerzo mínimo.

> De ahora en adelante, cuando hablemos de pruebas (o tests), nos estaremos refiriendo a pruebas automáticas.

Existen muchas técnicas diferentes para escribir tests. Puedes escribir código para automatizar el flujo por tu app, puedes testear cada función de manera aislada o puedes comparar los snapshots. Cada una de estas técnicas tiene sus pros y sus contras, pero todas tienen algo en común: **ahorran tiempo** en comparación con las pruebas manuales.

Hace un momento te hablé acerca del desarrollo de una API en la que trabajé que no tenía ni un solo test. El mayor problema era que invertíamos mucho tiempo en probar la aplicación manualmente.

Poco después de unirme al equipo, estuve más de dos meses escribiendo tests para la aplicación. Al final, conseguimos una suite de tests que cubría el 100% de la aplicación. **Podías probar la aplicación con un solo comando y el tiempo de ejecución de los tests era de menos de 5 minutos**. Además, el equipo había ganado **confianza** en la aplicación y se encontraba más motivado pues sabía que, si algo fallaba, los tests lo detectarían.

Por si fuera poco, **ahora la aplicación estaba autodocumentada**, pues los tests servían como documentación de la API.

Fue ahí cuando me di cuenta de la verdadera **importancia que tienen los tests en el desarrollo de software** profesional. Desde entonces, siempre he intentado tener tests desde el principio. Es más fácil enseñar trucos nuevos a un cachorro que intentar enseñarle a un perro adulto.

## Tipos de tests

Ha llegado el momento de hablar sobre los tests concretos que puedes escribir en tus aplicaciones. Como frontend engineer, te mostraré tres tipos de pruebas que pueden ayudarte a testear tus aplicaciones: pruebas unitarias, pruebas de instantáneas (snapshot) y pruebas end-to-end.

Bueno, no sé yo si va a ser necesario explicarlo, porque los lectores de este post ya están haciendo tests de todo tipo en sus aplicaciones... ¿verdad?

### Tests End to End

Imagínate que estás programando una calculadora y quieres comprobar que el resultado de la suma de dos números es correcto. En lugar de hacer como un simple humano, que comprobaría el resultado con sus propias manos, podrías escribir un test **end-to-end** (e2e) que automatice el proceso.

Si se trata de una web, el test abriría un navegador, cargaría la aplicación de la calculadora, pulsaría el botón con el número `1`, después el botón de suma (`+`), después el botón `1` de nuevo, pulsaría el botón de igual (`=`) y comprobaría que la pantalla muestra el resultado correcto, es decir, un `2`.

**Los test end-to-end son los más intuitivos y fáciles de entender**. En el caso del desarrollo web y las aplicaciones frontend es común automatizar el navegador para simular la interacción del usuario y verificar que la aplicación funciona correctamente desde la perspectiva del usuario.

Un ejemplo de un test e2e podría ser algo parecido a esto:

![Test end to end](../../assets/blog/el-arte-del-testing-una-oda-a-las-pruebas-automaticas/e2e-test.avif)

Aunque **los tests end-to-end son una herramienta poderosa** que funciona independientemente del framework que uses, como React.js o jQuery, es importante tener en cuenta que también presentan algunas desventajas.

En primer lugar, son lentos, muy lentos, ya que ejecutar un navegador puede tardar varios segundos y los sitios web pueden ser lentos en responder. Si dependes exclusivamente de los tests end-to-end es posible que tu suite de pruebas tarde horas en ejecutarse.

Además, debuggear estos tests puede ser complicado, ya que para reproducir un error debes abrir el navegador y seguir el mismo flujo que el usuario.

Otro problema es que pueden ser flaky (inestables). Los **flaky tests** son aquellos que fallan con frecuencia, aunque la aplicación esté funcionando correctamente. Tal vez una API estaba temporalmente caída. Pronto dejarás de tomar en serio un flaky test.

> "¡Opss, los tests fallaron! Déjame ver... Ah, es ese, el que falla siempre".

Los tests inestables hacen que tu batería de tests sea menos útil, pero son difíciles de evitar cuando escribes pruebas end-to-end como desarrollador web. Aunque son muy útiles, no deberían ser tu único tipo de tests.

Las pruebas e2e no te dan un nuevo enfoque para testear, son simplemente pruebas manuales más rápidas. Las pruebas unitarias, por otro lado, te dan una nueva perspectiva que no obtendrías al probar el código a mano.

### Tests Unitarios

Las pruebas unitarias son una forma de **probar el código de tu aplicación a nivel de función**, asegurándose de que cada unidad (_funciones_, _clases_, _componentes_, etc.) de la aplicación funcione correctamente.

¿La ventaja? si surge algún problema en el código, los tests unitarios te ayudarán a identificar rápidamente qué unidad está causando el problema.

Los tests unitarios son funciones que llaman a otras funciones del código fuente y comprueban que se comporta correctamente. En lugar de probar todo el código de una aplicación con pruebas de extremo a extremo, **los tests unitarios prueban una sola unidad a la vez**.

Mira el siguiente ejemplo de un test unitario en JavaScript.

![Test unitario](../../assets/blog/el-arte-del-testing-una-oda-a-las-pruebas-automaticas/unit-test.avif)

Misteriosamente, los tests unitarios son capaces de señalar exactamente dónde está el problema en el código. Es como si fueran una señal de neón brillante que apunta directamente al error.

Al contrario que los test e2e, **los tests unitarios son rápidos y eficientes**. Corren en cuestión de segundos, lo que te permite verificar si los cambios que has realizado en el código han afectado la funcionalidad existente.

Pero espera, ¡hay más! **Los tests unitarios también funcionan como documentación**. Si necesitas saber cómo funciona una unidad de código, solo tienes que revisar los tests para sacar la información que buscas. Maravilloso, ¿no?

Sin embargo, las pruebas unitarias también tienen sus problemas.

Entre los problemas se encuentra que solo testean partes individuales de una aplicación. Puedes probar que las partes individuales de un coche funcionen correctamente, pero si no verificas que funcionen cuando se ensamblan y luego el motor no se enciende, tus pruebas fueron inútiles.

Las pruebas unitarias tienen este problema. Comprueban las unidades de código, pero no prueban que las unidades interactúen entre sí correctamente. Por eso, es necesario **complementar las pruebas unitarias con pruebas end-to-end**.

### Tests de Snapshot

¿Alguna vez has jugado a ‘Encuentra las diferencias’? Es un juego en el que se presentan dos imágenes iguales con pequeñas diferencias entre ellas. El objetivo del juego es identificar las diferencias.

Las pruebas de snapshot son similares a eso. **Una prueba de snapshot toma una imagen de tu aplicación en ejecución y la compara con imágenes previamente guardadas**.

Si las imágenes son diferentes, la prueba falla. Este método de prueba es una forma útil de asegurarse de que una aplicación siga mostrándose correctamente después de cambios en el código.

Los tests de snapshot lanzan una aplicación en un navegador y toman una captura de pantalla de la página renderizada. Comparan la nueva captura de pantalla con una captura de pantalla anterior y muestran un error si existen diferencias.

## La alquimia del testing

Si mezclas pimienta, sal y ajo en las proporciones adecuadas, obtendrás un condimento delicioso para tus comidas. Pero si usas las proporciones incorrectas, podrías terminar con una mezcla demasiado salada o picante.

De la misma manera, **necesitas combinar diferentes tipos de pruebas en las proporciones correctas para obtener una batería de pruebas efectiva**.

A continuación, puedes ver la _testing pyramid_, en este caso, del frontend. Esta representa la proporción de los diferentes tipos de tests que deberían componer tu suite de pruebas. Desde mi experiencia, esta es la mejor manera de estructurar los tests de una aplicación frontend.

![Testing Pyramid Frontend](../../assets/blog/el-arte-del-testing-una-oda-a-las-pruebas-automaticas/testing-pyramid.avif)

La mayoría de la pirámide consiste en tests unitarios, ya que te dan feedback casi instantáneo al desarrollar la aplicación.

Las pruebas de snapshot también se ejecutan rápidamente, y cubren más terreno que las unitarias, por lo que no se necesitan tantas pruebas de instantánea como pruebas unitarias.

Como mencioné antes, las pruebas end-to-end son geniales para probar una aplicación, pero son lentas y, a veces, inestables. Por eso dicha pirámide de pruebas frontend solo tiene unas pocas pruebas end-to-end.

No te preocupes si no puedes invertir un poco de tiempo en escribir los tests de tu app, tus usuarios se encargarán de avisarte si tienen algún problema. Después de todo, ¿a quién le importa la calidad del software?

## ¿Ahora qué?

Este artículo ha cubierto la importancia del testing en el desarrollo de software. Se han explicado los diferentes tipos de tests, incluyendo tests unitarios, tests end-to-end y tests de snapshot.

Hemos visto una sugerencia de cual podría ser la proporción adecuada de cada tipo de test para una suite de pruebas efectiva en un proyecto frontend. Además, hemos abordado los pros y contras de cada tipo de test.

Antes de terminar, no puedo dejar de mencionar la sensación de satisfacción que se siente cuando se ven todos los tests en verde.

[![The feeling](../../assets/blog/el-arte-del-testing-una-oda-a-las-pruebas-automaticas/feeling.avif)](https://x.com/baumannzone/status/648826797770043392)

¡Ah, por último! Si has llegado hasta aquí, esto te interesa.

**Samsung Dev Spain** ha abierto la convocatoria para los **Top Developer Awards 2023**. ¿Estás preparado para demostrar tus habilidades y hacer temblar al mundo de las aplicaciones? ¡Inscríbete ahora y demuestra de lo que eres capaz! Puedes encontrar toda la información haciendo click en [este enlace](https://www.europe-samsung.com/smsdev/Noticias/Detalle/preparado_para_hacer_temblar_al_mundo_de_las_apps_abrimos_convocatoria_de_los_top_developer_awards_2023_/acfc405c-8fc9-4214-affb-a34ff45a4d5b). ¡Buena suerte si decides presentarte!

Espero que ahora estés convencido de que los tests son casi obligatorios y que tras leer esto, te hayan entrado más ganas de testear tus apps. ¡No subestimes el poder de los tests! Con ellos, puedes asegurarte de que tu aplicación se comporta como se espera y evitar sorpresas desagradables para tus usuarios.

Además, escribir tests puede mejorar la calidad de tu código y hacer que sea más fácil de mantener. ¡Así que adelante, intégralos en tu flujo de trabajo y haz que tus aplicaciones sean aún mejores!

La próxima vez que nos leamos espero que mi comentario sea algo parecido a esto:
_¡Vaya, vaya, vaya! Parece que hemos encontrado un developer que decidió hacer algo tan inaudito como... ¡escribir tests!_

¡Happy testing 🧪!
