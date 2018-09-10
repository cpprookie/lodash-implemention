import isNumber from './isNumber'
export default val => isNumber(val) && Number.isFinite(val)
