module.exports = (arr, predicate = () => true) => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use remove for arrays!')
  }
  const newArr = []
  const res = arr.filter(item => {
    if (predicate(item)) {
      return true
    }
    newArr.push(item)
    return false
  })
  arr = newArr
  return res
}
