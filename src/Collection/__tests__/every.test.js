import every from '../every'

test('every case | array', () => {
  expect(every([true, 1, null, 'yes'], item => !!item)).toEqual(false)
})

test('every case | object', () => {
  expect(every({ 0: 'a', 1: null, 2: 'true' }, item => !!item)).toEqual(false)
})
