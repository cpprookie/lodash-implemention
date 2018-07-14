function dropWhile(arr, predicate = () => true) {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use dropWhile for arrays!')
  }
  if (typeof predicate !== 'function') {
    throw new Error('predicate passed to dropWhile must be a function!')
  }
  let dropIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      dropIndex = i
      break
    }
  }
  return arr.slice(dropIndex)
}

module.exports = dropWhile
