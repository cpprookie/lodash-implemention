import isInteger from '../isInteger'

test('should return false when pass string', () => {
  expect(isInteger('10')).toEqual(false)
})

test('should return false when pass float', () => {
  expect(isInteger(10.1)).toEqual(false)
})

test('should return true when pass integer', () => {
  expect(isInteger(10)).toEqual(true)
})
