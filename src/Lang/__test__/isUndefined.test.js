import isUndefined from '../isUndefined'

test('should return false for null', () => {
  expect(isUndefined(null)).toEqual(false)
})

test('should return true for undefined', () => {
  expect(isUndefined(undefined)).toEqual(true)
})
