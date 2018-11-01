import matches from '../matches'

const object = { a: 1, b: 2, c: 3 }

test('simple passed match test', () => {
  expect(matches({ a: 1, c: 3 })(object)).toEqual(true)
})

test('simple unpassed match test', () => {
  expect(matches({ a: 4, c: 3 })(object)).toEqual(false)
})
