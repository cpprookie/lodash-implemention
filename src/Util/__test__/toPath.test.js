import toPath from '../toPath'

test('return empty array for nil', () => {
  expect(toPath(undefined)).toEqual([])
})

test('return Object.tostring for object', () => {
  expect(toPath({})).toEqual(['object Object'])
})

test('split string into array for dot', () => {
  expect(toPath('a.b.c')).toEqual(['a', 'b', 'c'])
})

test('work for property accessor', () => {
  expect(toPath('a[0].b.c')).toEqual(['a', '0', 'b', 'c'])
})
