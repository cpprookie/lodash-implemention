import trim from '../trim'

test('trim word start blank', () => {
  expect(trim('   abc   ')).toEqual('abc')
})

test('trim word start with given chars', () => {
  expect(trim('-_-abc--', '-_-')).toEqual('abc')
})
