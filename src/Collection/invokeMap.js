import reduce from './reduce'

export default (collection, iteratee = () => {}, ...parmas) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in invokeMap')
  }
  return reduce(
    collection,
    (acc, value, key) => {
      acc.push(iteratee.apply(value, parmas))
      return acc
    },
    []
  )
}
