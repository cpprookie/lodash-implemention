import isObject from '../Lang/isObject'
export default (obj, iteratee) => {
  if (!isObject(obj)) {
    throw new Error('forIn must take object as first param')
  }
  if (typeof iteratee !== 'function') {
    throw new Error('forIn must take function as second param')
  }
  let keyArr = []
  for (let key in obj) {
    keyArr.push(key)
  }
  keyArr = keyArr.reverse()
  for (let i = 0; i < keyArr.length; i++) {
    const key = keyArr[i]
    if (iteratee(obj[key], key, obj) === false) {
      return null
    }
  }
}
