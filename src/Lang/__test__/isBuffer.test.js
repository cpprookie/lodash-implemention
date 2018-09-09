import isBuffer from '../isBuffer'

test('should return false for arrayBuffer', () => {
  expect(isBuffer(new ArrayBuffer(2))).toEqual(false)
})

test('should return false for arrayBuffer', () => {
  expect(isBuffer(new Buffer(2))).toEqual(true)
})
