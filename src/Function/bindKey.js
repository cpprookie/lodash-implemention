export default (thisArg, key, ...arg) => {
  if (typeof thisArg !== 'object') {
    throw new TypeError('thisArg must be object!')
  }
  if (!String(key).length) {
    throw new TypeError('object field is necessary')
  }
  const func = thisArg[key]
  return function(...param) {
    if (typeof func !== 'function') {
      return null
    }
    return func.apply(thisArg, [...arg, ...param])
  }
}
