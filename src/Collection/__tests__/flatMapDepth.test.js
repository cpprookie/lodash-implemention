import flatMapDepth from '../flatMapDepth'

test('flatMapDepth test | array', () => {
  expect(flatMapDepth([1, 2], n => [[[n, n]]], 2)).toEqual([[1, 1], [2, 2]])
})

test('flatMapDepth test | object', () => {
  expect(flatMapDepth({ a: 1, b: 2 }, n => [[[n, n]]], 2)).toEqual([
    [1, 1],
    [2, 2]
  ])
})
