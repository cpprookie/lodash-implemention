export default arrs => {
  if (!Array.isArray(arrs)) {
    throw new Error('You can only use unzip for arrays!')
  }
  if (arrs.length < 2) return arrs
  const maxLength = arrs.reduce(
    (l, arr) => (l > arr.length ? l : arr.length),
    0
  )
  const res = []
  for (let i = 0; i < maxLength; i++) {
    res[i] = arrs.map(arr => arr[i])
  }
  return res
}
