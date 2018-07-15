const sortedIndex = require('../sortedIndex')

test('common case', () => {
  expect(sortedIndex([30, 50], 40)).toEqual(1)
})

test('one memeber array', () => {
  expect(sortedIndex([1], 2)).toEqual(1)
})

test('smallest value', () => {
  expect(sortedIndex([5,5,5], 4)).toEqual(0)
})

test('biggest value', () => {
  expect(sortedIndex([1,1,1], 4)).toEqual(3)
})

test('unsorted array', () => {
  expect(sortedIndex([1,2,3,5,4,3,5,4,5,3,4], 4)).toEqual(6)
})