import padStart from '../padStart'

test('default pad chars', () => {
  expect(padStart('abc', 6)).toEqual('   abc')
})

test('chars cannot divide', () => {
  expect(padStart('abc', 6, '_-')).toEqual('_-_abc')
})

test('do not need pad', () => {
  expect(padStart('abc', 3)).toEqual('abc')
})
