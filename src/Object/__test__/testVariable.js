function Foo() {
  this.a = 1
}

function Bar() {
  this.c = 3
}

Foo.prototype.b = 2
Bar.prototype.d = 4

const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true }
}

function Foo1() {
  this.a = 1
  this.b = 2
}

Foo1.prototype.c = 3

export { Foo, Bar, users, Foo1 }
