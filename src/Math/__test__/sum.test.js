import sum from '../sum'

test('should return undefined for empty array', () => {
  expect(sum([])).toEqual(undefined)
})

test('return sum one in the array', () => {
  expect(sum([2, 3, 8, 1])).toEqual(14)
})
