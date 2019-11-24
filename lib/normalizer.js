export function normalize(items, key = 'id') {
  return items.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item
    }),
    {}
  )
}
