import drop from '../drop'

test('undefined index', () => {
  expect(drop([1, 2, 3])).toEqual([1, 2, 3])
})

test('small index', () => {
  expect(drop([1, 2, 3], 1)).toEqual([2, 3])
})

test('index out of range', () => {
  expect(drop([1, 2, 3], 5)).toEqual([])
})
