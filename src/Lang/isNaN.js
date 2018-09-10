import isNumber from './isNumber'
export default val => !isNumber(val) || Number.isNaN(val)
