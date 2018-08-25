import curryRight from '../curryRight'

const fun = (a, b, c) => [a, b, c]

test('curryRight test | once at a time', () => {
  expect(curryRight(fun)(3)(2)(1)).toEqual([1, 2, 3])
})

test('curryRight test | more arg than init length', () => {
  expect(curryRight(fun)(1, 2)(3, 4)).toEqual([3, 4, 1])
})

test('curryRight test | call once', () => {
  expect(curryRight(fun)(1, 2, 3)).toEqual([1, 2, 3])
})
