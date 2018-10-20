import isObject from '../Lang/isObject'
import isNil from '../Lang/isNil'
import isString from '../Lang/isString'

/**
 * @param {String|Array} p
 */
export function splitPath(p) {
  if (isString(p)) {
    return p
      .replace(/\[/g, '.')
      .replace(/\]/, '')
      .split('.')
  }
  return p
}

export default (obj, path, defaultValue) => {
  if (!isObject(obj)) {
    throw new Error('get must take object as first param')
  }
  const pathArr = splitPath(path)
  let result = Object.assign(obj)
  for (let i = 0; i < pathArr.length; i++) {
    result = result[pathArr[i]]
    if (isNil(result)) {
      return defaultValue || undefined
    }
  }
  return result
}
