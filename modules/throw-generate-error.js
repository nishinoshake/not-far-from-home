/**
 * 静的生成の失敗時にその場で例外を投げるように
 *
 * https://github.com/nuxt/nuxt.js/issues/4991
 */
export default function() {
  this.nuxt.hook('generate:routeFailed', ({ route, errors }) => {
    const { error } = errors[0]

    throw new Error(`Error generating ${route}:\n${error}`)
  })
}
