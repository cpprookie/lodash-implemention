import hasIn from '../hasIn'

import { pathTest, Foo1 } from './testVariable'

test('basic path test', () => {
  expect(hasIn(pathTest, 'a[0].b')).toEqual(true)
})

test('basic path test unexisted route', () => {
  expect(hasIn(pathTest, 'a[0].c')).toEqual(false)
})

test('inherited property should return false', () => {
  expect(hasIn(new Foo1(), 'c')).toEqual(true)
})
