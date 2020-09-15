export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  loading: {
    color: '#20A0FF'
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '码农，读书，民谣',
    titleTemplate: '%s | 三毛',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        'http-equiv': 'cleartype',
        content: 'on'
      },
      {
        'http-equiv': 'Cache-Control'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: '民谣，读书，码农。'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '前端开发，JavaScript, Node, Vue，nuxt'
      },
      {
        name: 'author',
        content: 'jkchaom@gmail.com'
      }
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'dns-prefetch',
        href: '//api.jkchao.cn'
      },
      {
        rel: 'dns-prefetch',
        href: '//static.jkchao.cn'
      },
      {
        rel: 'dns-prefetch',
        href: '//cdn.jkchao.cn'
      },
      {
        rel: 'dns-prefetch',
        href: '//www.google-analytics.com'
      }
    ],
    script: [
      {
        async: 'async',
        type: 'text/javascript',
        src: 'https://static.jkchao.cn/intersection-polyfill.js'
      }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: './assets/scss/index.scss',
      lang: 'sass'
    },
    'highlight.js/styles/github.css'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/marked.js'
    },
    {
      src: '~/plugins/highlight.js'
    },
    {
      src: '~/plugins/gravatar.js'
    },
    {
      src: '~/plugins/clickOutside.js',
      ssr: false
    },
    {
      src: '~/plugins/progress-image.js',
      ssr: false
    },
    {
      src: '~/plugins/ga.js',
      ssr: false
    },
    {
      src: '~/plugins/copy.js',
      ssr: false
    },
    {
      src: '~/plugins/baidu-seo-push.js',
      ssr: false
    },
    {
      src: '~/plugins/filter.js'
    },
    {
      src: '~/plugins/finally.js'
    }
  ],

  router: {
    middleware: ['layout'],
    linkActiveClass: 'link-active'
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],

  styleResources: {
    scss: ['./assets/scss/variable.scss', './assets/scss/mixin.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  server: {
    port: 6006, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
};
