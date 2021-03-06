import filter from './filter'

export default (collection, value, fromIndex = 0) => {
  if (['object', 'string'].indexOf(typeof collection) < 0) {
    throw new Error('illegal pamras in inclueds')
  }
  if (typeof collection === 'string') {
    return collection.includes(value)
  }
  const subCollection =
    Array.isArray(collection) && fromIndex
      ? collection.slice(fromIndex)
      : collection
  for (let key in subCollection) {
    if (subCollection[key] === value) return true
  }
  return false
}
