import assignWith from '../assignWith'

test('update values that first object does not contain', () => {
  expect(
    assignWith(
      { a: 1 },
      { b: 2 },
      { a: 3 },
      (a, b) => (a === undefined ? b : a)
    )
  ).toEqual({ a: 1, b: 2 })
})
