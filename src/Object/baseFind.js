import isObject from '../Lang/isObject'
export default mode => (obj, predicate) => {
  if (!isObject(obj)) {
    throw new Error('findKey must take object as first param')
  }
  if (typeof predicate !== 'function') {
    throw new Error('findKey must take function as second param')
  }
  const keysArr =
    mode === 'last' ? Object.keys(obj).reverse() : Object.keys(obj)
  return keysArr.find(k => predicate(obj[k]))
}
