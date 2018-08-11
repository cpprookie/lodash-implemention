import findLast from '../findLast'

test('findLast test | array', () => {
  expect(findLast([1, 2, 3, 4], n => n % 2 == 1)).toEqual(3)
})

test('findLast test | object', () => {
  expect(findLast({ 0: 1, 1: 2, 2: 3, 3: 4 }, n => n % 2 == 1)).toEqual(3)
})
