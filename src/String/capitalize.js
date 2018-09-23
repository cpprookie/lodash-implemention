import isString from '../Lang/isString'

export default str => {
  if (!isString(str)) {
    throw new Error('capitalize need take a string param!')
  }
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}
