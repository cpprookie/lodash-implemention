import escape from '../escape'

test('& turns to &amp;', () => {
  expect(escape('&')).toEqual('&amp;')
})

test('< turns to &lt;', () => {
  expect(escape('<')).toEqual('&lt;')
})

test('> turns to &gt;', () => {
  expect(escape('>')).toEqual('&gt;')
})

test('" turns to &qout;', () => {
  expect(escape('"')).toEqual('&quot;')
})

test(" ' turns to &#39;", () => {
  expect(escape("'")).toEqual('&#39;')
})

test('escape in paragraph', () => {
  expect(escape('fred, barney, & pebbles')).toEqual(
    'fred, barney, &amp; pebbles'
  )
})
