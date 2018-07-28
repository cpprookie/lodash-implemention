function drop(arr, index = 0) {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use drop for arrays!')
  }
  return arr.slice(index)
}

export default drop
