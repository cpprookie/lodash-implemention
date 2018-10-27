import bindAll from '../bindAll'

const obj1 = {
  a: 1,
  b: function() {
    return this.a
  }
}

const obj2 = {
  a: 2,
  b: obj1.b
}

test('should return obj2.a after bind', () => {
  expect(
    (function() {
      bindAll(obj2, 'b')
      return obj2.b()
    })()
  ).toEqual(2)
})
