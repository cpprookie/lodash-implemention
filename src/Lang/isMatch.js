const isObject = val => typeof val === 'object'

function isMatch(object, source) {
  if (isObject(object) && isObject(source)) {
    const keys = Object.keys(source)

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i],
        oVal = object[k],
        sVal = source[k]
      if (typeof oVal !== typeof sVal || !isMatch(oVal, sVal)) {
        return false
      }
    }
    return true
  } else {
    return object === source
  }
}

export default isMatch
