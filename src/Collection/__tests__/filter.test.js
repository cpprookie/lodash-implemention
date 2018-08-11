import filter from '../filter'
import { users, userObj } from '../variable'

test('filter test | array', () => {
  expect(
    filter(users, function(o) {
      return !o.active
    })
  ).toEqual([{ user: 'fred', age: 40, active: false }])
})

test('filter test | object', () => {
  expect(
    filter(userObj, function(o) {
      return !o.active
    })
  ).toEqual([{ user: 'fred', age: 40, active: false }])
})
