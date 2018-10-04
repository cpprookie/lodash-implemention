import findKey from '../findKey'

const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true }
}

test('return correct property name', () => {
  expect(findKey(users, o => o.age < 40)).toEqual('barney')
})

test('return undefined when no one property satisfy', () => {
  expect(findKey(users, o => o.age < 0)).toEqual(undefined)
})
