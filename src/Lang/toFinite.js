import toNumber from './toNumber'

export default val => {
  const res = toNumber(val)
  if (isNaN(res)) {
    return 0
  }
  if (res === Infinity) {
    return toNumber(Number.MAX_VALUE)
  }
  return res
}
