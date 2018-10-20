import isObject from '../Lang/isObject'

function baseDefault(obj1, obj2) {
  const result = Object.assign(obj1)
  for (let k in obj2) {
    if (!result[k]) {
      result[k] = obj2[k]
    } else if (typeof result[k] === 'object' && typeof obj2[k] === 'object') {
      result[k] = baseDefault(result[k], obj2[k])
    }
  }
  return result
}

export default (object, ...source) => {
  if (!isObject(object)) {
    throw new Error('deepDefaults can only take object as params!')
  }

  return source.reduce((res, obj) => {
    if (!isObject(obj)) {
      throw new Error('deepDefaults can only take object as params!')
    }
    res = baseDefault(res, obj)
    return res
  }, object)
}
