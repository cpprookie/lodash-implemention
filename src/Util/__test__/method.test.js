import method from '../method'

const obj = { a: { b: () => 2 } }

test('execute object method', () => {
  expect(method('a.b')(obj)).toEqual(2)
})

test('return undefined when no property at the path', () => {
  expect(method('a.c')(obj)).toEqual(undefined)
})
