import rest from '../rest'

test('rest test', () => {
  expect(rest((a, b) => b)(1, 2, 3, 4)).toEqual([2, 3, 4])
})
