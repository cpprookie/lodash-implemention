import isArray from '../isArray'

test('should return true', () => {
  expect(isArray([1, 2])).toEqual(true)
})

test('should return false for object like array', () => {
  expect(isArray({ 0: 'a', 1: 'b', length: 2 })).toEqual(false)
})
