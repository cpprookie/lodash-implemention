import fromPairs from '../fromPairs'

test('example case', () => {
  expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 })
})

test('contain object', () => {
  expect(fromPairs([['a', 1], ['b', 2], {}])).toEqual({
    a: 1,
    b: 2,
    undefined: undefined
  })
})

test('contain simple type', () => {
  expect(fromPairs([['a', 1], ['b', 2], 'simple string'])).toEqual({
    a: 1,
    b: 2,
    undefined: undefined
  })
})
