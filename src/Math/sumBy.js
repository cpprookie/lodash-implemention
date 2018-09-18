export default (arr, iteratee = a => a) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined
  }
  if (typeof iteratee !== 'function') {
    throw new Error('iteratee should be a function type in maxBy')
  }
  return arr.reduce((res, item) => res + iteratee(item), 0)
}
