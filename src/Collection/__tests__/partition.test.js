import partition from '../partition'
import { orderByUsers } from '../variable'

test('partition test | age', () => {
  expect(partition(orderByUsers, u => u.age < 40)).toEqual([
    [{ user: 'barney', age: 34 }, { user: 'barney', age: 36 }],
    [{ user: 'fred', age: 48 }, { user: 'fred', age: 40 }]
  ])
})
