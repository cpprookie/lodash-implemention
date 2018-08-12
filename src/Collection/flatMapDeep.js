import reduce from './reduce'

const flatMapDeep = (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in flatMap')
  }
  return reduce(
    collection,
    (acc, value, key) => {
      const item = iteratee(value, key)
      return acc.concat(
        Array.isArray(item) ? flatMapDeep(item, n => n) : [item]
      )
    },
    []
  )
}

export default flatMapDeep
