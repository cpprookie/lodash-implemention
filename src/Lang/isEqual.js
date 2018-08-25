const isObjEqual = (obj1, obj2) => {
  for (let key in obj1) {
    const val1 = obj1[key],
      val2 = obj2[key]
    if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!isObjEqual(val1, val2)) {
        return false
      }
    } else if (val1 !== val2) {
      return false
    }
  }
  return true
}
export default (a, b) => {
  if (!a || !b) {
    throw new Error('isEqual needs two params')
  }
  if (typeof a !== typeof b) {
    return false
  }
  if (typeof a !== 'object') {
    return a === b
  }
  return isObjEqual(a, b)
}
