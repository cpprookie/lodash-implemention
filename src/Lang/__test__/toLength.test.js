import toLength from '../toLength'

test('number to number', () => {
  expect(toLength(3.2)).toEqual(3)
})

test('Number.MIN_VALUE', () => {
  expect(toLength(Number.MIN_VALUE)).toEqual(0)
})

test('infinity', () => {
  expect(toLength(Infinity)).toEqual(4294967295)
})

test('string to number', () => {
  expect(toLength('3.2')).toEqual(3)
})
