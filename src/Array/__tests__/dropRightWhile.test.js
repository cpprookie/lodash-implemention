import dropRightWhile from '../dropRightWhile'
import { users, users2 } from '../testVariables'

test('all pass', () => {
  expect(
    dropRightWhile(users2, function(o) {
      return !o.active
    })
  ).toEqual([
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true }
  ])
})

test('drop falsy items', () => {
  expect(
    dropRightWhile(users, function(o) {
      return !o.active
    })
  ).toEqual([{ user: 'barney', active: true }])
})

test('illegal predicate', () => {
  expect(() => {
    dropRightWhile(users, 'a')
  }).toThrowError()
})
