module.exports = (arr, index = 0) => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use nth for arrays!')
  }
  const l = arr.length
  if (index >= l || index < -l) return undefined
  return arr[index >= 0 ? index : l + index]
}
