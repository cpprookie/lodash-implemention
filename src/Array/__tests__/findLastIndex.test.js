const findLastIndex = require('../../Array/findLastIndex')

test('find in arry', () => {
  expect(findLastIndex([1,2,3,4,5], i => i > 2)).toEqual(4)
})

test('no result', () => {
  expect(findLastIndex([1,2,3,4,5], i => i > 6)).toEqual(-1)
})