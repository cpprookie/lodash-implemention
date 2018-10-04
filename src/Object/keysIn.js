import isObject from '../Lang/isObject'

export default obj => {
  if (!isObject(obj)) {
    throw new Error('keysIn must take object as first param')
  }
  const res = []
  for (let key in obj) {
    res.push(key)
  }
  return res
}
