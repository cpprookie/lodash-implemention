import toNumber from './toNumber'

export default val => {
  const res = toNumber(val)
  if (isNaN(res)) {
    return 0
  }
  if (res === Infinity) {
    return toNumber(4294967295)
  }
  return Math.floor(res)
}
