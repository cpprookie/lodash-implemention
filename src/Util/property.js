import get from '../Object/get'
import isObject from '../Lang/isObject'

export default p => obj => {
  if (isObject(p)) {
    return get(obj, p)
  }
}
