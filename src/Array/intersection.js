function intersection(...args) {
  if (!args.length) return []
  const refer = args[0];
  if (args.length === 1) {
    if(Array.isArray(refer)) {
      return refer
    } else {
      throw new Error('You can only use intersection for arrays!')
    }
  }
  const unConfirmed = args.slice(1)
  const res = refer.filter(item => {
    let loopRes = unConfirmed.map(arg => {
      if (!Array.isArray(arg)) throw new Error('You can only use intersection for arrays!')
      return arg.indexOf(item) < 0
    })
    return !loopRes.indexOf(false)
  });
  return res
}

module.exports = intersection