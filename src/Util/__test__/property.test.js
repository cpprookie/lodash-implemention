import property from '../property'

const objects = [{ a: { b: 2 } }, { a: { b: 1 } }]

test('return object value at path', () => {
  expect(objects.map(property('a.b'))).toEqual([2, 1])
})
