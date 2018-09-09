import isWeakSet from '../isWeakSet'

test('should return true for weakSet', () => {
  expect(isWeakSet(new WeakSet())).toEqual(true)
})

test('should return true for set', () => {
  expect(isWeakSet(new Set())).toEqual(false)
})
