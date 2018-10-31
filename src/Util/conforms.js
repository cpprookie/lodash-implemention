import isObject from '../Lang/isObject'
import isFunction from '../Lang/isFunction'

export default predicate => {
  if (!isObject) {
    throw new Error('conforms must take object as param!')
  }
  return source => {
    const keys = Object.keys(predicate)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i],
        func = predicate[key],
        property = source[key]
      if (!isFunction(func)) {
        throw new Error('predicate property value must be function!')
      } else if (!property || !func(property)) {
        return false
      }
    }
    return true
  }
}
