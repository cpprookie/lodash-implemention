import kebabCase from '../kebabCase'

test('ignore space and return final words', () => {
  expect(kebabCase('Foo Bar')).toEqual('foo-bar')
})

test('ignore dash', () => {
  expect(kebabCase('--foo-bar--')).toEqual('foo-bar')
})

test('split camelCase', () => {
  expect(kebabCase('fooBar')).toEqual('foo-bar')
})

test('split camelCase', () => {
  expect(kebabCase('fooBar')).toEqual('foo-bar')
})

test('continuous capitalize character', () => {
  expect(kebabCase('AAA')).toEqual('aaa')
})

test('mix capitalize character and blank', () => {
  expect(kebabCase('aaA A AAA AAA')).toEqual('aa-a-a-aaa-aaa')
})
