export default (n = 0, func = () => {}) => {
  return function(...arg) {
    const param = arg.length > n ? arg.slice(0, n) : arg
    return func.apply(this, param)
  }
}
