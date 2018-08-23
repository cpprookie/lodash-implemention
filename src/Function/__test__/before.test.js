import before from '../before'

test('before test', () => {
  expect([1, 2, 3, 4].map(before(2, a => a))).toEqual([
    1,
    2,
    undefined,
    undefined
  ])
})
