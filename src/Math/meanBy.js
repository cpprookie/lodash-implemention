export default (arr, iteratee = a => a) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined
  }
  if (typeof iteratee !== 'function') {
    throw new Error('iteratee should be a function type in maxBy')
  }
  const length = arr.length
  return arr.reduce(
    (res, item, index) =>
      index === length - 1
        ? (res + iteratee(item)) / length
        : res + iteratee(item),
    0
  )
}
