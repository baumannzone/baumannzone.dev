export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Baumannzone.dev - Desarrollo Web JavaScript',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Artículos, guías y vídeos sobre Desarrollo Web y contenido FullStack con JavaScript',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://baumannzone.dev',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.baumannzone.dev/opengraph.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@baumannzone',
      },
      {
        name: 'twitter:creator',
        content: '@baumannzone',
      },
      {
        name: 'twitter:title',
        content: 'Baumannzone.dev - Desarrollo Web JavaScript',
      },
      {
        name: 'twitter:description',
        content:
          'Artículos, guías y vídeos sobre Desarrollo Web y contenido FullStack con JavaScript',
      },
      {
        name: 'twitter:image',
        content: 'https://www.baumannzone.dev/opengraph.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // Script tags
    script: [
      // Fathom Analytics
      {
        src: 'https://planet-honey.baumannzone.dev/script.js',
        'data-site': process.env.FATHOM_SITE_ID,
        defer: true,
        'data-included-domains': 'www.baumannzone.dev,baumannzone.dev',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org/getting-started/
    '@nuxt/image',
    '@nuxtjs/robots',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: true,
    fullTextSearchFields: ['title', 'description', 'slug'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router config
  router: {
    middleware: ['fathom'],
  },
}
