import toArray from '../toArray'

test('should return array for object', () => {
  expect(toArray({ a: 1, b: 2 })).toEqual([1, 2])
})

test('should return array for string', () => {
  expect(toArray('abc')).toEqual(['a', 'b', 'c'])
})

test('should return empty array for Function', () => {
  expect(toArray(() => {})).toEqual([])
})
