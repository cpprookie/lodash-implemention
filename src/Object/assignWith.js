import isObject from '../Lang/isObject'

export default (object, ...param) => {
  if (!isObject(object)) {
    throw new Error('assignWith can only take object as params!')
  }
  const source = param.slice(0, -1)
  const last = param[param.length - 1]
  const customize = typeof last === 'function' ? last : a => a
  source.forEach(obj => {
    if (!isObject(obj)) {
      throw new Error('assignWith can only take object as params!')
    }
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        object[k] = customize(object[k], obj[k])
      }
    }
  })
  return object
}
