import has from '../has'
import { pathTest, Foo1 } from './testVariable'

test('basic path test', () => {
  expect(has(pathTest, 'a[0].b')).toEqual(true)
})

test('basic path test unexisted route', () => {
  expect(has(pathTest, 'a[0].c')).toEqual(false)
})

test('inherited property should return false', () => {
  expect(has(new Foo1(), 'c')).toEqual(false)
})
