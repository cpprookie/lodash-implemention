function intersection(...args) {
  if (!args.length) return []
  const refer = args[0]
  if (args.length === 1) {
    if (Array.isArray(refer)) {
      return refer
    } else {
      throw new Error('You can only use intersection for arrays!')
    }
  }
  const unConfirmed = args.slice(1)
  const res = refer.filter(item => {
    for (let i = 0; i < unConfirmed.length; i++) {
      if (unConfirmed[i].indexOf(item) < 0) {
        return false
      }
    }
    return true
  })
  return res
}

export default intersection
