import isInfinite from '../isInfinite'

test('should return true for min number', () => {
  expect(isInfinite(Number.MIN_VALUE)).toEqual(true)
})

test('should return false for infinity', () => {
  expect(isInfinite(Infinity)).toEqual(false)
})

test('should return false for common number', () => {
  expect(isInfinite(3)).toEqual(true)
})
