import isObject from '../Lang/isObject'

export default obj => {
  if (!isObject(obj)) {
    throw new Error('toPairs must take object as param!')
  }
  const res = []
  for (let k in obj) {
    res.push([k, obj[k]])
  }
  return res
}
