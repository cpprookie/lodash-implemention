import chunk from '../chunk'

test('illegal input array', () => {
  expect(() => chunk({ 1: 2, 2: 3 })).toThrow()
})
test('default size', () => {
  expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]])
})
test('exact slice', () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]])
})
test('partial slice', () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 4)).toEqual([[1, 2, 3, 4], [5, 6]])
})
test('large size', () => {
  expect(chunk([1, 2, 3], 4)).toEqual([1, 2, 3])
})
