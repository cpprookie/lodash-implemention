import castArray from '../castArray'

test('should return array for number', () => {
  expect(castArray(1)).toEqual([1])
})

test('should return array for object', () => {
  expect(castArray({ a: 1 })).toEqual([{ a: 1 }])
})

test('should return array for null', () => {
  expect(castArray(null)).toEqual([null])
})

test('should return array for undefined', () => {
  expect(castArray(undefined)).toEqual([undefined])
})

test('should return empty array for empty arguments', () => {
  expect(castArray()).toEqual([])
})
