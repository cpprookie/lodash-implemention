import isArrayLike from '../isArrayLike'

test('should return false for undefined length', () => {
  expect(isArrayLike({ 0: 1 })).toEqual(false)
})

test('should return false for function type', () => {
  expect(isArrayLike(function() {})).toEqual(false)
})

test('should return true for array', () => {
  expect(isArrayLike([1])).toEqual(true)
})

test('should return true for string', () => {
  expect(isArrayLike('1')).toEqual(true)
})
