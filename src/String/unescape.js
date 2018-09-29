import getDictionary from './baseEscape'

export default str => {
  let finalStr = str
  const dictionary = getDictionary()
  dictionary[0].forEach((entity, i) => {
    const regex = new RegExp(entity, 'g')
    finalStr = finalStr.replace(regex, dictionary[1][i])
  })
  return finalStr
}
