import valuesIn from '../valuesIn'
import { Foo } from '../testUtil'

test('return array consists of object valuesIn', () => {
  expect(valuesIn(new Foo())).toEqual([1, 2, 3])
})
