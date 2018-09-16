import inRange from '../inRange'

test('should return true', () => {
  expect(inRange(3, 2, 4)).toEqual(true)
})

test('should return true', () => {
  expect(inRange(4, 8)).toEqual(true)
})

test('should return false', () => {
  expect(inRange(4, 2)).toEqual(false)
})

test('should return false', () => {
  expect(inRange(2, 2)).toEqual(false)
})

test('should return true', () => {
  expect(inRange(1.2, 2)).toEqual(true)
})

test('should return true', () => {
  expect(inRange(-3, -2, -6)).toEqual(true)
})
