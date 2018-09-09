import isSet from '../isSet'

test('should return false for weakSet', () => {
  expect(isSet(new WeakSet())).toEqual(false)
})

test('should return true for set', () => {
  expect(isSet(new Set())).toEqual(true)
})
