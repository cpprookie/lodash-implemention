import forIn from '../forIn'
import { Foo1 as Foo } from './testVariable'

const foo = new Foo()
const newFoo = new Foo()

test('double object attribute', () => {
  expect(
    (function() {
      forIn(foo, (val, key, obj) => {
        obj[key] = 2 * val
      })
      return foo
    })()
  ).toEqual({
    a: 2,
    b: 4,
    c: 6
  })
})

test('break when iteratee return false', () => {
  expect(
    (function() {
      forIn(newFoo, (val, key, obj) => {
        if (val === 2) return false
        obj[key] = 2 * val
      })
      return newFoo
    })()
  ).toEqual({
    a: 2,
    b: 2
  })
})
