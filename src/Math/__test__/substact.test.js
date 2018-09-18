import substract from '../substract'

test('number substract string', () => {
  expect(substract(4, '2')).toEqual(2)
})
