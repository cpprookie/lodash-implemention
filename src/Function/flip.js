export default func => {
  if (typeof func !== 'function') {
    throw new TypeError('flip must take a function to execute!')
  }
  return (...arg) => {
    return func(...arg.reverse())
  }
}
