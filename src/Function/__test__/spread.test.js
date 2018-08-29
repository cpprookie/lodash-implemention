import spread from '../spread'

test('spread test', () => {
  expect(spread((a, b) => a + b)([1, 2])).toEqual(3)
})
