import trimStart from '../trimStart'

test('trim word start blank', () => {
  expect(trimStart('   abc   ')).toEqual('abc   ')
})

test('trim word start with given chars', () => {
  expect(trimStart('-_-abc-_-', '-_-')).toEqual('abc-_-')
})
