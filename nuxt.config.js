export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Front Lines',
    title: 'Front page',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/overrides.sass'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-leaflet',
    '@nuxtjs/dayjs',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // nuxt-optimized-images config: https://marquez.co/docs/nuxt-optimized-images/?utm_source=npm&utm_medium=readme&utm_campaign=nuxt-optimized-images
  optimizedImages: {
    optimizeImages: true,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: {
      font: {
        family: 'Cousine',
      },
      icons: 'mdi',
    },
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    /* module options */

    theme: {
      themes: {
        light: {
          primary: '#000000',
          secondary: '#ffba74',
          accent: '#8bc34a',
          error: '#ffc107',
          warning: '#fec248',
          info: '#ff5722',
          success: '#add5b0',
          anchor: '#8c9eff',
        },
      },
    },
  },

  dayjs: {
    plugins: [
      'relativeTime', // import 'dayjs/plugin/timezone'
    ], // Your Day.js plugin
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
