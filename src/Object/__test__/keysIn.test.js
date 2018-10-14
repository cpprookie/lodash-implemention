import keysIn from '../keysIn'
import { Foo1 as Foo } from './testVariable'

test('should return array consists of object property', () => {
  expect(keysIn(new Foo())).toEqual(['a', 'b', 'c'])
})
