export default (func, wait = 0, ...arg) => {
  if (typeof func !== 'function') {
    throw new TypeError('delay must take function to execute!')
  }
  return setTimeout(() => {
    func(...arg)
  }, wait)
}
