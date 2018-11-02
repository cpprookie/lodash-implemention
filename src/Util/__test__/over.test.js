import over from '../over'

test('official simple loop', () => {
  expect(over([Math.max, Math.min])(1, 2, 3)).toEqual([3, 1])
})
