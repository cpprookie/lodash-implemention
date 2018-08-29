export default func => {
  if (typeof func !== 'function') {
    throw new TypeError('unary must take a function to execute!')
  }
  return (...args) => func(...args.slice(0, 1))
}
