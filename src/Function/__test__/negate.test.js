import negate from '../negate'

test('negate test', () => {
  expect([1, 2, 3, 4].filter(negate(a => a % 2 !== 0))).toEqual([1, 3])
})
