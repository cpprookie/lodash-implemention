import find from '../find'
import { users, userObj } from '../variable'

test('find test | array', () => {
  expect(
    find(users, function(o) {
      return !o.active
    })
  ).toEqual({ user: 'fred', age: 87, active: false })
})

test('find test | object', () => {
  expect(
    find(userObj, function(o) {
      return !o.active
    })
  ).toEqual({ user: 'fred', age: 87, active: false })
})

test('find nothing', () => {
  expect(
    find(userObj, function(o) {
      return o.age === '23'
    })
  ).toEqual(undefined)
})
