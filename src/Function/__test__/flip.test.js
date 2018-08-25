import flip from '../flip'

test('flip test', () => {
  expect(flip((...arg) => arg)(1, 2, 3)).toEqual([3, 2, 1])
})
