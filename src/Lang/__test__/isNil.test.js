import isNil from '../isNil'

test('should return true for null', () => {
  expect(isNil(null)).toEqual(true)
})

test('should return true for undefined', () => {
  expect(isNil(undefined)).toEqual(true)
})

test('should return false for 0', () => {
  expect(isNil(0)).toEqual(false)
})
