export default (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in reduce')
  }
  if (Array.isArray(collection)) {
    return collection.find(iteratee)
  } else {
    for (let key in collection) {
      if (iteratee(collection[key])) {
        return collection[key]
      }
    }
    return undefined
  }
}
