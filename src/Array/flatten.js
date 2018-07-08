const falttenDepth = require('./flattenDepth')
module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use faltten for arrays!')
  }
  return falttenDepth(arr)
}