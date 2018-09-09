import isMap from '../isMap'

test('should return false for weakmap', () => {
  expect(isMap(new WeakMap())).toEqual(false)
})

test('should return true for map', () => {
  expect(isMap(new Map())).toEqual(true)
})
