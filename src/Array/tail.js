export default (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use tail for arrays!')
  }
  return arr.slice(1)
}
