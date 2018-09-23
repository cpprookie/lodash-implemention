import toLower from '../toLower'

test('ignore space and return final words', () => {
  expect(toLower('Foo BAr')).toEqual('foo bar')
})

test('ignore dash', () => {
  expect(toLower('--foo-bar--')).toEqual('--foo-bar--')
})

test('ignore lowdash and dollar sign', () => {
  expect(toLower('-$fOO-bAr$-')).toEqual('-$foo-bar$-')
})
