import reduce from '../reduce'

test('reduce test | array', () => {
  expect(reduce([1, 2], (sum, n) => sum + n, 0)).toEqual(3)
})

test('reduce test | object', () => {
  expect(
    reduce(
      { a: 1, b: 2, c: 1 },
      function(result, value, key) {
        ;(result[value] || (result[value] = [])).push(key)
        return result
      },
      {}
    )
  ).toEqual({ '1': ['a', 'c'], '2': ['b'] })
})

test('illegal params', () => {
  expect(reduce([1, 2], () => {})).toEqual(undefined)
})
