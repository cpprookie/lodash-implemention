const shouldExchange = (obj1, obj2, fields, order) => {
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    if (obj1[field] === undefined) {
      return true
    } else if (obj2[field] === undefined) {
      return false
    } else if (obj1[field] !== obj2[field]) {
      return (obj1[field] < obj2[field] && order[i] === 'desc') ||
        (obj1[field] > obj2[field] && order[i] === 'asc')
        ? true
        : false
    }
  }
  return false
}
export default (collection, fields = [], order = []) => {
  if (typeof collection !== 'object') {
    throw new Error('illegal collection in orderBy!')
  }
  if (!fields.length) {
    return collection
  }
  if (fields.length > order.length) {
    order = order.concat(new Array(fields.length - order.length).fill('asc'))
  }
  const keys = Object.keys(collection)
  for (let start = 0, k = keys.length; start < k; start++) {
    for (let minest = start, current = start; current < k; current++) {
      if (
        shouldExchange(collection[minest], collection[current], fields, order)
      ) {
        let temp = collection[current]
        collection[current] = collection[minest]
        collection[minest] = temp
      }
    }
  }
  return collection
}
