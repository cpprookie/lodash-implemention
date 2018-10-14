import values from '../values'
import { Foo1 as Foo } from './testVariable'

test('return array consists of object values', () => {
  expect(values(new Foo())).toEqual([1, 2])
})
