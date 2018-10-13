import toPairsIn from '../toPairsIn'

function Test() {
  this.a = 1
  this.b = 2
}
Test.prototype.c = 3

test('return key-value pairs', () => {
  expect(toPairsIn(new Test())).toEqual([['a', 1], ['b', 2], ['c', 3]])
})
