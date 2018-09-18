import sumBy from '../sumBy'

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

test('should return undefined for empty array', () => {
  expect(sumBy([])).toEqual(undefined)
})

test('return sumBy one in the array', () => {
  expect(sumBy(objects, o => o.n)).toEqual(20)
})
