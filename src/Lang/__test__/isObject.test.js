import isObject from '../isObject'

test('should return true for function', () => {
  expect(isObject(() => {})).toEqual(true)
})

test('should return true for 0bject', () => {
  expect(isObject({ a: 1 })).toEqual(true)
})

test('should return true for regexp', () => {
  expect(isObject(/abc/)).toEqual(true)
})

test('should return true for number object', () => {
  expect(isObject(new Number(123))).toEqual(true)
})

test('should return true for string object', () => {
  expect(isObject(new String('1'))).toEqual(true)
})

test('should return true for array', () => {
  expect(isObject([1, 2, 3])).toEqual(true)
})

test('should return false for null', () => {
  expect(isObject(null)).toEqual(false)
})

test('should return false for undefined', () => {
  expect(isObject(undefined)).toEqual(false)
})

test('should return false for map', () => {
  expect(isObject(new Map())).toEqual(false)
})
