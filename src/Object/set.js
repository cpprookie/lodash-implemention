import isObject from '../Lang/isObject'
import { splitPath } from './get'

export default (obj, path, value = undefined) => {
  if (!isObject(obj)) {
    throw new Error('get must take object as first param')
  }
  const pathArr = splitPath(path)
  const length = pathArr.length
  let result = obj
  for (let i = 0; i < length; i++) {
    const key = pathArr[i]
    if (i === length - 1) {
      result[key] = value
    } else {
      result[key] = isObject(result[key]) ? result[key] : {}
      result = result[key]
    }
  }
  return obj
}
