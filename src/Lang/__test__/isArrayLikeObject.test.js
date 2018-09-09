import isArrayLikeObject from '../isArrayLikeObject'

test('should return false for string type', () => {
  expect(isArrayLikeObject('123')).toEqual(false)
})

test('should return true for object type', () => {
  expect(isArrayLikeObject({ length: 1 })).toEqual(true)
})
