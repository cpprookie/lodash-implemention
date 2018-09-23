import lowerCase from '../lowerCase'

test('ignore space and return final words', () => {
  expect(lowerCase('Foo BAr')).toEqual('foo bar')
})

test('ignore dash', () => {
  expect(lowerCase('--foo-bar--')).toEqual('foo bar')
})

test('ignore lowdash and dollar sign', () => {
  expect(lowerCase('-$foo-bar$-')).toEqual('foo bar')
})
