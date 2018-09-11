import isSafeInteger from '../isSafeInteger'

test('should return true for 3', () => {
  expect(isSafeInteger(2)).toEqual(true)
})

test('should return false for Number.MIN_VALUE', () => {
  expect(isSafeInteger(Number.MIN_VALUE)).toEqual(false)
})

test('should return true for Number.MIN_SAFE_INTEGER', () => {
  expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).toEqual(true)
})
