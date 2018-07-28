function findLastIndex(arr, predicate) {
  if (!Array.isArray) {
    throw new Error('You can only use findLastIndex for arrays!')
  }
  if (typeof predicate !== 'function') {
    throw new Error('predicate needs to be function in findLastIndex!')
  }
  let res = -1
  for (let i = arr.length - 1; i > -1; i--) {
    if (predicate(arr[i])) {
      res = i
      break
    }
  }
  return res
}

export default findLastIndex
