const flattenDeep = require('../flattenDeep')

test('common case', () => {
  expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5])
})

test('multiple toggled case', () => {
  expect(flattenDeep([1, [2, [3, [4]], 5], [6, [7]]])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ])
})
