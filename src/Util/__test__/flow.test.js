import flow from '../flow'

const add = (a, b) => a + b
const square = n => n * n

test('should return 81 after operation', () => {
  expect(
    flow(
      add,
      square,
      square
    )(1, 2)
  ).toEqual(81)
})
