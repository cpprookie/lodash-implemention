import isObject from '../Lang/isObject'
export default (obj, iteratee = a => a) => {
  if (!isObject(obj)) {
    throw new Error('forIn must take object as first param')
  }
  const finalObj = Object.keys(obj).reduce((res, key) => {
    const k = obj[key]
    if (!res.hasOwnProperty(k)) {
      res[k] = new Array()
    }
    res[k].push(key)
    return res
  }, {})
  return Object.keys(finalObj).reduce((res, k) => {
    res[iteratee(k)] = finalObj[k]
    return res
  }, {})
}
