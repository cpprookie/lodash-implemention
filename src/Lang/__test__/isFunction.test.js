import isFunction from '../isFunction'

test('should return false for object', () => {
  expect(isFunction({ a: 1 })).toEqual(false)
})

test('should return true for function', () => {
  expect(isFunction(() => {})).toEqual(true)
})
