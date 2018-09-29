import assign from '../assign'

test('basic case', () => {
  expect(assign({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
})

function Foo() {
  this.a = 1
}

function Bar() {
  this.c = 3
}

Foo.prototype.b = 2
Bar.prototype.d = 4

test('should only assign own enumerable properties', () => {
  expect(assign({ a: 0 }, new Foo(), new Bar())).toEqual({ a: 1, c: 3 })
})
