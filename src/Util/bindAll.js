import isObject from '../Lang/isObject'
import isFunction from '../Lang/isFunction'

export default (obj, properties) => {
  if (!isObject(obj)) {
    throw new Error('bindAll must take object as first param!')
  }
  const finalPros = Array.isArray(properties) ? properties : [properties]
  finalPros.forEach(
    attr => isFunction(obj[attr]) && (obj[attr] = obj[attr].bind(obj))
  )
}
