import isNumber from '../isNumber'

test('should return true for Infinity', () => {
  expect(isNumber(Infinity)).toEqual(true)
})

test('should return true for NaN', () => {
  expect(isNumber(NaN)).toEqual(true)
})

test('should return true for number', () => {
  expect(isNumber(2)).toEqual(true)
})

test('should return false for string', () => {
  expect(isNumber('2')).toEqual(false)
})
