import max from '../max'

test('should return undefined for empty array', () => {
  expect(max([])).toEqual(undefined)
})

test('return max one in the array', () => {
  expect(max([2, 3, 8, 1])).toEqual(8)
})
