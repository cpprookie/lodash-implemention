import includes from '../includes'

test('includes test | array', () => {
  expect(includes([1, 2, 3], 1)).toEqual(true)
})

test('includes test with fromIndex | array', () => {
  expect(includes([1, 2, 3], 1, 2)).toEqual(false)
})

test('includes test | object', () => {
  expect(includes({ a: 1, b: 2 }, 1)).toEqual(true)
})

test('includes test | string', () => {
  expect(includes('abcd', 'bc')).toEqual(true)
})
