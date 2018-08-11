export default (collection, iteratee = () => {}, accumulator) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal pamras in reduce')
  }
  if (Array.isArray(collection)) {
    return collection.reduce(iteratee, accumulator)
  } else {
    for (let key in collection) {
      accumulator = accumulator
        ? iteratee(accumulator, collection[key], key)
        : collection[key]
    }
    return accumulator
  }
}
