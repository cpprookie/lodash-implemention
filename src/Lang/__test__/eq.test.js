import eq from '../eq'

const obj = { a: 1 },
  other = { a: 1 }

test('should return true for same object', () => {
  expect(eq(obj, obj)).toEqual(true)
})

test('should return false when compare two objects', () => {
  expect(eq(obj, other)).toEqual(false)
})
