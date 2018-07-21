module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('you can only use sortedUniq for arrays!')  
  }
  return arr.reduce((sorted, item) => {
    sorted.indexOf(item) < 0 && sorted.push(item)
    return sorted
  }, [])
} 