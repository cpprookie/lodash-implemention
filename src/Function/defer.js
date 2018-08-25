export default (func, ...arg) => {
  if (typeof func !== 'function') {
    throw new TypeError('defer must take a function to execute!')
  }
  return setTimeout(() => {
    func(...arg)
  })
}
