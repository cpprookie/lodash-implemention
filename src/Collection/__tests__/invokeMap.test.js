import invokeMap from '../invokeMap'

test('invokeMap test | array', () => {
  expect(invokeMap([123, 456], String.prototype.split, '')).toEqual([
    ['1', '2', '3'],
    ['4', '5', '6']
  ])
})

test('invokeMap test | array', () => {
  expect(invokeMap({ a: 123, b: 456 }, String.prototype.split, '')).toEqual([
    ['1', '2', '3'],
    ['4', '5', '6']
  ])
})
