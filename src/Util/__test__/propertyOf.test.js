import propertyOf from '../propertyOf'

const array = [0, 1, 2],
  object = { a: array, b: array, c: array }

test('return object value at path', () => {
  expect(['a[2]', 'c[0]'].map(propertyOf(object))).toEqual([2, 0])
})

test('path could be array', () => {
  expect([['a', '2'], ['c', '0']].map(propertyOf(object))).toEqual([2, 0])
})

test('return value when path is not array', () => {
  expect(propertyOf(object)('a[2]')).toEqual(2)
})
