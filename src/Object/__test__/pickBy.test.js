import pickBy from '../pickBy'
import { Foo } from './testVariable'
const object = { a: 1, b: '2', c: 3 }

test('pickBy property normally', () => {
  expect(pickBy(new Foo(), ['a', 'b'])).toEqual({ a: 1, b: 2 })
})

test('will not pickBy unexisted property ', () => {
  expect(
    pickBy(object, ['a', 'b', 'c'], (k, v) => typeof v === 'number')
  ).toEqual({ a: 1, c: 3 })
})
