import assignIn from '../assignIn'
import { Foo, Bar } from './testVariable'

test('basic case', () => {
  expect(assignIn({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
})

test('should only assignIn own enumerable properties', () => {
  expect(assignIn({ a: 0 }, new Foo(), new Bar())).toEqual({
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })
})
