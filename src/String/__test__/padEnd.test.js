import padEnd from '../padEnd'

test('default pad chars', () => {
  expect(padEnd('abc', 6)).toEqual('abc   ')
})

test('chars cannot divide', () => {
  expect(padEnd('abc', 6, '_-')).toEqual('abc_-_')
})

test('do not need pad', () => {
  expect(padEnd('abc', 3)).toEqual('abc')
})
