module.exports = function throttle(func, wait = 100, options) {
  let start = undefined
  const { flush = false, leading = true, trailing = false } = options

  return () => {
    const now = Date.now()
    if (flush || start === undefined) {
      func()
      start = now
      return
    }
    if (now - start > wait) {
      func()
    }
  }
}
