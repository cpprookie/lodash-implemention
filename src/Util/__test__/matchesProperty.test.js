import matchesProperty from '../matchesProperty'

const foo = { a: 4, b: 5, c: 6 }

test('simple passed path case', () => {
  expect(matchesProperty('a', 4)(foo)).toEqual(true)
})

const deep = {
  a: [
    {
      b: {
        c: 3,
        d: 2
      }
    }
  ]
}

test('deeply nested path unpassed case', () => {
  expect(matchesProperty('a[0].b', { c: 5 })(deep)).toEqual(false)
})

test('deeply nested path passed case', () => {
  expect(matchesProperty('a[0].b', { c: 3 })(deep)).toEqual(true)
})
