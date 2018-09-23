import camelCase from '../camelCase'

test('ignore space and return final words', () => {
  expect(camelCase('Foo BAr')).toEqual('fooBar')
})

test('ignore dash', () => {
  expect(camelCase('--foo-bar--')).toEqual('fooBar')
})

test('ignore lowdash and dollar sign', () => {
  expect(camelCase('-$foo-bar$-')).toEqual('fooBar')
})
