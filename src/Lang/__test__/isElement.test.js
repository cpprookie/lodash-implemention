import isElement from '../isElement'

test('should return false for html tag', () => {
  expect(isElement('<body>')).toEqual(false)
})
