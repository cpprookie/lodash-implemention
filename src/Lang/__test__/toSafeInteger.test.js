import toSafeInteger from '../toSafeInteger'

test('number to number', () => {
  expect(toSafeInteger(3.2)).toEqual(3)
})

test('Number.MIN_VALUE', () => {
  expect(toSafeInteger(Number.MIN_VALUE)).toEqual(0)
})

test('infinity', () => {
  expect(toSafeInteger(Infinity)).toEqual(9007199254740991)
})

test('string to number', () => {
  expect(toSafeInteger('3.2')).toEqual(3)
})
