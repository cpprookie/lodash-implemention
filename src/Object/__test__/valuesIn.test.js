import valuesIn from '../valuesIn'
import { Foo1 as Foo } from './testVariable'

test('return array consists of object valuesIn', () => {
  expect(valuesIn(new Foo())).toEqual([1, 2, 3])
})
