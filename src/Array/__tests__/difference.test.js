const difference = require('../difference')

test('same length case', () => {
  expect(difference([1, 2, 3], [1, 4, 3])).toEqual([2])
})

test('different length case', () => {
  expect(difference([1, 2, 3, 4, 5], [1, 2, 2, 2])).toEqual([3, 4, 5])
})
