export default (collection, iteratee) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal params in every!')
  }
  if (Array.isArray(collection)) {
    return collection.every(iteratee)
  } else {
    for (let key in collection) {
      if (!iteratee(collection[key])) {
        return false
      }
    }
    return true
  }
}
