import startsWith from '../startsWith'

test('should return true for "abc" starts with "a"', () => {
  expect(startsWith('abc', 'a')).toEqual(true)
})

test('should return true for "abc" starts with "a"', () => {
  expect(startsWith('abc', 'b')).toEqual(false)
})

test('should return true for "abc" starts with "b" from position 1', () => {
  expect(startsWith('abc', 'b', 1)).toEqual(true)
})
