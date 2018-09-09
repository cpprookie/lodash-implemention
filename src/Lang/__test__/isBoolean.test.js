import isBoolean from '../isBoolean'

test('should return false for null', () => {
  expect(isBoolean(null)).toEqual(false)
})

test('should return true for false', () => {
  expect(isBoolean(false)).toEqual(true)
})
