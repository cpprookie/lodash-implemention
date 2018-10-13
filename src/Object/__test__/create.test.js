import create from '../create'

function Shape() {
  this.x = 0
  this.y = 0
}

function Circle() {
  Shape.call(this)
}

Circle.prototype = create(Shape.prototype, {
  constructor: Circle
})

var circle = new Circle()
test('should return true for instance', () => {
  expect(circle instanceof Circle).toEqual(true)
})

test('should return true for inherance', () => {
  expect(circle instanceof Shape).toEqual(true)
})
