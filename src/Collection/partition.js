import reduce from './reduce'
export default (collection, predicate) => {
  if (typeof collection !== 'object') {
    throw new Error('Illegal param in partition')
  }
  return reduce(
    collection,
    (acc, item) => {
      if (predicate(item)) {
        acc[0] ? acc[0].push(item) : (acc[0] = [item])
      } else {
        acc[1] ? acc[1].push(item) : (acc[1] = [item])
      }
      return acc
    },
    []
  )
}
