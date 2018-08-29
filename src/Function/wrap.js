export default (func, wrapper) => {
  if (typeof func !== 'function' || typeof wrapper !== 'function') {
    throw new TypeError('wrap must take function to execute!')
  }
  return function(...args) {
    return wrapper.apply(this, [func, ...args])
  }
}
