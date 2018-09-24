export default (str, radix) => {
  if (!str || !str.length) return parseInt(str)
  let sign = '',
    finalStr = str
  if (['+', '-'].includes(str[0])) {
    sign = str[0]
    finalStr = str.slice(1)
  }
  // remove useless '0'
  finalStr =
    sign +
    finalStr.split('').reduce((res, c) => {
      if (c === '0') {
        return res ? res + '0' : ''
      }
      return res + c
    }, '')
  return parseInt(finalStr, radix)
}
