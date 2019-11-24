export default function() {
  this.nuxt.hook('generate:routeFailed', ({ route, errors }) => {
    const { error } = errors[0]

    throw new Error(`Error generating ${route}:\n${error}`)
  })
}
