import cloneWith from '../cloneWith'
const obj = { a: 1 }

test('should add one for attribute a ', () => {
  expect(cloneWith(obj, a => 1 + a).a - obj.a).toEqual(1)
})
