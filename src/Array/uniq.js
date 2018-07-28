export default (arr = []) => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use uniq for arrays!')
  }
  return arr.reduce((result, item) => {
    result.indexOf(item) < 0 && result.push(item)
    return result
  }, [])
}
