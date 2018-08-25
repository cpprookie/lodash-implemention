import reArg from '../reArg'

test('reArg test | with reOrder', () => {
  expect(reArg((...arg) => arg, [2, 0, 1])(1, 2, 3)).toEqual([2, 3, 1])
})

test('reArg test | no reOrder', () => {
  expect(reArg((...arg) => arg)(1, 2, 3)).toEqual([1, 2, 3])
})
