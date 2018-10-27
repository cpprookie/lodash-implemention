import isObject from '../Lang/isObject'

const baseMerge = (obj1, obj2) => {
  for (let key in obj2) {
    const val1 = obj1[key]
    const val2 = obj2[key]
    if (isObject(val1) && isObject(val2)) {
      obj1[key] = baseMerge(val1, val2)
    } else if (val2 !== undefined) {
      obj1[key] = val2
    }
  }
  return obj1
}

export default (obj1, obj2) => {
  if (!isObject(obj1) || !isObject(obj2)) {
    throw new Error('merge must take two objects as params!')
  }
  return baseMerge(obj1, obj2)
}
