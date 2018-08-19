import sample from '../sample'

test('sample test', () => {
  expect([1, 2, 3, 4]).toContain(sample([1, 2, 3, 4]))
})
