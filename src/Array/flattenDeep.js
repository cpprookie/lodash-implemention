const flattenDepth = require('./flattenDepth')

module.exports = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use flattenDeep for arrays!')
  }
  return flattenDepth(arr, 'INFINITE')
}