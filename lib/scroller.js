import SweetScroll from 'sweet-scroll'

const scroller = new SweetScroll()

function scrollTo(id, options) {
  if (id) {
    scroller.to(`#${id}`, options)
  } else {
    scroller.to(0, options)
  }
}

export function scrollFast(id = null) {
  scrollTo(id, {
    easing: 'easeOutQuart',
    duration: 1000
  })
}

export function scrollSlow(id = null) {
  scrollTo(id, {
    easing: 'easeInOutExpo',
    duration: 1500
  })
}
