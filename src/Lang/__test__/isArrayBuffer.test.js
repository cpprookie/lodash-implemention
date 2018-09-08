import isArryBuffer from '../isArrayBuffer'

test('should return false when pass an array', () => {
  expect(isArryBuffer([1, 2])).toEqual(false)
})

test('shuold return true when pass an arrayBuffer', () => {
  expect(isArryBuffer(new ArrayBuffer(2))).toEqual(true)
})
