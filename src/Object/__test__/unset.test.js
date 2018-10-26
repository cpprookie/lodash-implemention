import unset from '../unset'
import { pathTest } from './testVariable'

test('should return true for deleted property', () => {
  expect(
    (function() {
      unset(pathTest, 'a[0].b.c')
      return pathTest
    })()
  ).toEqual({
    a: [{ b: {} }]
  })
})
