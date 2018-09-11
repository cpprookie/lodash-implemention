import isTypedArray from '../isTypedArray'

test('should return true for new Uint8Array', () => {
  expect(isTypedArray(new Uint8Array())).toEqual(true)
})

test('should return false for array', () => {
  expect(isTypedArray([1])).toEqual(false)
})
