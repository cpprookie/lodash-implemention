import assignIn from '../assignIn'

test('basic case', () => {
  expect(assignIn({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
})

function Foo() {
  this.a = 1
}

function Bar() {
  this.c = 3
}

Foo.prototype.b = 2
Bar.prototype.d = 4

test('should only assignIn own enumerable properties', () => {
  expect(assignIn({ a: 0 }, new Foo(), new Bar())).toEqual({
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })
})
