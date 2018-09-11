import isObjectLike from '../isObjectLike'

test('should return false for null', () => {
  expect(isObjectLike(null)).toEqual(false)
})

test('should return false for number', () => {
  expect(isObjectLike(2)).toEqual(false)
})

test('should return true for number object', () => {
  expect(isObjectLike(new Number(2))).toEqual(true)
})
