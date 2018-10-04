import findLastKey from '../findLastKey'

const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true }
}

test('return correct property name', () => {
  expect(findLastKey(users, o => o.age < 40)).toEqual('pebbles')
})

test('return undefined when no one property satisfy', () => {
  expect(findLastKey(users, o => o.age < 0)).toEqual(undefined)
})
