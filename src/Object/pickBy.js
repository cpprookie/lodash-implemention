import isObject from '../Lang/isObject'

export default (obj, path, predicate = (k, v) => v) => {
  if (!isObject(obj)) {
    throw new Error('pickBy must take object as param!')
  }
  const finalPath = Array.isArray(path) ? path : [path]
  return finalPath.filter(p => p in obj).reduce((res, k) => {
    const val = obj[k]
    if (predicate(k, val)) {
      res[k] = val
    }
    return res
  }, {})
}
