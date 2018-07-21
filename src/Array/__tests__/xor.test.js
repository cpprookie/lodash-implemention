const xor = require('../xor')

test('common case', () => {
  expect(xor([2, 1], [2, 3])).toEqual([1, 3])
})
