import isPlainObject from '../isPlainObject'

function Foo() {
  this.a = 1
}

test('should return false for constructor instance', () => {
  expect(isPlainObject(new Foo())).toEqual(false)
})

test('should return false for array', () => {
  expect(isPlainObject([1])).toEqual(false)
})

test('should return true for Object instance', () => {
  expect(isPlainObject({ a: 1 })).toEqual(true)
})

test('should return false for Object.create(null)', () => {
  expect(isPlainObject(Object.create(null))).toEqual(true)
})
