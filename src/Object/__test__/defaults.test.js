import defaults from '../defaults'
import { Foo, Bar } from './testVariable'

test('basic case', () => {
  expect(defaults({ a: 1 }, { a: 2 })).toEqual({ a: 1 })
})

test('should ignore property which target already has', () => {
  expect(defaults({ a: 0 }, new Foo(), new Bar())).toEqual({
    a: 0,
    b: 2,
    c: 3,
    d: 4
  })
})
