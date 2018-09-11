import isSymbol from '../isSymbol'

test('should return true for Symbol.iterator', () => {
  expect(isSymbol(Symbol.iterator)).toEqual(true)
})

test('should return false for string', () => {
  expect(isSymbol(2)).toEqual(false)
})
