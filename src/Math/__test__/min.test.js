import min from '../min'

test('should return undefined for empty array', () => {
  expect(min([])).toEqual(undefined)
})

test('return min one in the array', () => {
  expect(min([2, 3, 8, 1])).toEqual(1)
})
