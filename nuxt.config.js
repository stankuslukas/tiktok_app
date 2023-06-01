import pkg from './package'

export default {
  mode: 'universal',
  target: 'static', // default is 'server'
  server: {
    port: 3010, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false
  },
  debug: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Unlok TikTok',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    'animate.css/animate.min.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-58039701-11',
      debug: {
        enabled: false,
      },
    }]
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.URL || '',
  },

  /*
   ** Proxy CORS
   */
  proxy: {
    '/api': {
      target: 'https://unlok.me/api/tiktok.php',
      pathRewrite: {
        '^/api': '/'
      }
    },
    '/profile': {
      target: 'https://unlok.me/api/get_profile.php',
      pathRewrite: {
        '^/profile': '/'
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
      // Run ESLint on save
      /*if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
