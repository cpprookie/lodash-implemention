import reduce from './reduce'

const flatMapDepth = (collection, iteratee = () => {}, depth = 1) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in flatMapDepth')
  }
  return reduce(
    collection,
    (acc, value, key) => {
      const item = iteratee(value, key)
      return acc.concat(
        Array.isArray(item) && depth > 0
          ? flatMapDepth(item, n => n, depth - 1)
          : [item]
      )
    },
    []
  )
}

export default flatMapDepth
