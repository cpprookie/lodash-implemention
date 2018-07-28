import takeRight from '../takeRight'

test('null size case', () => {
  expect(takeRight([1, 2, 3])).toEqual([3])
})

test('normal size case', () => {
  expect(takeRight([1, 2, 3], 2)).toEqual([2, 3])
})

test('size bigger than length of array', () => {
  expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3])
})

test('negative size', () => {
  expect(takeRight([1, 2, 3], -1)).toEqual([])
})
