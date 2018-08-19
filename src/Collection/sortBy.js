import orderBy from './orderBy'

export default (collection, keys) => {
  if (typeof collection !== 'object') {
    throw new Error('Illegal param in sortBy')
  }
  return orderBy(collection, keys)
}
