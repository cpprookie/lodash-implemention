export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined
  }
  return arr.reduce((res, item) => (res < item ? res : item))
}
