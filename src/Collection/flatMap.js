import reduce from './reduce'

export default (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in flatMap')
  }
  return reduce(
    collection,
    (acc, value, key) => {
      const item = iteratee(value, key)
      return Array.isArray(item) ? acc.concat(item) : acc.concat([item])
    },
    []
  )
}
