import range from '../range'

test('throw error if pass other types', () => {
  expect(() => {
    range('6')
  }).toThrowError()
})

test('return empty when recieve nothing', () => {
  expect(range()).toEqual([])
})

test('return empty when param is 0', () => {
  expect(range(0)).toEqual([])
})

test('return 0 to 3 when param is 4', () => {
  expect(range(4)).toEqual([0, 1, 2, 3])
})

test('return 0 to -3 when param is -4', () => {
  expect(range(-4)).toEqual([0, -1, -2, -3])
})

test('return 0 to 3 when param is 0, 4', () => {
  expect(range(0, 4)).toEqual([0, 1, 2, 3])
})

test('return 0 to -3 when param is 0, -4', () => {
  expect(range(0, -4)).toEqual([0, -1, -2, -3])
})

test('return empty array when step cannot satisty start and end', () => {
  expect(range(0, 4, -1)).toEqual([])
})

test('return empty array when step is 0', () => {
  expect(range(0, 20, 0)).toEqual([])
})

test('return right result for params are 0 20 5', () => {
  expect(range(0, 20, 5)).toEqual([0, 5, 10, 15])
})

test('return right result for params are 0 20 6', () => {
  expect(range(0, 20, 6)).toEqual([0, 6, 12, 18])
})
