import isObject from '../Lang/isObject'

export default (obj, path) => {
  if (!isObject(obj)) {
    throw new Error('pick must take object as param!')
  }
  const finalPath = Array.isArray(path) ? path : [path]
  return finalPath.filter(p => p in obj).reduce((res, k) => {
    res[k] = obj[k]
    return res
  }, {})
}
