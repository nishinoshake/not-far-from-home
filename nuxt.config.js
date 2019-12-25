require('dotenv').config()

const {
  SITE_TITLE,
  SITE_DESCRIPTION,
  PREFECTURE_SLUGS
} = require('./config/constants')
const IMAGE_URL = 'https://not-far-from-home.cc/img/og.png'

export default {
  mode: 'universal',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: SITE_TITLE,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: SITE_DESCRIPTION
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: SITE_TITLE
      },
      {
        property: 'og:url',
        content: 'https://not-far-from-home.cc'
      },
      {
        name: 'og:title',
        content: SITE_TITLE
      },
      {
        name: 'og:description',
        content: SITE_DESCRIPTION
      },
      {
        property: 'og:image',
        content: IMAGE_URL
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:image',
        content: IMAGE_URL
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        href: '/img/favicon.ico'
      }
    ]
  },
  build: {
    html: {
      minify: {
        collapseWhitespace: true
      }
    }
  },
  generate: {
    routes: PREFECTURE_SLUGS.map(slug => `/ranking/${slug}/`)
  },
  env: {
    STORAGE_URL:
      process.env.STORAGE_URL ||
      'https://s3-ap-northeast-1.amazonaws.com/storage.not-far-from-home.cc/api',
    API_URL: process.env.API_URL || 'https://api.not-far-from-home.cc'
  },
  plugins: [{ src: '@/plugins/inject-webfont-loader.js', mode: 'client' }],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-53153991-20'
      }
    ],
    '@/modules/throw-generate-error'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/foundation/_variables.scss',
      '@/assets/scss/foundation/_mixin.scss'
    ]
  },
  manifest: {
    name: SITE_TITLE,
    short_name: SITE_TITLE,
    lang: 'ja',
    orientation: 'portrait',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: '/'
  }
}
