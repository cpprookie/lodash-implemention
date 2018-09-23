import capitalize from '../capitalize'

test('Returns the capitalized string', () => {
  expect(capitalize('FRED')).toEqual('Fred')
})
