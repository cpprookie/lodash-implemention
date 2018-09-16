import clamp from '../clamp'

test('should return -5 when pass -10 -5 5', () => {
  expect(clamp(-10, -5, 5)).toEqual(-5)
})

test('should return 5 when pass 10 -5 5', () => {
  expect(clamp(10, -5, 5)).toEqual(5)
})

test('should return 3 when pass 3 -5 5', () => {
  expect(clamp(3, -5, 5)).toEqual(3)
})

test('should return 3 when pass 3 5 -5', () => {
  expect(clamp(3, -5, 5)).toEqual(3)
})
