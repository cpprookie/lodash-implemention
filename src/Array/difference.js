/**
 * simple value compare
 * @todo compare object and array
 * @param {@type Array} arr1 
 * @param {@type Array} arr2 
 */
function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('You can only use difference for arrays!')
  }
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result.push(arr1[i])
    }
  }
  return result
}

module.exports = difference