import assignInWith from '../assignInWith'

function Foo() {
  this.a = 4
}

Foo.prototype.b = 2

function Bar() {
  this.c = 3
}

Bar.prototype.a = 3

test('update values that first object does not contain', () => {
  expect(
    assignInWith(
      { a: 1 },
      new Foo(),
      new Bar(),
      (a, b) => (a === undefined ? b : a)
    )
  ).toEqual({ a: 1, b: 2, c: 3 })
})
