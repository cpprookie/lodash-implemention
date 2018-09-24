import pad from '../pad'

test('default pad chars', () => {
  expect(pad('abc', 8)).toEqual('  abc   ')
})

test('chars cannot divide', () => {
  expect(pad('abc', 8, '_-')).toEqual('_-abc_-_')
})

test('do not need pad', () => {
  expect(pad('abc', 3)).toEqual('abc')
})
