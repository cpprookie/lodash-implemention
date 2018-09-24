export default mode => (str, chars = '') => {
  const arr = str.split(chars)
  if (!arr.length) return ''
  let start = str.indexOf(arr[0]),
    end = str.indexOf(arr[arr.length - 1])

  switch (mode) {
    case 'start':
      return arr.slice(start).join(chars)
    case 'end':
      return arr.slice(0, end + 1).join(chars)
    default:
      return arr.slice(start, end + 1).join(chars)
  }
}
