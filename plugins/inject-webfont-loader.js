import WebFont from 'webfontloader'

export default ({ app }, inject) => {
  inject('WebFont', WebFont)
}
