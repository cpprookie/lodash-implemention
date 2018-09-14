import isString from './isString'
export default val => {
  if (Object.prototype.toString.call(val) === '[object Object]') {
    return Object.keys(val).map(k => val[k])
  }
  if (isString(val)) {
    return val.split('')
  }
  return []
}
