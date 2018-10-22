import omitBy from '../omitBy'

const object = { a: 1, b: '2', c: 3 }

test('omitBy property not exited in param', () => {
  expect(omitBy(object, ['a', 'c'], (k, v) => typeof v === 'number')).toEqual({
    b: '2'
  })
})

test('only add property that predicate return falsy', () => {
  expect(omitBy(object, ['a', 'c'], (k, v) => typeof v !== 'number')).toEqual(
    {}
  )
})
