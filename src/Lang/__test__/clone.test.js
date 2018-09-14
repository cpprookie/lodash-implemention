import clone from '../clone'

const obj = { a: { b: 1 } }

test('should return false when compare two objects', () => {
  expect(clone(obj) === obj).toEqual(false)
})

test('should return true when compare object fields', () => {
  expect(clone(obj).a === obj.a).toEqual(true)
})
