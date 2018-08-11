import groupBy from '../groupBy'

test('groupBy test | array', () => {
  expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
    '4': [4.2],
    '6': [6.1, 6.3]
  })
})

test('groupBy test | object', () => {
  expect(
    groupBy({ a: 'one', b: 'two', c: 'three' }, str => str.length)
  ).toEqual({ '3': ['one', 'two'], '5': ['three'] })
})
