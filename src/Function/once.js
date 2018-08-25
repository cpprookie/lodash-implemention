export default func => {
  if (typeof func !== 'function') {
    throw new TypeError('once must take function as input!')
  }
  const hasInvoked = false
  let result
  return (...arg) => {
    if (!hasInvoked) {
      result = func(...arg)
    }
    return result
  }
}
