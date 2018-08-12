import flatMap from '../flatMap'

test('flatMap test | array', () => {
  expect(flatMap([1, 2], n => [n, n])).toEqual([1, 1, 2, 2])
})

test('flatMap test | object', () => {
  expect(flatMap({ a: 1, b: 2 }, n => [n, n])).toEqual([1, 1, 2, 2])
})
