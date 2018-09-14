import isObject from './isObject'

export default obj => {
  if (!isObject(obj)) {
    throw new Error('clone must take object as param!')
  }
  return Object.assign({}, obj)
}
