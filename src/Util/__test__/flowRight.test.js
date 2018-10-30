import flowRight from '../flowRight'

const add = (a, b) => a + b
const square = n => n * n

test('should return 81 after operation', () => {
  expect(
    flowRight(
      square,
      square,
      add
    )(1, 2)
  ).toEqual(81)
})
