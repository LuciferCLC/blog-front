module.exports = {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: 'localhost' // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: `Nolan's Blog`,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'Cache-Control' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '民谣，读书，码农。' },
      { hid: 'keywords', name: 'keywords', content: 'FontEnd, JavaScript, Node, Vue，nuxt' },
      { name: 'author', content: 'clc.lucifer@gmail.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#20a0ff' },
  /*
  ** Global CSS
  */
  css: [
    { src: './assets/scss/index.scss', lang: 'sass' },
    'highlight.js/styles/github.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/marked.js' },
    { src: '~/plugins/highlight.js' },
    { src: '~/plugins/gravatar.js' },
    { src: '~/plugins/clickOutside.js', ssr: false },
    { src: '~/plugins/progress-image.js', ssr: false },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/copy.js', ssr: false },
    { src: '~/plugins/baidu-seo-push.js', ssr: false },
    { src: '~/plugins/filter.js' },
    { src: '~/plugins/finally.js' }
  ],
  router: {
    middleware: ['layout'],
    linkActiveClass: 'link-active'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/component-cache',
      { max: 10000, maxAge: 1000 * 60 * 60 }
    ]
  ],
  styleResources: {
    scss: ['./assets/scss/variable.scss', './assets/scss/mixin.scss']
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
