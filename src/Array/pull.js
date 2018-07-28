function pull(arr, ...args) {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use pull for arrays!')
  }
  if (!arr.length) return []
  return (arr = arr.filter(item => args.indexOf(item) < 0))
}

export default pull
