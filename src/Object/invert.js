import isObject from '../Lang/isObject'
export default obj => {
  if (!isObject(obj)) {
    throw new Error('forIn must take object as first param')
  }
  return Object.keys(obj).reduce((res, key) => {
    const k = obj[key]
    res[k] = key
    return res
  }, {})
}
