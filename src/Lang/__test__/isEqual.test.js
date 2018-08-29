import isEqual from '../isEqual'

test('isEqual test | number', () => {
  expect(isEqual(1, -1)).toEqual(false)
})

test('isEqual test | string', () => {
  expect(isEqual('a', 'abc')).toEqual(false)
})

test('isEqual test | array', () => {
  expect(isEqual([1, 2, 3], [1, 2, 3])).toEqual(true)
})

test('isEqual test | simple object', () => {
  expect(isEqual({ a: 1 }, { a: 1 })).toEqual(true)
})

test('isEqual test | deep object true', () => {
  expect(isEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } })).toEqual(true)
})

test('isEqual test | deep object false', () => {
  expect(
    isEqual({ a: { b: { c: 1, d: 2 } } }, { a: { b: { c: 1, d: 3, n: 5 } } })
  ).toEqual(false)
})
