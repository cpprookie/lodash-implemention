export default (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in findLast')
  }
  if (Array.isArray(collection)) {
    return collection.reverse().find(iteratee)
  } else {
    const key = Object.keys(collection)
      .reverse()
      .find(key => iteratee(collection[key]))
    return key === 'undefined' ? key : collection[key]
  }
}
