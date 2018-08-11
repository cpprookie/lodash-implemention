import size from '../size'

test('size test | array', () => {
  expect(size([1, 2, 3])).toEqual(3)
})

test('size test | object', () => {
  expect(size({ a: 1, b: 2 })).toEqual(2)
})

test('size test | string', () => {
  expect(size('hello')).toEqual(5)
})

test('size test | undefined', () => {
  expect(size(undefined)).toEqual(0)
})
