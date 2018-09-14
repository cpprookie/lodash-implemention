import isObject from './isObject'
export default (obj, source) => {
  if (!isObject(obj) || !isObject(source)) {
    throw new Error('conformsTo must take object as params')
  }
  const key = Object.keys(source)[0]
  return obj[key] === undefined || typeof source[key] !== 'function'
    ? false
    : source[key](obj[key])
}
