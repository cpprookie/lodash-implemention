import unary from '../unary'

test('unary test', () => {
  expect(unary((...arg) => arg)(1, 2, 3)).toEqual([1])
})
