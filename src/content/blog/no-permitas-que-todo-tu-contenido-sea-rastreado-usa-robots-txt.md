---
title: "No permitas que todo tu contenido sea rastreado: usa robots.txt"
description: "Aprende qué es el archivo robots.txt y cómo crearlo para tu sitio web para mejorar su indexación en los motores de búsqueda o evitar que ciertas páginas sean indexadas."
pubDate: 2024-10-21
type: blog
author: Jorge Baumann
tags:
  - SEO
  - Web
---

Vamos al grano: si tienes un sitio web, seguro que te interesa aparecer en Google. Pero, ¿y si te digo que puedes decidir qué páginas pueden ver los motores de búsqueda y cuáles no? Sí, estoy hablando del `robots.txt`, ese archivo que quizá no terminas de entender pero que puede hacer tu sitio más visible (o completamente invisible) y te ayuda a controlar qué contenido se indexa. Hoy te voy a enseñar cómo usarlo _like a boss_ y con estilo.

## ¿Qué es el archivo robots.txt?

El archivo `robots.txt` es un archivo de texto que se encuentra en la raíz de tu sitio web y que le dice a los motores de búsqueda qué páginas pueden rastrear y cuáles no. Es una forma de controlar qué contenido se indexa y qué contenido no. 

Por ejemplo, si tienes una página privada o interna en tu sitio web que no quieres que aparezca en los resultados de búsqueda, puedes bloquearla con el `robots.txt`.

Así es como se ve un archivo `robots.txt` básico:

```plaintext
User-agent: *
Disallow: /private/
```

## ¿Por qué es importante el archivo robots.txt?

Aunque el fichero `robots.txt` no es obligatorio, es una buena práctica tenerlo para gestionar la visibilidad de tu sitio web en los motores de búsqueda. Un archivo mal configurado puede hacer que los motores de búsqueda dejen de indexar páginas importantes o, peor aún, que rastreen páginas que preferirías mantener ocultas, como secciones de administración o contenido duplicado.

Pero no te equivoques: el archivo **robots.txt no es una medida de seguridad**. No bloquea el acceso de los usuarios a tus páginas, simplemente les indica a los motores de búsqueda qué contenido pueden rastrear. Si realmente quieres proteger contenido privado o sensible, deberías implementar otras medidas de seguridad, como la autenticación o configuraciones de permisos.

## ¿Cómo funciona el archivo robots.txt?

El archivo `robots.txt` es un simple archivo de texto que se ubica en la raíz de tu sitio web. A través de directivas específicas, les da instrucciones a los bots de los motores de búsqueda sobre qué hacer en tu sitio.

Cuando un motor de búsqueda llega a tu sitio, busca este archivo en la raíz y lo lee para saber qué páginas puede rastrear y cuáles debe evitar.

## Hacks picantes con robots.txt

Aquí te dejo algunos hacks que puedes hacer con el `robots.txt`:

### Dejar tu web abierta al 100% (porque estás orgulloso de todo tu contenido)

```plaintext
User-agent: *
Disallow:
```

### Bloquear una carpeta entera (porque ahí guardas tus secretos)

```plaintext
User-agent: *
Disallow: /secreto/
```

### Bloquear un archivo específico (porque mejor que eso no lo vea nadie)

```plaintext
User-agent: *
Disallow: /contratos.pdf
```

## ¿Cómo crear un archivo robots.txt?

Crear un archivo `robots.txt` es muy sencillo. Solo necesitas cumplir con las siguientes reglas:

- **Texto plano**: el archivo debe ser un archivo de texto plano sin formato especial.
- **Codificación**: debe estar codificado en UTF-8.
- **Ubicación**: debe estar en la raíz de tu sitio web (por ejemplo, `https://tusitio.com/robots.txt`).
- **Nombre**: el nombre del archivo debe ser exactamente `robots.txt`, todo en minúsculas.

## Ejemplos prácticos del archivo robots.txt

Ahora que ya te has reído, vamos a ver algunos ejemplos prácticos de cómo usar el `robots.txt` en tu sitio web:

### Permitir a todos los robots acceder a todo el sitio

Esto ya lo hemos visto antes. Cualquier robot (el asterisco `*` significa "todos") puede acceder a todas las páginas de tu sitio.

```plaintext
User-agent: *
Disallow:
```

### Bloquear a todos los robots de acceder a todo el sitio

Este es el caso contrario. A todos los robots se les prohíbe acceder a cualquier página de tu sitio.

```plaintext
User-agent: *
Disallow: /
```

### Bloquear un directorio específico

En este caso, bloqueamos el acceso a un directorio llamado `salaries-2024` para todos los robots.

```plaintext
User-agent: *
Disallow: /salaries-2024/
```

### Bloquear un archivo específico

Aquí bloqueamos el acceso a un archivo llamado `secret.pdf` para todos los robots.

```plaintext
User-agent: *
Disallow: /secret.php
```

