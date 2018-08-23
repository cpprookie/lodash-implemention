export default (n = 0, func = () => {}) => {
  return function(...param) {
    if (n-- > 0) {
      return func.apply(this, param)
    }
  }
}
