const myUses = [
  {
    type: "h2",
    title: "Portátil",
    children: [
      {
        title: "MacBook Pro (13-inch, M1, 2020)",
        description: "El portátil que uso diariamente para trabajar.",
        link: "https://www.apple.com/macbook-pro-13/",
        specs: [
          "Procesador: Apple M1 chip",
          "Memoria: 16 GB",
          "Almacenamiento: 512 GB SSD",
        ],
      },
      {
        title: "MacBook Pro (13-inch, i5, 2015)",
        description: "Mi portátil personal.",
        link: "https://www.apple.com/macbook-pro-13/",
        specs: [
          "Procesador: Intel i5 2,7 GHz",
          "Memoria: 8 GB",
          "Almacenamiento: 256 GB SSD",
        ],
      },
    ],
  },
  {
    type: "h2",
    title: "Pantallas",
    children: [
      {
        title: 'Samsung C34H890 34" Ultra Wide curvo',
        description:
          "Mi monitor principal. Conecto la pantalla al MacBook con un cable USB-C, que me vale para transmitir señal de video y corriente a la vez. Es decir, un solo cable para las dos cosas.",
        link: "https://www.samsung.com/es/monitors/business/ch89-34-inch-ultra-wqhd-curved-usb-c-lc34h890wgrxen/",
      },
      {
        title: "Brazo para monitor",
        description:
          '¿Todavía tienes el monitor apoyado sobre una pila de libros? Qué vintage. Este brazo para monitores de hasta 34" (aguanta 10kg sin sudar) convierte cualquier setup en un escritorio digno.',
        link: "https://amzn.to/3Vl9NDF",
      },
      {
        title: 'BenQ Gaming 24" RL2460HT',
        description:
          "La compré en 2011 pero ya está descatalogada. Sin embargo, +10 años después, funciona como el primer día. Es la que uso con el PC de sobremesa.",
      },
    ],
  },
  {
    type: "h2",
    title: "Ratón",
    children: [
      {
        title: "Logitech MX Master 3",
        description:
          "No es un simple ratón. Es el ratón. El alfa del escritorio. Inalámbrico, elegante, con curvas que se adaptan a tu mano. Es tan cómodo que tu mano no va a querer tocar otro periférico jamás. Puedes personalizar los botones.",
        link: "https://amzn.to/4bVhmXc",
      },
    ],
  },
  {
    type: "h2",
    title: "Alfombrilla",
    children: [
      {
        title: "Alfombrilla de neopreno para el escritorio",
        description:
          "Alfombrilla de neopreno de 80cm x 40cm con el meme de This is fine 🔥. Bastante sorprendido con la calidad. Es suave y agradable al tacto. La uso para apoyar el teclado, el ratón y el portátil sin que no se raye la mesa.",
        link: "https://share.temu.com/r4qknnc2DQA",
      },
    ],
  },
  {
    type: "h2",
    title: "Teclado",
    children: [
      {
        title: "Keychron K14 inalámbrico",
        description:
          "Keychron K14 Wireless Mechanical Keyboard. Teclado mecánico inal RGB, 70%, Hot Swappable, Brown. Funciona con cable USB o con Bluetooth, con layout en inglés.",
        link: "https://www.keychron.com/products/keychron-k14-wireless-mechanical-keyboard?variant=39553083146329",
      },
      {
        title: "Teclado USB Apple con teclado numérico",
        description:
          "El teclado oficial de Apple con cable USB, de color blanco. En aluminio.",
      },
    ],
  },
  {
    type: "h2",
    title: "Micrófono",
    children: [
      {
        title: "Blue Snowball Ice",
        description:
          "Micrófono de condensador USB para cuando decides que tu voz merece ser escuchada… con dignidad. Lo enchufas y listo.",
        link: "https://amzn.to/4edF2aq",
      },
    ],
  },
  {
    type: "h2",
    title: "Auriculares",
    children: [
      {
        title: "Beats Fit Pro",
        description:
          "Auriculares Bluetooth. Los uso para escuchar música y hacer llamadas. Son muy cómodos, se adaptan perfectamente a la oreja y tienen una buena calidad de sonido. Básicamente, si no los llevo al gimnasio, me doy la vuelta y vuelvo a casa.",
        link: "https://amzn.to/3x3nTQH",
      },
      {
        title: "Bose QuietComfort 45",
        description:
          "Auriculares inalámbricos Bluetooth de diadema con cancelación de ruido y micrófono para llamadas, de color negro. Son muy cómodos y tienen muy buena calidad de sonido.",
        link: "https://amzn.to/3VtFtXr",
      },
      {
        title: "Jabra Evolve 30 II USB",
        description:
          "Auriculares con cable USB. Los uso para gaming y streaming. Tiene botones para subir y bajar el volumen y para silenciar el micrófono.",
        link: "https://amzn.to/3evillN",
      },
    ],
  },
  {
    type: "h2",
    title: "Altavoces",
    children: [
      {
        title: "Logitech Z130",
        description:
          "Los altavoces que uso con el PC de sobremesa. Son pequeños y compactos y tienen un sonido aceptable.",
        link: "https://amzn.to/3yH17yL",
      },
    ],
  },
  {
    type: "h2",
    title: "Silla",
    children: [
      {
        title: "ErgoChair Pro",
        description:
          "La silla de trabajo que más he usado en mi vida. Me gusta que se puede regular casi todo. Es fácil de usar y tiene una buena estructura.",
        link: "https://www.autonomous.ai/en-ES/office-chairs/ergonomic-chair",
      },
      {
        title: "Ruedas de silicona para silla de oficina",
        description:
          "El mejor upgrade que le puedes meter a tu silla. Son ruedas de silicona que giran muy bien, no hacen ruido y no rayan el suelo. No como las horribles ruedas de plástico que traen las sillas de serie.",
        link: "https://amzn.to/3X2Qb8G",
      },
    ],
  },
  {
    type: "h2",
    title: "Mesa o Escritorio",
    children: [
      {
        title: "Estructura FlexiSpot E7",
        description:
          "Estructura de standing desk eléctrico de color blanco. Regula la altura con un botón y guarda hasta 4 perfiles. Es sorprendentemente estable.",
        link: "https://amzn.to/3WZp5PK",
      },
      {
        title: "Tablero de madera",
        description:
          "Tablón de madera de color blanco de 160cm x 80cm x 2cm. Es lo suficientemente grande para poder poner todo lo que necesitas. Lo uso con la estructura de FlexiSpot.",
      },
    ],
  },
  {
    type: "h2",
    title: "Luces",
    children: [
      {
        title: "Luces led con trípode",
        description:
          "Las uso para streaming o en videollamada. Las puedes regular en altura con el trípode y en intensidad con los botones. Guardadas y plegadas en la caja ocupan muy poco.",
        link: "https://amzn.to/3V5eUqa",
      },
      {
        title: "Tira de luces LED",
        description:
          "Tira LED multi color de 3m para darle glow a tu cueva. Ideal para convertir una habitación triste en un lugar estético digno de stories.",
        link: "https://amzn.to/3KiZM3I",
      },
    ],
  },
  {
    type: "h2",
    title: "Adaptadores",
    children: [
      {
        title: "Adaptador multipuerto de USB-C",
        description:
          "Sí, es el oficial de Apple. Sí, cuesta como si viniera con acciones de la empresa. Pero funciona. Es pequeño, discreto y trae lo justo para sobrevivir fuera de casa.",
        link: "https://amzn.to/3UZBOzn",
      },
      {
        title: "HUB USB C (8 en 1)",
        description:
          "Es el que uso para poder conectar varios cables USB y el cable de red ethernet. Ya no tienes que elegir entre cargar el portátil o conectar el ratón.",
        link: "https://amzn.to/3wXnXSa",
      },
    ],
  },
  {
    type: "h2",
    title: "Editor",
    children: [
      {
        title: "Cursor",
        description: "Editor de código con IA integrada.",
        link: "https://www.cursor.com/",
      },
      {
        title: "VS Code",
        description: "Editor de código de Microsoft.",
        link: "https://code.visualstudio.com/",
      },
    ],
  },
  {
    type: "h3",
    title: "Plugins Editor",
    children: [
      {
        title: "GitHub Copilot",
        description: "Ya no sé programar sin esto.",
        link: "https://copilot.github.com/",
      },
      {
        title: "Turbo Console Log",
        description: "Para hacer `console.log` como un mapache enfurecido.",
        link: "https://www.turboconsolelog.io/",
      },
      {
        title: "Prettier",
        description: "Formateador de código.",
        link: "https://prettier.io/",
      },
      {
        title: "Tailwind CSS IntelliSense",
        description: "Intellisense para Tailwind CSS.",
        link: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
      },
      {
        title: "Live Share",
        description: "Para colaborar en tiempo real con tus compis de trabajo.",
        link: "https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare",
      },
      {
        title: "Live Server",
        description: "Para ver tu código en vivo en el navegador.",
        link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server",
      },
      {
        title: "Image Preview",
        description: "Para ver las imágenes en el editor.",
        link: "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview",
      },
    ],
  },
  {
    type: "h3",
    title: "Fuentes o Tipografías para programar",
    children: [
      {
        title: "Operator Mono",
        description:
          "Es la que más me gusta para el editor. ¿Has visto qué divertida es la cursiva? Es de pago, pero a mí me merece la pena.",
        link: "https://www.typography.com/fonts/operator/overview",
      },
      {
        title: "Monaspace",
        description:
          "Una super familia con 5 fuentes monoespaciadas de GitHub. Es gratuita y open source.",
        link: "https://monaspace.githubnext.com/",
      },
      {
        title: "Geist Mono",
        description:
          "Fuente monoespaciada de Vercel. Es gratuita y open source.",
        link: "https://vercel.com/font",
      },
      {
        title: "JetBrains Mono",
        description:
          "Esta tipografía también me gusta mucho, del equipo de JetBrains. Es gratuita y open source.",
        link: "https://www.jetbrains.com/es-es/lp/mono/",
      },
    ],
  },
  {
    type: "h2",
    title: "Terminal",
    children: [
      {
        title: "Warp",
        description:
          "Warp es una terminal moderna con IA integrada que te autocompleta comandos, te explica lo que estás escribiendo y hace que parezca que dominas la línea de comandos aunque sigas copiando desde ChatGPT.",
        link: "https://app.warp.dev/referral/2EJGKR",
      },
    ],
  },
  {
    type: "h2",
    title: "Navegador",
  },
  {
    type: "h3",
    title: "Desktop",
    children: [
      {
        title: "Google Chrome",
        description: "Mi navegador principal como developer.",
        link: "https://www.google.com/chrome/",
      },
      {
        title: "Brave",
        description: "Adiós anuncios.",
        link: "https://brave.com/es/",
      },
    ],
  },
  {
    type: "h3",
    title: "Móvil",
    children: [
      {
        title: "Safari",
        description:
          "El navegador por defecto en el iPhone. No lo elegiste, pero ahora es parte de tu vida.",
        link: "https://www.apple.com/es/safari/",
      },
      {
        title: "Brave",
        description:
          "Lo uso en el móvil y mi pantalla ya no es una fiesta de pop-ups y banners enfurecidos. Adiós anuncios.",
        link: "https://brave.com/es/",
      },
    ],
  },
  {
    type: "h3",
    title: "Extensiones Navegador",
    children: [
      {
        title: "GIFs for GitHub",
        description:
          "Si solo puedes elegir una, esta es la única extensión que deberías tener instalada.",
        link: "https://chromewebstore.google.com/detail/gifs-for-github/dkgjnpbipbdaoaadbdhpiokaemhlphep",
      },
      {
        title: "Dark Reader",
        description:
          "Para poner en modo oscuro cualquier página web y no quemarte los ojos por la noche.",
        link: "https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh",
      },
      {
        title: "Color Tab",
        description: "Nueva pestaña con colorines.",
        link: "https://chrome.google.com/webstore/detail/color-tab/hchlgfaicmddilenlflajnmomalehbom?hl=es",
      },
    ],
  },
  {
    type: "h2",
    title: "Gadgets & Tools",
    children: [
      {
        title: "iPhone 12 Mini Púrpura",
        description:
          "Mi primer juguetito Apple. Tan pequeño que cabe en cualquier bolsillo, incluso en los más ajustaditos. Ligero, discreto y siempre listo.",
        link: "https://amzn.to/44lJFh7",
      },
      {
        title: "Apple Watch Series 10",
        description:
          "El reloj de Apple. Lo compré para medir mi actividad física... y ahora se cree mi entrenador personal. Me vibra si estoy quieto, me felicita si subo escaleras",
        link: "https://amzn.to/42UuEAv",
      },
      {
        title: "Mini Dron Tello",
        description:
          "Pequeño, y ligero. Este mini dron de DJI no solo vuela like a boss, también se puede programar con JavaScript. Sí, puedes hacer que vuele según tu código.",
        link: "https://amzn.to/3ldFr4l",
      },
      {
        title: "Amazon Kindle eBook",
        description:
          "Super recomendado si te gusta leer. Pesa poco y es fácil llevarlo a cualquier lado.",
        link: "https://amzn.to/3xkVSys",
      },
      {
        title: "DJI OM 5",
        description:
          "Estabilizador para móviles DJI OM 5 de 3 ejes. Plegable, ligero y gris elegante. Vídeos estables aunque corras, saltes o persigas palomas.",
        link: "https://amzn.to/2XF7UGz",
      },
      {
        title: "Fidget Cube",
        description:
          "Cubo antiestrés. Un vicio. Tiene botones, ruedas, interruptores y bolitas para jugar. No resuelve tus problemas, pero los hace más entretenidos.",
        link: "https://amzn.to/3RgkwwV",
      },
      {
        title: "Power Ball",
        description:
          "Esto no es una bola cualquiera. Es una centrífuga de muñecas. Fortalece muñecas, antebrazos.",
        link: "https://amzn.to/4bYITH4",
      },
      {
        title: "DYMO Label Maker",
        description:
          "Impresora de etiquetas con pegatina para tener todo bien organizado. Rápida y fácil de usar. Imprime etiquetas nítidas en segundos.",
        link: "https://amzn.to/4dX1OUB",
      },
      {
        title: "Raspberry Pi 3 B",
        description:
          "Es un mini ordenador. Perfecta para experimentos raros, automatizaciones caseras o jugar a ser hacker. Actualmente tiene instalado Retropie.",
        link: "https://amzn.to/3x4XkL6",
      },
      {
        title: "Mandos Super Nintendo USB",
        description:
          "Versión no original de los mandos de la Super Nintendo. Los uso con la Raspberry Pi para jugar a los juegos de mi infancia.",
        link: "https://amzn.to/3x28pg0",
      },
    ],
  },
  {
    type: "h2",
    title: "Cables y conexiones",
    children: [
      {
        title: "Cable Ethernet CAT 6 20m",
        description:
          "Cable de red de 20 metros que sale de la caja de fibra óptica y llega hasta el estudio. Necesario para trabajar, gaming y streaming.",
        link: "https://amzn.to/3yZKoqg",
      },
      {
        title: "Switch Ethernet 5 puertos",
        description:
          "Me permite sacar más conexiones de red en el estudio. Uno siempre conectado al PC de sobremesa. El portátil casi siempre está conectado por WiFi.",
        link: "https://amzn.to/3wSHL9q",
      },
      {
        title: "Repetidor WiFi TP Link",
        description:
          "Repetidor TP Link para tener conexión a internet en la otra punta de la casa.",
        link: "https://amzn.to/3MDQPmH",
      },
      {
        title: "Extensor de red eléctrica TP Link",
        description:
          "Para tener conexión a internet en la otra punta de la casa. Funciona a través de la red eléctrica.",
        link: "https://amzn.to/3ATGall",
      },
    ],
  },
  {
    type: "h2",
    title: "Eventos y miscelánea",
    children: [
      {
        title: "Traje Super Mario",
        description:
          "It's-a-me-Mario! Traje de Super Mario para ir a los eventos de la comunidad, no apto para tímidos. Todos los ojos estarán en ti. Le he cosido los bajos a mano para un ajuste perfecto.",
        link: "https://amzn.to/4iIXaLn",
      },
    ],
  },
];

export default myUses;
