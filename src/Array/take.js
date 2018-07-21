module.exports = (arr = [], size = 1) => {
  if (!Array.isArray) {
    throw new Error('You can only use take for arrays!')
  }
  return arr.slice(0, size < 0 ? 0 : size)
}
