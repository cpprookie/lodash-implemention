export default func => {
  if (typeof func !== 'function') {
    throw new TypeError('negate must take a function to execute!')
  }
  return (...arg) => !!func(...arg)
}
