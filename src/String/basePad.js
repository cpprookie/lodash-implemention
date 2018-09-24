import isString from '../Lang/isString'
export default mode => (str, l = 0, chars = ' ') => {
  if (!isString(str)) {
    throw new Error('pad must take string as param!')
  }
  if (l <= str.length) return str

  const arrLength = Math.floor((l - str.length) / chars.length)
  const lastCharsLength = (l - str.length) % chars.length
  const joinedStr = arrLength ? new Array(arrLength).fill(chars).join('') : ''
  const fillStr = chars.slice(0, lastCharsLength)
  let padStart,
    padEnd,
    startLength = 0

  switch (mode) {
    case 'start':
      padStart = joinedStr + fillStr
      padEnd = ''
      break
    case 'end':
      padEnd = joinedStr + fillStr
      padStart = ''
      break
    default:
      startLength = Math.floor(arrLength / 2)
      padStart =
        arrLength > 1 ? new Array(startLength).fill(chars).join('') : joinedStr
      padEnd =
        arrLength > 1
          ? new Array(arrLength - startLength).fill(chars).join('') +
            chars.slice(0, lastCharsLength)
          : chars.slice(0, lastCharsLength)
      break
  }
  return padStart + str + padEnd
}
