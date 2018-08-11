import filter from '../filter'

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false }
]

const userObj = {
  0: { user: 'barney', age: 36, active: true },
  1: { user: 'fred', age: 40, active: false }
}

test('filter test | array', () => {
  expect(
    filter(users, function(o) {
      return !o.active
    })
  ).toEqual([{ user: 'fred', age: 40, active: false }])
})

test('filter test | object', () => {
  expect(
    filter(users, function(o) {
      return !o.active
    })
  ).toEqual([{ user: 'fred', age: 40, active: false }])
})
