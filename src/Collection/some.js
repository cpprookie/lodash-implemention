import filter from './filter'
export default (collection, predicate = () => true) => {
  if (typeof collection !== 'object') {
    throw new Error('Illegal params in some')
  }
  return !!filter(collection, predicate).length
}
