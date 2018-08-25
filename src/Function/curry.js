export default func => {
  if (typeof func !== 'function') {
    throw new TypeError('curry must take a function as argument!')
  }
  const l = func.length
  let params = []
  return function partial(...arg) {
    if (!arg.length) return partial
    params = params.concat(arg)
    if (params.length < l) {
      return partial
    }
    return func(...params)
  }
}
