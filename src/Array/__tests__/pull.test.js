const pull = require('../pull')

let arr = ['a', 'b', 'c', 'a', 'c']
test('single comparison', () => {
  expect(pull(arr, 'c')).toEqual(['a', 'b', 'a'])
})

test('multiple comparisons', () => {
  expect(pull(arr, 'a', 'c')).toEqual(['b'])
})
