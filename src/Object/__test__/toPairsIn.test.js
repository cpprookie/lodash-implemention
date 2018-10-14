import toPairsIn from '../toPairsIn'
import { Foo1 as Test } from './testVariable'

test('return key-value pairs', () => {
  expect(toPairsIn(new Test())).toEqual([['a', 1], ['b', 2], ['c', 3]])
})
