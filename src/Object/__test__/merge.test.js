import merge from '../merge'

const object = {
  a: [{ b: 2 }, { d: 4 }]
}

const other = {
  a: [{ c: 3 }, { e: 5 }]
}

test('recursively  merge', () => {
  expect(merge(object, other)).toEqual({ a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] })
})
