import get from '../Object/get'
import isFunction from '../Lang/isFunction'

export default obj => p => {
  const func = get(obj, p, undefined)
  if (!isFunction(func)) {
    return func
  }
  return func.call(obj)
}
