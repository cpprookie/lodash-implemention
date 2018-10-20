import set from '../set'
import { pathTest } from './testVariable'

test('handle string path', () => {
  expect(set(pathTest, 'a[0].b.c', 5)).toEqual({ a: [{ b: { c: 5 } }] })
})

test('handle array path', () => {
  expect(set(pathTest, ['a', '0', 'b', 'c'], 6)).toEqual({
    a: [{ b: { c: 6 } }]
  })
})

test('unexisted property', () => {
  expect(set(pathTest, 'b.c', 'default')).toEqual({
    a: [{ b: { c: 6 } }],
    b: {
      c: 'default'
    }
  })
})
