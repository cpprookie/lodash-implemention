import curry from '../curry'

const fun = (a, b, c) => [a, b, c]

test('curry test | once at a time', () => {
  expect(curry(fun)(1)(2)(3)).toEqual([1, 2, 3])
})

test('curry test | more arg than init length', () => {
  expect(curry(fun)(1, 2)(3, 4)).toEqual([1, 2, 3])
})
