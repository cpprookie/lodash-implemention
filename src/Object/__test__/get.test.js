import get from '../get'
import { pathTest } from './testVariable'

test('handle string path', () => {
  expect(get(pathTest, 'a[0].b.c')).toEqual(3)
})

test('handle array path', () => {
  expect(get(pathTest, ['a', '0', 'b', 'c'])).toEqual(3)
})

test('unexisted property', () => {
  expect(get(pathTest, 'a.b.c', 'default')).toEqual('default')
})
