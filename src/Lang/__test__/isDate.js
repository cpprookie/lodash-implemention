import isDate from '../isDate'

test('should return false for string', () => {
  expect(isDate('Mon April 23 2012')).toEqual(false)
})

test('should return true for date', () => {
  expect(isDate(new Date())).toEqual(true)
})
