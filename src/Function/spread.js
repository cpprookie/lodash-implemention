export default func => {
  if (typeof func !== 'function') {
    throw new TypeError('spread must take a function to execute!')
  }
  return function(...args) {
    return func.apply(this, args.length ? args[0] : null)
  }
}
