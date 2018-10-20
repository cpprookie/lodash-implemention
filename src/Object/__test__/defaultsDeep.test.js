import defaultsDeep from '../defaultsDeep'
const obj1 = {
  a: { b: 2 }
}
const obj2 = {
  a: { b: 1, c: 3 }
}

const obj3 = {
  a: { b: 1, c: 5, d: 10 },
  m: 12
}
test('defaults two objects', () => {
  expect(defaultsDeep(obj1, obj2)).toEqual({
    a: {
      b: 2,
      c: 3
    }
  })
})

test('defaults multiple objects', () => {
  expect(defaultsDeep(obj1, obj2, obj3)).toEqual({
    a: {
      b: 2,
      c: 3,
      d: 10
    },
    m: 12
  })
})
