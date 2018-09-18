import mean from '../mean'

test('should return undefined for empty array', () => {
  expect(mean([])).toEqual(undefined)
})

test('return mean one in the array', () => {
  expect(mean([4, 2, 8, 6])).toEqual(5)
})
