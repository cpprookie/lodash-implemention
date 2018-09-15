import isNull from './isNull'
import isUndefined from './isUndefined'
const INFINITY = 1 / 0
export default val => {
  if (isNull(val) || isUndefined(val)) {
    return ''
  }
  if (typeof val == 'string') {
    return val
  }
  if (Array.isArray(val)) {
    return val.map(v => (v === null ? '' : v.toString())).join(',')
  }
  const result = '' + val
  return result == '0' && 1 / val == -INFINITY ? '-0' : result
}
