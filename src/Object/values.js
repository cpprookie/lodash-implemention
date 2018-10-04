import isObject from '../Lang/isObject'

export default obj => {
  if (!isObject(obj)) {
    throw new Error('values must take object as param')
  }
  return Object.keys(obj).map(k => obj[k])
}
