import replace from '../replace'

test('return modified string', () => {
  expect(replace('Hi CT', 'CT', '123')).toEqual('Hi 123')
})
