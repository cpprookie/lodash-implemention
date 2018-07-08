const intersection = require('../intersection')

test('zero length args', () => {
  expect(intersection()).toEqual([])
})

test('on element args', () => {
  expect(intersection([1,2])).toEqual([1,2])
})

test('mulitple elements args', () => {
  expect(intersection([1,2], [2,3], [8,2])).toEqual([2])
})

test('big input', () => {
  expect(intersection([1,2], [2,3], [8,2],[1,2], [2,3], [8,2],
    [1,2], [2,3], [8,2],[1,2], [2,3], [1,2], [2,3], [8,2],[1,2], [2,3], 
    [1,2], [2,3], [8,2],[1,2], [2,3], [1,2], [2,3], [8,2],[1,2], [2,3], 
    [1,2], [2,3], [8,2],[1,2], [2,3], [1,2], [2,3], [8,2],[1,2], [2,3], 
    [1,2], [2,3], [8,2],[1,2], [2,3], [1,2], [2,3], [8,2],[1,2], [2,3], 
    [1,2], [2,3], [8,2],[1,2], [2,3], [1,2], [2,3], [8,2],[1,2], [2,3], 
    [1,2], [2,3], [8,2],[1,2], [2,3], [1,2], [2,3], [8,2],[1,2], [2,3], 
    [1,2], [2,3], [8,2],[1,2], [2,3], [1,2], [2,3], [8,2],[1,2], [2,3], 
    [1,2], [2,3], [8,2],[1,2], [2,3], [1,2], [2,3], [8,2],[1,2], [2,3]
  )).toEqual([2])
})