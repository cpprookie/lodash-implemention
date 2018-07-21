const take = require('../take')

test('null size', () => {
  expect(take([1,2,3])).toEqual([1])
})

test('common size', () => {
  expect(take([1,2,3], 2)).toEqual([1,2])
})

test('size bigger than array length', () => {
  expect(take([1,2,3],5)).toEqual([1,2,3])
})

test('negative size', () => {
  expect(take([1,2,3], -3)).toEqual([])
})