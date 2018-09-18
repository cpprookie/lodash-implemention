import toNumber from '../Lang/toNumber'
export default (val, precition = 0) => {
  if (typeof precition !== 'number') {
    precition = 0
  }
  const finalVal = toNumber(val)
  const step = Math.pow(10, precition)
  return Math.floor(finalVal * step) / step
}
