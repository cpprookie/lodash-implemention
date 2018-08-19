const users = [
  { user: 'barney', age: 80, active: true },
  { user: 'fred', age: 87, active: false }
]

const userObj = {
  0: { user: 'barney', age: 80, active: true },
  1: { user: 'fred', age: 87, active: false }
}

const orderByUsers = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 }
]

const orderByUsersObj = {
  0: { user: 'fred', age: 48 },
  1: { user: 'barney', age: 34 },
  2: { user: 'fred', age: 40 },
  3: { user: 'barney', age: 36 }
}

const sortByUsers = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 }
]
export { users, userObj, orderByUsers, orderByUsersObj, sortByUsers }
