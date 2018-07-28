import uniq from '../uniq'

test('common case', () => {
  expect(uniq([2, 1, 2])).toEqual([2, 1])
})