### Permitir solo a un robot específico y bloquear a los demás

Bloqueamos el acceso a todos los robots y permitimos solo a un robot llamado `Googlebot` acceder a todas las páginas.

```plaintext
User-agent: *
Disallow: /

User-agent: Googlebot
Disallow:
```

### Bloquear parámetros específicos de URL

En este caso, bloqueamos el acceso a todas las páginas que contengan el parámetro `?sort=desc`.

```plaintext
User-agent: *
Disallow: /*?sort=desc
```

### Permitir rastrear un directorio específico y bloquear todo lo demás

Aquí permitimos a todos los robots acceder a un directorio llamado `public` y bloqueamos el acceso a cualquier otra página.

```plaintext
User-agent: *
Disallow: /

User-agent: *
Allow: /public/
```

### Bloquear imágenes de un directorio específico

En este caso, bloqueamos el acceso a todas las imágenes de un directorio llamado `employees`.

```plaintext
User-agent: *
Disallow: /employees/*.jpg
```

### Bloquear el acceso a archivos CSS y JS

Bloquea el acceso a todos los archivos CSS y JS de tu sitio (fíjate en el uso de `$` para indicar el final de la URL).

```plaintext
User-agent: *
Disallow: /*.js$
Disallow: /*.css$
```

### Bloquear el acceso a todos los archivos excepto a los PDF

Bloquea el acceso a todos los archivos de tu sitio, excepto a los archivos PDF.

```plaintext
User-agent: *
Disallow: /*
Allow: /*.pdf$
```

## Configuración de robots.txt según el proyecto

Esta es la configuración de `robots.txt` que tienen por defecto algunos de los CMS más populares:

### WordPress

```plaintext
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Allow: /wp-admin/admin-ajax.php
```

### Magento
  
```plaintext
User-agent: *
Disallow: /admin/
Disallow: /downloader/
Disallow: /includes/
Disallow: /pkginfo/
Disallow: /var/
```

### Wix

```plaintext
User-agent: *
Disallow: /_api/
Disallow: /files/
Disallow: /site-assets/
Disallow: /_partials/
```

¿Conoces algún otro CMS? ¡Déjame un comentario y lo añadiré a la lista!


## Bloquear bots específicos

Si te interesa bloquear el acceso a ciertos bots específicos, puedes hacerlo utilizando directivas `Disallow` para cada uno de ellos. 

Existen muchos bots que pueden rastrear tu sitio web, algunos de los cuales son muy conocidos. Si no quieres que **ChatGPT** o similares rastreen tu sitio, te muestro cómo bloquear algunos de los bots de **inteligencia artificial** más comunes, como `GPTBot`, `ChatGPT-User`, `Google-Extended` y otros:

```plaintext
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Omgilibot
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: Applebot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: ImagesiftBot
Disallow: /

User-agent: Omgilibot
Disallow: /

User-agent: Omgili
Disallow: /

User-agent: YouBot
Disallow: /
```

Estos son solo algunos de los bots más conocidos de IA que puedes bloquear si no quieres que rastreen tu sitio. Si tienes identificados otros bots que prefieras bloquear, simplemente añade una directiva similar en tu archivo.

## Limitaciones y recomendaciones

El archivo **robots.txt** te ayuda a controlar qué se rastrea en tu sitio web, pero **no es una barrera de seguridad**. Es fundamental entender bien sus limitaciones para evitar errores graves. A continuación, te dejo algunas consideraciones importantes:

- **Visibilidad pública:** El archivo **robots.txt** está disponible para cualquiera que acceda a él, por lo que todo lo que intentes ocultar puede ser descubierto con facilidad.
- **No bloquea el acceso humano:** Cualquier persona que tenga el enlace directo a una página o recurso puede accederlo, incluso si está bloqueado para los bots.
- **Bots maliciosos:** Existen bots con intenciones dudosas, como los spambots o scrapers, que generalmente no respetan las reglas de **robots.txt**.
- **Implementaciones incorrectas:** Incluso los bots bien intencionados podrían tener errores que les hagan pasar por alto tus reglas.
- **Enlaces desde otros sitios:** Si otras webs enlazan a tus páginas "ocultas", los motores de búsqueda pueden indexarlas aunque estén bloqueadas en **robots.txt**.
- **Cachés y versiones anteriores:** El contenido previamente indexado puede seguir apareciendo en cachés de los motores de búsqueda aunque lo hayas bloqueado más tarde.

## Conclusión

El archivo **robots.txt** es una herramienta poderosa para controlar qué contenido se rastrea en tu sitio web. Aunque no es una medida de seguridad, es fundamental para mejorar la indexación de tu sitio y evitar que páginas no deseadas aparezcan en los resultados de búsqueda.

Espero que este artículo te haya ayudado a entender mejor cómo funciona el **robots.txt** y cómo puedes sacarle el máximo provecho.