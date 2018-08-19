import size from './size'
export default collection => {
  if (typeof collection !== 'object') {
    throw new Error('Illegal param in sample!')
  }
  const index = Math.floor(Math.random() * size(collection))
  return Array.isArray(collection)
    ? collection[index]
    : collection[Object.keys(collection)[index]]
}
