import update from '../update'
import { pathTest } from './testVariable'

test('default updater will not change object', () => {
  expect(update(pathTest, 'a[0].b.c')).toEqual({
    a: [{ b: { c: 3 } }]
  })
})

test('updater update object value', () => {
  expect(update(pathTest, 'a[0].b.c', a => a * a)).toEqual({
    a: [{ b: { c: 9 } }]
  })
})
