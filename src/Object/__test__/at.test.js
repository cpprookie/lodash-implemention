import at from '../at'

const obj = {
  a: [
    {
      b: {
        c: 1
      }
    },
    3
  ],
  m: {
    n: 2
  },
  g: null
}

test('pass a string path ', () => {
  expect(at(obj, 'm.n')).toEqual([2])
})

test('pass a path array ', () => {
  expect(at(obj, ['a[0].b.c', 'a[1]'])).toEqual([1, 3])
})

test('should recieve undefined for illegal path', () => {
  expect(at(obj, 'a].b.c')).toEqual([undefined])
})

test('should break when get nil property value', () => {
  expect(at(obj, 'g.d.c.sop')).toEqual([null])
})
