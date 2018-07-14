function dropRightWhile(arr, predicate = () => true) {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use dropRightWhile for arrays!')
  }
  if (typeof predicate !== 'function') {
    throw new Error('predicate passed to dropRightWhile must be a function!')
  }
  let dropIndex = null
  for (let i = arr.length - 1; i > -1; i--) {
    if (!predicate(arr[i])) {
      dropIndex = i
      break
    }
  }
  return dropIndex === null ? [] : arr.slice(0, dropIndex + 1)
}

module.exports = dropRightWhile
