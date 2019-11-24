export const SITE_TITLE = 'NOT FAR FROM HOME（映画館の近くに住みたい）'
export const SITE_DESCRIPTION =
  '映画館がたくさんあるところに住みたい。東京ならとりあえず渋谷の近くに住めば良さそうだけど、大阪や京都だったらどこがいいのか。そんな思いを解決できるかもしれません。'

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
  const mergedTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  const mergedDescription = description || SITE_DESCRIPTION

  return {
    title: mergedTitle,
    meta: [buildOgTitle(mergedTitle), ...buildDescription(mergedDescription)]
  }
}
