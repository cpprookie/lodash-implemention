import reject from '../reject'
import { orderByUsers, orderByUsersObj } from '../variable'

test('reject test | array', () => {
  expect(reject(orderByUsers, u => u.age > 35)).toEqual([
    { user: 'barney', age: 34 }
  ])
})

test('reject test | object', () => {
  expect(reject(orderByUsersObj, u => u.age > 35)).toEqual([
    { user: 'barney', age: 34 }
  ])
})
