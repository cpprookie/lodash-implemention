import toNumber from '../Lang/toNumber'
export default (val, start = 0, end) => {
  const finalNum = toNumber(val)
  let finalStart, finalEnd
  if (end === undefined) {
    finalEnd = start
    finalStart = 0
  } else if (start > end) {
    ;[finalStart, finalEnd] = [end, start]
  } else {
    finalStart = start
    finalEnd = end
  }
  return finalNum >= finalStart && finalNum < finalEnd
}
