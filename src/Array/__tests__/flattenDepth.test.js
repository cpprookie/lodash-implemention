import flattenDepth from '../flattenDepth'

test('common case ', () => {
  expect(flattenDepth([1, [2], 3])).toEqual([1, 2, 3])
})

test('default depth', () => {
  expect(flattenDepth([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
})

test('flatten for given depth', () => {
  expect(flattenDepth([1, [2, [3, [4]], 5]], 3)).toEqual([1, 2, 3, 4, 5])
})
