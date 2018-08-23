export default (thisArg, func = () => {}, ...arg) => {
  if (typeof thisArg !== 'object') {
    throw new TypeError('thisArg must be object!')
  }
  if (typeof func !== 'function') {
    throw new TypeError('func must be a function!')
  }
  return function(...param) {
    return func.apply(thisArg, [...arg, ...param])
  }
}
