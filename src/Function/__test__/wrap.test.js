import wrap from '../wrap'

test('wrap test', () => {
  expect(wrap((a, b) => a + b, (func, a, b) => func(a, b))(1, 2)).toEqual(3)
})
