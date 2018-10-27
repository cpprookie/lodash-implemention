import transform from '../transform'

test('break loop when itratee return false', () => {
  expect(
    transform(
      [2, 3, 4],
      (result, n) => {
        result.push((n *= n))
        return n % 2 == 0
      },
      []
    )
  ).toEqual([4, 9])
})

test('iteratee return null', () => {
  expect(
    transform(
      { a: 1, b: 2, c: 1 },
      function(result, value, key) {
        ;(result[value] || (result[value] = [])).push(key)
      },
      {}
    )
  ).toEqual({ '1': ['a', 'c'], '2': ['b'] })
})
