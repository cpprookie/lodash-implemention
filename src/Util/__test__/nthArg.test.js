import nthArg from '../nthArg'

test('return first param when pass index 0', () => {
  expect(nthArg(0)(1, 2)).toEqual(1)
})

test('return nth param when index is positive', () => {
  expect(nthArg(2)(1, 2, 3)).toEqual(3)
})

test('return nth argument from end', () => {
  expect(nthArg(-2)(1, 2, 3)).toEqual(2)
})
