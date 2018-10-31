import identity from '../identity'

test('return undefined for empty argument', () => {
  expect(identity()).toEqual(undefined)
})

test('return first param', () => {
  expect(identity(1, 2, 3)).toEqual(1)
})
