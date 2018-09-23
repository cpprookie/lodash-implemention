import endsWith from '../endsWith'

test('should return true for "abc" end with "c"', () => {
  expect(endsWith('abc', 'c')).toEqual(true)
})

test('should return true for "abc" end with "c"', () => {
  expect(endsWith('abc', 'b')).toEqual(false)
})

test('should return true for "abc" end with "b" up to position 2', () => {
  expect(endsWith('abc', 'b', 2)).toEqual(true)
})
