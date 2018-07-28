export default (...arrs) => {
  if (!Array.isArray(arrs)) {
    throw new Error('You can only use union for arrays!')
  }
  return arrs.reduce(
    (result, arr) =>
      Array.isArray(arr)
        ? result.concat(arr.filter(item => result.indexOf(item) < 0))
        : result,
    []
  )
}
