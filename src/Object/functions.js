import isObject from '../Lang/isObject'
import isFunction from '../Lang/isFunction'

export default obj => {
  if (!isObject) {
    throw new Error('functions must take object as param!')
  }
  return Object.keys(obj).filter(k => isFunction(obj[k]))
}
