import isObject from '../Lang/isObject'
import keysIn from './keysIn'

export default (obj, path) => {
  if (!isObject(obj)) {
    throw new Error('pick must take object as param!')
  }
  const pathArr = Array.isArray(path) ? path : [path]
  return keysIn(obj)
    .filter(key => pathArr.indexOf(key) < 0)
    .reduce((res, k) => {
      res[k] = obj[k]
      return res
    }, {})
}
