import lte from '../lte'

test('should return true for 3 and 3', () => {
  expect(lte(3, 3)).toEqual(true)
})

test('should return true for 1 and 2', () => {
  expect(lte(1, 2)).toEqual(true)
})
