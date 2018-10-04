import isObject from '../Lang/isObject'
export default (obj, iteratee) => {
  if (!isObject(obj)) {
    throw new Error('forIn must take object as first param')
  }
  if (typeof iteratee !== 'function') {
    throw new Error('forIn must take function as second param')
  }
  for (let key in obj) {
    if (iteratee(obj[key], key, obj) === false) {
      break
    }
  }
}
