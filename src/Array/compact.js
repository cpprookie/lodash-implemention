function compact(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use compact for arrays!')
  }
  return arr.filter(item => !!item)
}

module.exports = compact
