import isWeakMap from '../isWeakMap'

test('should return true for weakmap', () => {
  expect(isWeakMap(new WeakMap())).toEqual(true)
})

test('should return false for map', () => {
  expect(isWeakMap(new Map())).toEqual(false)
})
