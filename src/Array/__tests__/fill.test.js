const fill = require('../fill')

test('fill all', () => {
  expect(fill([1,2,3], 'a')).toEqual(['a', 'a', 'a'])
})

test('default end', () => {
  expect(fill([1,2,3], '*', 1)).toEqual([1, '*', '*'])
})

test('fill from start to end-1', () => {
  expect(fill([1,2,3], '*', 1, 2)).toEqual([1, '*', 3])
})