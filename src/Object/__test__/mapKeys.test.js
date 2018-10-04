import mapKeys from '../mapKeys'

test('change object keys', () => {
  expect(mapKeys({ a: 1, b: 2 }, (v, k) => k + v)).toEqual({ a1: 1, b2: 2 })
})
