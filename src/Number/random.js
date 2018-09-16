import toNumber from '../Lang/toNumber'
export default (lower = 0, upper = 1, floating = false) => {
  let finalLower, finalUpper
  // arguments.length < 3
  if (upper === undefined || typeof upper === 'boolean') {
    finalLower = 0
    finalUpper = toNumber(lower)
    floating = upper
  } else {
    ;(finalLower = toNumber(lower)), (finalUpper = toNumber(upper))
  }
  if (finalLower > finalUpper) {
    ;[finalUpper, finalLower] = [finalLower, finalUpper]
  }
  const res = (finalUpper - finalLower) * Math.random() + finalLower
  if (
    Number.isInteger(finalLower) &&
    Number.isInteger(finalUpper) &&
    !floating
  ) {
    return Math.floor(res)
  }
  return res
}
