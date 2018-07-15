const binarySearch = (arr, value, start, end) => {
  const length = end - start
  if (length === 0) return start === 0 ? start : end + 1
  // zero-fill right shift https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift
  const middle = (start + end) >>> 1
  if (arr[middle] < value) {
    return arr[middle + 1] > value ? middle + 1 : binarySearch(arr, value, middle + 1, end)
  } else {
    return arr[middle - 1] < value ? middle : binarySearch(arr, value, start, middle - 1)
  } 
}
module.exports = (arr, value) => {
  if (!Array.isArray) {
    throw new Error ('You can only use sortedIndex for array!')
  }
  if (!value || arr.length === 0) return arr.length
  if (arr.length === 1) return value > arr[0] ? 1 : 0
  return binarySearch(arr, value, 0, arr.length - 1)
}