export default mode => (str, chars = ' ') => {
  const length = str.length
  let start = null,
    end = null,
    i = 0
  while (i < length) {
    const word = str.slice(i, i + 1)
    if (!chars.includes(word)) {
      if (start === null) {
        start = i
      }
      end = i + 1
    }
    i++
  }
  switch (mode) {
    case 'start':
      return str.slice(start)
    case 'end':
      return str.slice(0, end)
    default:
      return str.slice(start, end)
  }
}
