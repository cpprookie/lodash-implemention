import isObject from './isObject'
export default (obj, customizer = a => a) => {
  if (!isObject(obj)) {
    throw new Error('cloneWith must take object as first param!')
  }
  if (customizer && typeof customizer !== 'function') {
    throw new Error('cloneWith must take function as first param!')
  }
  const res = {}
  for (let key in obj) {
    res[key] = customizer(obj[key])
  }
  return res
}
