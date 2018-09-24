import repeat from '../repeat'

test('repeat * for 3 times', () => {
  expect(repeat('*', 3)).toEqual('***')
})

test('default times', () => {
  expect(repeat('abc')).toEqual('')
})
