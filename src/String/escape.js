import getDictionary from './baseEscape'

export default str => {
  const dictionary = getDictionary('escape')
  return str
    .split('')
    .map(c => {
      if (dictionary[0].indexOf(c) > -1) {
        return dictionary[1][dictionary[0].indexOf(c)]
      }
      return c
    })
    .join('')
}
