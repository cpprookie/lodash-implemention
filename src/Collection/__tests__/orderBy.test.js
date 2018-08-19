import orderBy from '../orderBy'
import { orderByUsers } from '../variable'

test('orderBy test', () => {
  expect(orderBy(orderByUsers, ['user', 'age'], ['asc', 'desc'])).toEqual([
    { user: 'barney', age: 36 },
    { user: 'barney', age: 34 },
    { user: 'fred', age: 48 },
    { user: 'fred', age: 40 }
  ])
})
