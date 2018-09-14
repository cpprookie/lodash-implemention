import gte from '../gte'

test('should return true for 3 and 3', () => {
  expect(gte(3, 3)).toEqual(true)
})

test('should return false for 1 and 2', () => {
  expect(gte(1, 2)).toEqual(false)
})
