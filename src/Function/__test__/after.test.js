import after from '../after'

test('after test', () => {
  expect([1, 2, 3, 4].map(after(2, a => a))).toEqual([
    undefined,
    undefined,
    3,
    4
  ])
})
