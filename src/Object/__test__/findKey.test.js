import findKey from '../findKey'
import { users } from './testVariable'

test('return correct property name', () => {
  expect(findKey(users, o => o.age < 40)).toEqual('barney')
})

test('return undefined when no one property satisfy', () => {
  expect(findKey(users, o => o.age < 0)).toEqual(undefined)
})
