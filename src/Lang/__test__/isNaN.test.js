import isNaN from '../isNaN'

test('should return false for number', () => {
  expect(isNaN(2)).toEqual(false)
})

test('should return true for undefined', () => {
  expect(isNaN(undefined)).toEqual(true)
})

test('should return true for NaN', () => {
  expect(isNaN(NaN)).toEqual(true)
})
