import ary from '../ary'

test('ary test', () => {
  expect(ary(2, (...arg) => arg)(1, 2, 3, 4, 5)).toEqual([1, 2])
})
