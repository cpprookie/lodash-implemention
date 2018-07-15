const nth = require('../nth')
const array = [1, 2, 3]
test('common case', () => {
  expect(nth(array, 1)).toEqual(2)
})

test('beyond length', () => {
  expect(nth(array, 4)).toEqual(undefined)
})

test('minus index', () => {
  expect(nth(array, -2)).toEqual(2)
})

test('beyond minux index', () => {
  expect(nth(array, -5)).toEqual(undefined)
})
