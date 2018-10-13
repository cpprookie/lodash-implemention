import isObject from '../Lang/isObject'

export default obj => {
  if (!isObject(obj)) {
    throw new Error('toPairs must take object as param!')
  }
  return Object.keys(obj).reduce((res, k) => res.concat([[k, obj[k]]]), [])
}
