import isObject from '../Lang/isObject'
import isNil from '../Lang/isNil'

/**
 *
 * @param {object} obj
 * @param {Array} path
 */
function getValue(obj, pathArr) {
  let result = Object.assign({}, obj)
  for (let i = 0; i < pathArr.length; i++) {
    const key = pathArr[i]
    if (key.includes('[') || key.includes(']')) {
      let start = key.indexOf('['),
        end = key.indexOf(']')
      // handle illegal path string
      if (
        start === -1 ||
        end === -1 ||
        start >= end ||
        typeof result[key.slice(0, start)] !== 'object'
      ) {
        return undefined
      } else {
        result =
          start === 0
            ? result[key.slice(1, end)]
            : result[key.slice(0, start)][key.slice(start + 1, end)]
      }
    } else {
      result = result[key]
    }
    // break loop if get lodash nil type
    if (isNil(result)) {
      return result
    }
  }
  return result
}

export default (obj, paths) => {
  if (!isObject(obj)) {
    throw new Error('at must take object as first param')
  }
  const finalPaths = Array.isArray(paths) ? paths : [paths]
  return finalPaths.map(path => getValue(obj, path.split('.')))
}
