import isString from '../Lang/isString'
export default (str, target = '0', position = 0) => {
  if (!isString(str)) {
    throw new Error('endsWith must pass a string as param')
  }
  const finalStr = str.slice(position)
  return finalStr[0] === target
}
