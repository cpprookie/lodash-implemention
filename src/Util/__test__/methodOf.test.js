import methodOf from '../methodOf'

const obj = { a: { b: () => 2 } }

test('execute object methodOf', () => {
  expect(methodOf(obj)('a.b')).toEqual(2)
})

test('return undefined when no property at the path', () => {
  expect(methodOf(obj)('a.c')).toEqual(undefined)
})
