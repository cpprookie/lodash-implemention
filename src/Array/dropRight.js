function dropRight(arr, index = 0) {
  if(!Array.isArray(arr)) {
    throw new Error('You can only use dropRight for arrays!')
  }
  const l = arr.length
  return index > l ? [] : arr.slice(0, l-index)
}

module.exports = dropRight