export default (func, ...argOperater) => {
  if (typeof func !== 'function') {
    throw new TypeError('overArgs must wrap a function!')
  }
  return (...args) => {
    const operatedArgs = args.map((arg, index) => {
      if (typeof argOperater[index] === 'function') {
        return argOperater[index](arg)
      }
      return arg
    })
    return func(...operatedArgs)
  }
}
