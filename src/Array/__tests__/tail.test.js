const tail = require('../tail')

test('empty arary', () => {
  expect(tail()).toEqual([])
})

test('one lenth array', () => {
  expect(tail([1])).toEqual([])
})

test('normal case', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3])
})
