import defaultTo from '../defaultTo'

test('return val', () => {
  expect(defaultTo(3, 10)).toEqual(3)
})

test('return defaultVal', () => {
  expect(defaultTo(null, 10)).toEqual(10)
})
