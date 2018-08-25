export default (func, start = func.length - 1) => {
  if (typeof func !== 'function') {
    throw new TypeError('rest must take a function to execute')
  }
  return function(...args) {
    const sliceStart = start <= func.length - 1 ? start : func.length - 1
    return func.apply(this, [...args.slice(0, start), args.slice(start)])
  }
}
