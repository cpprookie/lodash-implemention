import isString from '../Lang/isString'
const isUpper = c => /[A-Z]/.test(c)
export default str => {
  if (!isString(str)) {
    throw new Error('camelCase needs a string param!')
  }
  const wordArr = []
  let lastIsChar = false
  let lastCharIsUpper = false
  for (let i = 0; i < str.length; i++) {
    const character = str[i]
    if (/[A-Za-z]/.test(character)) {
      if (lastIsChar) {
        const lastIndex = wordArr.length - 1
        if (isUpper(character)) {
          if (lastCharIsUpper) {
            wordArr[lastIndex] += character.toLowerCase()
          } else {
            wordArr.push(character.toLowerCase())
          }
        } else {
          if (lastCharIsUpper) {
            const l = wordArr[lastIndex].length
            if (l > 1) {
              const lastUpperChar = wordArr[lastIndex][l - 1]
              wordArr[lastIndex] = wordArr[lastIndex].slice(-1)
              wordArr.push(lastUpperChar + character)
            } else {
              wordArr[lastIndex] += character
            }
          } else {
            wordArr[lastIndex] += character
          }
        }
      } else {
        wordArr.push(character.toLowerCase())
      }
      lastIsChar = true
      lastCharIsUpper = isUpper(character)
    } else {
      lastIsChar = false
      lastCharIsUpper = false
    }
  }
  return wordArr.join('-')
}
