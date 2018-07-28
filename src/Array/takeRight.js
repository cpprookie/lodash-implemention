export default (arr = [], size = 1) => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use takeRight for arrays!')
  }
  const start = size <= 0 || size >= arr.length ? 0 : arr.length - size,
    end = size <= 0 ? 0 : arr.length
  return arr.slice(start, end)
}
