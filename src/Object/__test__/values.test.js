import values from '../values'
import { Foo } from '../testUtil'

test('return array consists of object values', () => {
  expect(values(new Foo())).toEqual([1, 2])
})
