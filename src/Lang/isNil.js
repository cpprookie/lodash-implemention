import isNull from './isNull'
export default val => isNull(val) || typeof val === 'undefined'
