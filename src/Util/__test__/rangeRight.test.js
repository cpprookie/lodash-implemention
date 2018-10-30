import rangeRight from '../rangeRight'

test('throw error if pass other types', () => {
  expect(() => {
    rangeRight('6')
  }).toThrowError()
})

test('return empty when recieve nothing', () => {
  expect(rangeRight()).toEqual([])
})

test('return empty when param is 0', () => {
  expect(rangeRight(0)).toEqual([])
})

test('return 0 to 3 when param is 4', () => {
  expect(rangeRight(4)).toEqual([3, 2, 1, 0])
})

test('return 0 to -3 when param is -4', () => {
  expect(rangeRight(-4)).toEqual([-3, -2, -1, 0])
})

test('return 0 to 3 when param is 0, 4', () => {
  expect(rangeRight(0, 4)).toEqual([3, 2, 1, 0])
})

test('return 0 to -3 when param is 0, -4', () => {
  expect(rangeRight(0, -4)).toEqual([-3, -2, -1, 0])
})

test('return empty array when step cannot satisty start and end', () => {
  expect(rangeRight(0, 4, -1)).toEqual([])
})

test('return empty array when step is 0', () => {
  expect(rangeRight(0, 20, 0)).toEqual([])
})

test('return right result for params are 0 20 5', () => {
  expect(rangeRight(0, 20, 5)).toEqual([15, 10, 5, 0])
})

test('return right result for params are 0 20 6', () => {
  expect(rangeRight(0, 20, 6)).toEqual([18, 12, 6, 0])
})
