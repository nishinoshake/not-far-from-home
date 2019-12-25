import {
  SITE_TITLE,
  SITE_TITLE_SHORT,
  SITE_DESCRIPTION
} from '@/config/constants'

const buildOgTitle = title => ({
  hid: 'og:title',
  name: 'og:title',
  content: title
})

const buildDescription = text => [
  {
    hid: 'description',
    name: 'description',
    content: text
  },
  {
    hid: 'og:description',
    name: 'og:description',
    content: text
  }
]

export function buildMeta(title = '', description = '') {
  const mergedTitle = title ? `${title} | ${SITE_TITLE_SHORT}` : SITE_TITLE
  const mergedDescription = description || SITE_DESCRIPTION

  return {
    title: mergedTitle,
    meta: [buildOgTitle(mergedTitle), ...buildDescription(mergedDescription)]
  }
}
