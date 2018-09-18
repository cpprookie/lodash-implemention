import add from '../add'

test('should return 4 for null and 4', () => {
  expect(add(4, null)).toEqual(4)
})

test('should return Infinity for Number.MAX_VALUE', () => {
  expect(add(Number.MAX_VALUE, Number.MAX_VALUE)).toEqual(Infinity)
})

test('should return 10 for 4 plus 6', () => {
  expect(add(4, 6)).toEqual(10)
})
