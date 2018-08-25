import memoize from '../memoize'

const object = { a: 1, b: 2 }

test('memoize test | output', () => {
  expect(memoize(o => Object.keys(o).map(k => o[k]))(object)).toEqual([1, 2])
})

test('memoize test | cache', () => {
  expect(
    (function() {
      const values = memoize(o => Object.keys(o).map(k => o[k]))
      values(object)
      values.cache.set(object, ['a', 'b'])
      return values(object)
    })()
  ).toEqual(['a', 'b'])
})
