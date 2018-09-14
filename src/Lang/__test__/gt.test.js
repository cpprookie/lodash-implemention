import gt from '../gt'

test('should return true for 1 less than 2', () => {
  expect(gt(2, 1)).toEqual(true)
})

test('should return true for "2" and "1"', () => {
  expect(gt('2', '1')).toEqual(true)
})
