import isArrayLike from './isArrayLike'

export default value => typeof value === 'object' && isArrayLike(value)
