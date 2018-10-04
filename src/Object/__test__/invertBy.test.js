import invertBy from '../invertBy'
const object = { a: 1, b: 2, c: 1 }

test('return new inverted object', () => {
  expect(invertBy(object)).toEqual({ '1': ['a', 'c'], '2': ['b'] })
})

test('concat group before value', () => {
  expect(invertBy(object, k => 'group' + k)).toEqual({
    group1: ['a', 'c'],
    group2: ['b']
  })
})
