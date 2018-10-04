import keysIn from '../keysIn'
import { Foo } from '../testUtil'

test('should return array consists of object property', () => {
  expect(keysIn(new Foo())).toEqual(['a', 'b', 'c'])
})
