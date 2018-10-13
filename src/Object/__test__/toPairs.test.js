import toPairs from '../toPairs'

const obj = {
  a: 1,
  b: 2
}

test('return key-value pairs', () => {
  expect(toPairs(obj)).toEqual([['a', 1], ['b', 2]])
})
