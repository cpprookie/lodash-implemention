import isString from '../Lang/isString'
export default str => {
  if (!isString(str)) {
    throw new Error('camelCase needs a string param!')
  }
  const wordArr = []
  let lastIsChar = false
  for (let character of str) {
    if (/[A-Za-z]/.test(character)) {
      if (lastIsChar) {
        const l = wordArr.length
        wordArr[l - 1] = wordArr[l - 1] + character.toUpperCase()
      } else {
        lastIsChar = true
        wordArr.push(character.toUpperCase())
      }
    } else {
      lastIsChar = false
    }
  }
  return wordArr.join(' ')
}
