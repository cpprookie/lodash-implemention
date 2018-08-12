import keyBy from '../keyBy'
import { users, userObj } from '../variable'

test('keyBy test | array', () => {
  expect(keyBy(users, o => String.fromCharCode(o.age))).toEqual({
    P: { user: 'barney', age: 80, active: true },
    W: { user: 'fred', age: 87, active: false }
  })
})

test('keyBy test | object', () => {
  expect(keyBy(userObj, o => String.fromCharCode(o.age))).toEqual({
    P: { user: 'barney', age: 80, active: true },
    W: { user: 'fred', age: 87, active: false }
  })
})
