import isObject from '../Lang/isObject'
import { splitPath } from './get'

const hasProperty = (mode, obj, key) =>
  mode === 'has' ? obj.hasOwnProperty(key) : key in obj

export default mode => (obj, path) => {
  if (!isObject(obj)) {
    throw new Error('Has must take object as param!')
  }
  const finalPath = splitPath(path)
  for (let i = 0; i < finalPath.length; i++) {
    const key = finalPath[i]
    if (!hasProperty(mode, obj, key)) {
      return false
    }
    obj = obj[key]
  }
  return true
}
