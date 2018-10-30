export default num => {
  let finalNum = num
  if (num === undefined) {
    finalNum = 0
  } else if (num < 0) {
    finalNum = num
  }
  return (...arg) => {
    const index = finalNum >= 0 ? finalNum : arg.length + finalNum
    return arg[index]
  }
}
