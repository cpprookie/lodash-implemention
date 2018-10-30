import isNumber from '../Lang/isNumber'

const warningWrap = func => (...param) => {
  if (param.map(isNumber).includes(false)) {
    throw new Error('range can only take number params!')
  }
  return func(...param)
}

const range1Param = num => {
  if (num === 0) {
    return []
  }
  return new Array(Math.abs(num))
    .fill(0)
    .map((item, i) => (num > 0 ? item + i : item - i))
}

const range3Params = (start, end, step) => {
  const distance = Math.abs(end - start)
  if (step === 0) {
    return []
  } else if (start === end || (end - start) * step < 0) {
    return []
  } else if (distance <= Math.abs(step)) {
    return [start]
  } else {
    const length = Math.ceil(distance / Math.abs(step))
    return Array(length)
      .fill(start)
      .map((item, i) => item + i * step)
  }
}

export default (...param) => {
  switch (param.length) {
    case 0:
      return []
    case 1:
      return warningWrap(range1Param)(...param)
    case 2:
      let step = 1
      if (param[0] - param[1] === 0) {
        step = 0
      } else if (param[0] - param[1] > 0) {
        step = -1
      }
      return warningWrap(range3Params)(...param, step)
    default:
      return warningWrap(range3Params)(...param)
  }
}
