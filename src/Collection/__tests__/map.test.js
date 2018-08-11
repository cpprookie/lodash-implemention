import map from '../map.js'

function square(n) {
  return n * n
}

test('map test | array', () => {
  expect(map([4, 8], square)).toEqual([16, 64])
})

test('map test | object', () => {
  expect(map({ a: 4, b: 8 }, square)).toEqual([16, 64])
})
