require('dotenv').config()

const TITLE = 'NOT FAR FROM HOME（映画館の近くに住みたい）'
const DESCRIPTION =
  '映画館がたくさんあるところに住みたい。東京ならとりあえず渋谷の近くに住めば良さそうだけど、大阪や京都だったらどこがいいか。'
const IMAGE_URL = 'https://not-far-from-home.cc/img/og.png'

export default {
  mode: 'universal',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: DESCRIPTION
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
        content: TITLE
      },
      {
        property: 'og:url',
        content: 'https://not-far-from-home.cc'
      },
      {
        name: 'og:title',
        content: TITLE
      },
      {
        name: 'og:description',
        content: DESCRIPTION
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
        name: 'twitter:title',
        content: TITLE
      },
      {
        name: 'twitter:description',
        content: DESCRIPTION
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
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway|Roboto+Mono'
      }
    ]
  },
  transition: 'fade',
  env: {
    BASE_URL:
      process.env.BASE_URL ||
      'https://s3-ap-northeast-1.amazonaws.com/storage.not-far-from-home.cc/api'
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-53153991-9'
      }
    ]
  ],
  styleResources: {
    scss: [
      '~/assets/scss/foundation/_variables.scss',
      '~/assets/scss/foundation/_mixin.scss'
    ]
  }
}
