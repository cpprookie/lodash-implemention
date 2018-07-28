export default arr => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use fromPairs for arraya!')
  }
  return arr.reduce((res, item) => {
    if (Array.isArray(item)) {
      res[item[0]] = item[1]
    } else {
      res['undefined'] = undefined
    }
    return res
  }, {})
}
