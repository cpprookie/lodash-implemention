import toFinite from '../toFinite'

test('number to number', () => {
  expect(toFinite(3.2)).toEqual(3.2)
})

test('Number.MIN_VALUE', () => {
  expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324)
})

test('infinity', () => {
  expect(toFinite(Infinity)).toEqual(1.7976931348623157e308)
})

test('string to number', () => {
  expect(toFinite('3.2')).toEqual(3.2)
})

test('null to 0', () => {
  expect(toFinite(null)).toEqual(0)
})
