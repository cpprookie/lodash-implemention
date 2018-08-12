import reduce from './reduce'

export default (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in keyBy')
  }
  return reduce(
    collection,
    (acc, value) => {
      acc[iteratee(value)] = value
      return acc
    },
    {}
  )
}
