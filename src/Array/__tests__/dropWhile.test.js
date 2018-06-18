const dropWhile = require('../dropWhile')

const { users, users2 } = require('../testVariables')

test('all pass', () => {
  expect(dropWhile(users, function(o) { return !o.active; })).toEqual([
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ])
})

test('drop falsy items', () => {
  expect(dropWhile(users2, function(o) { return !o.active; })).toEqual([{ 'user': 'pebbles', 'active': true }])
})

test('illegal predicate', () => {
  expect(() => {
    dropWhile(users, 'a')
  }).toThrowError()
})