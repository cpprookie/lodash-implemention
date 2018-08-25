import overArgs from '../overArgs'

test('overArgs test | equal length', () => {
  expect(overArgs((...args) => args, a => a * a, b => b * b * b)(2, 3)).toEqual(
    [4, 27]
  )
})

test('overArgs test | less argOperator', () => {
  expect(overArgs((...args) => args, a => a * a)(2, 3)).toEqual([4, 3])
})
