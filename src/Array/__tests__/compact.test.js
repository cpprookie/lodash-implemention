const compact = require('../compact')

test('Illegal input', () => {
  expect(() => {
    compact({1: 2})
  }).toThrow()
})

test('normal case', () => {
  expect(compact([1,2,34,5,null,0,'rwer',undefined,NaN, false])).toEqual([1,2,34,5,'rwer'])
})
