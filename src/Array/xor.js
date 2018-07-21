module.exports = (...arrs) => {
  if (!Array.isArray(arrs)) {
    throw new Error('You can only use xor for arrays!')
  }
  const repeatedEles = []
  const preResult = arrs.reduce((result, arr) => {
    return result.concat(
      arr.filter(item => {
        if (result.indexOf(item) > -1) {
          repeatedEles.indexOf(item) < 0 && repeatedEles.push(item)
          return false
        }
        return true
      })
    )
  }, [])
  return preResult.filter(element => repeatedEles.indexOf(element) < 0)
}
