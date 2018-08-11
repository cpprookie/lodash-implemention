export default (collection, iteratee = () => {}) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in reduce')
  }
  if (Array.isArray(collection)) {
    return collection.map(iteratee)
  } else {
    const res = []
    for (let key in collection) {
      res.push(iteratee(collection[key]))
    }
    return res
  }
}
