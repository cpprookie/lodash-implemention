const sortedUniq = require('../sortedUniq')

test('common case', () => {
  expect(sortedUniq([1,2,1])).toEqual([1,2])
})