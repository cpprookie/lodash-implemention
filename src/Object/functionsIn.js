import isObject from '../Lang/isObject'
import isFunction from '../Lang/isFunction'

export default obj => {
  if (!isObject) {
    throw new Error('functionsIn must take object as param!')
  }
  const res = []
  for (let k in obj) {
    if (isFunction(obj[k])) {
      res.push(k)
    }
  }
  return res
}
