module.exports = (...arrs) => {
  if (!Array.isArray(arrs)) {
    throw new Error('You can only use zip for arrays!')
  }
  const max = arrs.reduce(
    (cal, arr) => (Array.isArray(arr) && arr.length > cal ? arr.length : cal),
    0
  )
  const res = []
  for (let i = 0; i < max; i++) {
    res[i] = arrs.reduce((cal, arr) => {
      if (Array.isArray(cal)) cal.push(arr[i])
      return cal
    }, [])
  }
  return res
}
