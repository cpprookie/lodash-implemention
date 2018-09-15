import toNumber from '../toNumber'

test('number to number', () => {
  expect(toNumber(3.2)).toEqual(3.2)
})

test('Number.MIN_VALUE', () => {
  expect(toNumber(Number.MIN_VALUE)).toEqual(5e-324)
})

test('infinity', () => {
  expect(toNumber(Infinity)).toEqual(Infinity)
})

test('string to number', () => {
  expect(toNumber('3.2')).toEqual(3.2)
})
