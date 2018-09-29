import trimEnd from '../trimEnd'

test('trim word end with blank', () => {
  expect(trimEnd('   abc   ')).toEqual('   abc')
})

test('trim word end with given chars', () => {
  expect(trimEnd('-_-abc-_-', '-_-')).toEqual('-_-abc')
})
