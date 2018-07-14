const zip = require('../zip')

test('common zip case', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
    ['a', 1, true],
    ['b', 2, false]
  ])
})
// zip(['a', 'b'], [1, 2], [true, false])

test('inequal length arrays', () => {
  expect(zip(['a', 'b'], [1, 2, 3], [true, false])).toEqual([
    ['a', 1, true],
    ['b', 2, false],
    [undefined, 3, undefined]
  ])
})
