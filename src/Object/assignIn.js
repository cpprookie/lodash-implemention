import isObject from '../Lang/isObject'

export default (object, ...source) => {
  if (!isObject(object)) {
    throw new Error('assignIn can only take object as params!')
  }

  source.forEach(obj => {
    if (!isObject(obj)) {
      throw new Error('assignIn can only take object as params!')
    }
    for (let k in obj) {
      object[k] = obj[k]
    }
  })
  return object
}
