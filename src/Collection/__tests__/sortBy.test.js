import sortBy from '../sortBy'
import { orderByUsers, sortByUsers } from '../variable'

test('sortBy test | age', () => {
  expect(sortBy(orderByUsers, ['age'])).toEqual([
    { user: 'barney', age: 34 },
    { user: 'barney', age: 36 },
    { user: 'fred', age: 40 },
    { user: 'fred', age: 48 }
  ])
})

test('sortBy test | user', () => {
  expect(sortBy(sortByUsers, ['user'])).toEqual([
    { user: 'barney', age: 36 },
    { user: 'barney', age: 34 },
    { user: 'fred', age: 40 },
    { user: 'fred', age: 48 }
  ])
})
