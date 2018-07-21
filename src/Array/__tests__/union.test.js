const union = require('../union')

test('common case', () => {
  expect(union([2], [1, 2])).toEqual([2, 1])
})

test('common case', () => {
  expect(
    union(
      [2, 1],
      [2, 1],
      [2, 1],
      [2, 1],
      [2, 1],
      [2, 1],
      [2, 1],
      [2, 1],
      [2, 1],
      [2, 1],
      [3]
    )
  ).toEqual([2, 1, 3])
})
