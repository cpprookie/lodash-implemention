export default (arr, separator = '') => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use join for arrays!')
  }
  const l = arr.length
  if (l === 0) return ''
  // let res = String(arr[0])
  // for (let i = 1; i < l; i++) {
  //   res += separator
  //   res += String(arr[i])
  // }

  return arr.reduce(
    (cal, item, index) => (cal += index !== l - 1 ? item + separator : item),
    ''
  )
}
