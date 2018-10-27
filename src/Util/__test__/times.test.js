import times from '../times'

test('iteratee take index as param', () => {
  expect(times(3, String)).toEqual(['0', '1', '2'])
})
