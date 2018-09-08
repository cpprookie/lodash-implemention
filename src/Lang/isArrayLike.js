import isInteger from './isInteger'

export default value =>
  typeof value !== 'function' && value.length > -1 && isInteger(value.length)
