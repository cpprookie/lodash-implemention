import assign from '../assign'
import { Foo, Bar } from './testVariable'

test('basic case', () => {
  expect(assign({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
})

test('should only assign own enumerable properties', () => {
  expect(assign({ a: 0 }, new Foo(), new Bar())).toEqual({ a: 1, c: 3 })
})
