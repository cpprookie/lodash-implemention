import forIn from '../forIn'

function Foo() {
  this.a = 1
  this.b = 2
}

Foo.prototype.c = 3
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
