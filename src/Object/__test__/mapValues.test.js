import mapValues from '../mapValues'

const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
}

test('change object keys', () => {
  expect(mapValues(users, o => o.age)).toEqual({ fred: 40, pebbles: 1 })
})
