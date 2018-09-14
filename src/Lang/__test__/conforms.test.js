import conformsTo from '../conformsTo'

const obj = { b: 2 }

test('should return false when object have no property', () => {
  expect(conformsTo(obj, { a: n => n > 0 })).toEqual(false)
})

test('should return false when source gets function property', () => {
  expect(conformsTo(obj, { a: 1 })).toEqual(false)
})

test('should return false when conformsTo over', () => {
  expect(conformsTo(obj, { b: n => n > 1 })).toEqual(true)
})
