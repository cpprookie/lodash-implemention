const flattenDepth = (arr, depth = 1) => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use flattenDepth for arrays!')
  }
  return arr.reduce((res, item) => Array.isArray(item) && depth ? res.concat(flattenDepth(item, depth === 'INFINITE' ? depth : depth - 1)) : res.concat([item]), [])
}

module.exports = flattenDepth