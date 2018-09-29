import truncate from '../truncate'

test('truncate with default option', () => {
  expect(truncate('hi-diddly-ho there, neighborino')).toEqual(
    'hi-diddly-ho there, neighbo...'
  )
})

test('truncate with custom omission', () => {
  expect(
    truncate('hi-diddly-ho there, neighborino', {
      omission: ' [...]'
    })
  ).toEqual('hi-diddly-ho there, neig [...]')
})

test('truncate with separator', () => {
  expect(
    truncate('hi-diddly-ho there, neighborino', {
      length: 24,
      separator: ' '
    })
  ).toEqual('hi-diddly-ho there,...')
})
