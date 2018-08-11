import reduce from './reduce'

export default (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in groupBy')
  }
  return reduce(
    collection,
    (acc, value) => {
      const resKey = iteratee(value)
      acc[resKey] ? acc[resKey].push(value) : (acc[resKey] = [value])
      return acc
    },
    {}
  )
}
