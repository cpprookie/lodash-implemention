import isNull from '../isNull'

test('should return false for undefined', () => {
  expect(isNull(undefined)).toEqual(false)
})

test('should return true for null', () => {
  expect(isNull(null)).toEqual(true)
})
