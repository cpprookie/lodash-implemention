import pick from '../pick'
import { Foo } from './testVariable'

test('pick property normally', () => {
  expect(pick(new Foo(), ['a', 'b'])).toEqual({ a: 1, b: 2 })
})

test('will not pick unexisted property ', () => {
  expect(pick(new Foo(), ['a', 'd'])).toEqual({ a: 1 })
})
