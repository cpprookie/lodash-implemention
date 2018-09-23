import isString from '../Lang/isString'
export default (str, target = '0', position = str.length) => {
  if (!isString(str)) {
    throw new Error('endsWith must pass a string as param')
  }
  const finalStr = str.slice(0, position)
  return finalStr.indexOf(target) === finalStr.length - 1
}
