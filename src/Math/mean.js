export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined
  }
  const length = arr.length
  return arr.reduce(
    (res, item, index) =>
      index === length - 1 ? (res + item) / length : res + item
  )
}
