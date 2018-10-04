import isObject from '../Lang/isObject'

export default (obj, iteratee = a => a) => {
  if (!isObject(obj)) {
    throw new Error('mapKeys can only take object as first param')
  }
  return Object.keys(obj).reduce((res, key) => {
    res[iteratee(obj[key], key)] = obj[key]
    return res
  }, {})
}
