import toUpper from '../toUpper'

test('ignore space and return final words', () => {
  expect(toUpper('foo BAr')).toEqual('FOO BAR')
})

test('ignore dash', () => {
  expect(toUpper('--foo-bar--')).toEqual('--FOO-BAR--')
})

test('ignore lowdash and dollar sign', () => {
  expect(toUpper('-$fOO-bAr$-')).toEqual('-$FOO-BAR$-')
})
