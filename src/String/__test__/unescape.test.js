import unescape from '../unescape'

test('&amp; turns to &', () => {
  expect(unescape('&amp;')).toEqual('&')
})

test('&lt; turns to <', () => {
  expect(unescape('&lt;')).toEqual('<')
})

test('&gt; turns to >', () => {
  expect(unescape('&gt;')).toEqual('>')
})

test('&qout; turns to "', () => {
  expect(unescape('&quot;')).toEqual('"')
})

test(" &#39; turns to ' ", () => {
  expect(unescape('&#39;')).toEqual("'")
})

test('unescape in paragraph', () => {
  expect(unescape('fred, barney, &amp; pebbles')).toEqual(
    'fred, barney, & pebbles'
  )
})
