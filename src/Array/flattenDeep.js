import flattenDepth from './flattenDepth'

export default arr => {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use flattenDeep for arrays!')
  }
  return flattenDepth(arr, 'INFINITE')
}
