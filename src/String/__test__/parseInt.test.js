import myParseInt from '../parseInt'

test('remove useless 0 with default radix', () => {
  expect(myParseInt('08')).toEqual(8)
})

test('pass negative string with default radix', () => {
  expect(myParseInt('-08')).toEqual(-8)
})

test('return NaN when pass undefined', () => {
  expect(myParseInt(undefined)).toEqual(NaN)
})

test('return number under hexadecimal', () => {
  expect(myParseInt('0F', 16)).toEqual(15)
})
