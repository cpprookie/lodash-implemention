import minBy from '../minBy'

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

test('should return undefined for empty array', () => {
  expect(minBy([])).toEqual(undefined)
})

test('return minBy one in the array', () => {
  expect(minBy(objects, o => o.n)).toEqual({ n: 2 })
})
