import isString from '../Lang/isString'

export default val => {
  if (!isString(val)) {
    throw new Error('toLower must take string as param')
  }
  return val.toLowerCase()
}
