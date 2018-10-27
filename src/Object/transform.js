import isObject from '../Lang/isObject'
import create from './create'

export default (obj, iteratee, accumlator) => {
  if (!isObject(obj)) {
    throw new Error('transform must take object as param')
  }
  if (typeof iteratee !== 'function') {
    throw new Error('iteratee must be a function!')
  }
  if (!isObject(accumlator)) {
    accumlator = create(obj)
  }
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (iteratee(accumlator, obj[k], k, obj) === false) {
        break
      }
    }
  }
  return accumlator
}
