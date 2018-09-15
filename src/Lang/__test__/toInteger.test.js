import toInteger from '../toInteger'

test('number to number', () => {
  expect(toInteger(3.2)).toEqual(3)
})

test('Number.MIN_VALUE', () => {
  expect(toInteger(Number.MIN_VALUE)).toEqual(0)
})

test('infinity', () => {
  expect(toInteger(Infinity)).toEqual(1.7976931348623157e308)
})

test('string to number', () => {
  expect(toInteger('3.2')).toEqual(3)
})
