import flatten from '../flatten'

test('common case', () => {
  expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
})
