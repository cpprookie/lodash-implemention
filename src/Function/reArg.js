export default (func, reOrder = []) => {
  if (typeof func !== 'function') {
    throw new TypeError('reArg need take function to execute!')
  }
  return (...args) => {
    if (!Array.isArray(reOrder) || !reOrder.length) {
      return func(...args)
    }
    const finalArgs = new Array(reOrder.length)
    reOrder.forEach((order, index) => (finalArgs[order] = args[index]))
    return func(...finalArgs)
  }
}
