import flatMapDeep from '../flatMapDeep'

test('flatMapDeep test | array', () => {
  expect(flatMapDeep([1, 2], n => [[[n, n]]])).toEqual([1, 1, 2, 2])
})

test('flatMapDeep test | object', () => {
  expect(flatMapDeep({ a: 1, b: 2 }, n => [[[n, n]]])).toEqual([1, 1, 2, 2])
})
