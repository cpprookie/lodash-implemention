export default (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in filter')
  }
  if (Array.isArray(collection)) {
    return collection.filter(iteratee)
  } else {
    const res = []
    for (let key in collection) {
      iteratee(collection[key]) && res.push(collection[key])
    }
    return res
  }
}
