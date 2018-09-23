import upperCase from '../upperCase'

test('ignore space and return final words', () => {
  expect(upperCase('Foo BAr')).toEqual('FOO BAR')
})

test('ignore dash', () => {
  expect(upperCase('--foo-bar--')).toEqual('FOO BAR')
})

test('ignore lowdash and dollar sign', () => {
  expect(upperCase('-$foo-bar$-')).toEqual('FOO BAR')
})
