import isRegExp from '../isRegExp'

test('should return false for string', () => {
  expect(isRegExp('/asfd/')).toEqual(false)
})

test('should return true for regexp', () => {
  expect(isRegExp(/abc/)).toEqual(true)
})
