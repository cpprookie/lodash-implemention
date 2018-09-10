import isString from '../isString'

test('should return false for number', () => {
  expect(isString(1)).toEqual(false)
})

test('should return true for string', () => {
  expect(isString('1')).toEqual(true)
})

test('should return true for string object', () => {
  expect(isString(new String('1'))).toEqual(true)
})
