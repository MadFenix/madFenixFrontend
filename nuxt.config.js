
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mad Fénix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Estudio de videojuegos Mad Fénix.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu:wght@300;400&display=swap' },
      { rel: 'stylesheet', href: '/css/main.css' },
    ],
    script: [
      { type: 'application/javascript', src: '/js/tailwind.js' },
      { type: 'application/javascript', src: '/js/tailwind-config.js' },
      { type: 'application/javascript', src: '/js/flowbite.js' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/global.js',
    { src: '@plugins/global-client.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/vuetify-module
    '@nuxtjs/vuetify',
    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa',
  ],
  vuetify: {
    /* module options */
    font: {
      family: 'Roboto'
    },
    theme: {
      themes: {
        light: {
          primary: '#333139',
          secondary: '#cccccc',
          accent: '#BCE0FD',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        }
      }
    },
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set:'@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      },
    ],
    [
      'cookie-universal-nuxt',
    ],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL:  'https://api.madfenix.com',//'{BASE_URL_OF API}/', http://127.0.0.1:8000 | https://api.madfenix.com
    credentials: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
