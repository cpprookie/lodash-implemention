import filter from './filter'

export default (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('Illegal param in reject!')
  }
  return filter(collection, value => !iteratee(value))
}
