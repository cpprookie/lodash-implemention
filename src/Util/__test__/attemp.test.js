import attempt from '../attempt'

test('return function returns', () => {
  expect(attempt(a => a, 1)).toEqual(1)
})

test('return function returns', () => {
  expect(
    attempt(a => {
      throw new Error(a)
    }, 1)
  ).toEqual(new Error(1))
})
