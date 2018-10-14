import isObject from '../Lang/isObject'

export default (object, ...source) => {
  if (!isObject(object)) {
    throw new Error('assign can only take object as params!')
  }

  source.forEach(obj => {
    if (!isObject(obj)) {
      throw new Error('assign can only take object as params!')
    }
    for (let k in obj) {
      if (object[k] === undefined) {
        object[k] = obj[k]
      }
    }
  })
  return object
}
