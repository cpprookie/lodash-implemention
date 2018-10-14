import findLastKey from '../findLastKey'
import { users } from './testVariable'

test('return correct property name', () => {
  expect(findLastKey(users, o => o.age < 40)).toEqual('pebbles')
})

test('return undefined when no one property satisfy', () => {
  expect(findLastKey(users, o => o.age < 0)).toEqual(undefined)
})
