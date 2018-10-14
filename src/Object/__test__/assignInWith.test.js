import assignInWith from '../assignInWith'
import { Foo, Bar } from './testVariable'

test('update values that first object does not contain', () => {
  expect(
    assignInWith(
      { a: 0 },
      new Foo(),
      new Bar(),
      (a, b) => (a === undefined ? b : a)
    )
  ).toEqual({ a: 0, b: 2, c: 3, d: 4 })
})
