const dropRight = require('../dropRight')

test('undefined index', () => {
  expect(dropRight([1,2,3])).toEqual([1,2,3])
})

test('small index', () => {
  expect(dropRight([1,2,3], 1)).toEqual([1,2])
})

test('index out of range', () => {
  expect(dropRight([1,2,3],5)).toEqual([])
})