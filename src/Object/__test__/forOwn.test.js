import forOwn from '../forOwn'
import { Foo1 as Foo } from './testVariable'

const foo = new Foo()
const newFoo = new Foo()

test('double object attribute', () => {
  expect(
    (function() {
      forOwn(foo, (val, key, obj) => {
        obj[key] = 2 * val
      })
      return foo
    })()
  ).toEqual({
    a: 2,
    b: 4
  })
})

test('break when iteratee return false', () => {
  expect(
    (function() {
      forOwn(newFoo, (val, key, obj) => {
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
