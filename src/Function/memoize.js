/**
 * Not support complex "key equal" as lodash
 */
export default (func, resolver) => {
  if (typeof func !== 'function') {
    throw new Error('memoize must take function to execute!')
  }
  function wrap(...arg) {
    if (!arg.length) return null
    const key = resolver ? resolver.apply(this, arg) : arg[0]
    if (wrap.cache.has(key)) {
      return wrap.cache.get(key)
    }
    const res = func.apply(this, arg)
    wrap.cache.set(key, res)
    return res
  }
  wrap.cache = new Map()
  return wrap
}
