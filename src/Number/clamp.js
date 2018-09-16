import toNumber from '../Lang/toNumber'
export default (val, lower, upper) => {
  const finalLower = Math.min(toNumber(lower), toNumber(upper))
  const finalUpper = Math.max(toNumber(lower), toNumber(upper))
  if (val < finalLower) {
    return finalLower
  }
  if (val > finalUpper) {
    return finalUpper
  }
  return val
}
