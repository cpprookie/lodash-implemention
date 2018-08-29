export default function(func, wait = 0, option = { leading: false }) {
  if (typeof func !== 'function') {
    throw new TypeError('debounce must take a function to execute!')
  }
  let lastTime = Date.now(),
    timerId = null,
    lastArgs = []
  function result(...args) {
    if (Date.now() - wait >= wait) {
      return func.apply(this, args)
    } else if (!timerId) {
      lastArgs = args
      timerId = setTimeout(function() {
        func.apply(this, lastArgs)
        lastArgs = []
        timerId = null
      }, Date.now() - wait)
    }
  }
  result.cancel = () => {
    timerId && clearTimeout(timerId)
  }
  result.flush = function() {
    if (timerId) {
      func.apply(this, lastArgs)
      clearTimeout(timerId)
    }
  }
  return result
}
