import invert from '../invert'

test('compose and return new Object', () => {
  expect(invert({ a: 1, b: 2, c: 1 })).toEqual({ '1': 'c', '2': 'b' })
})
