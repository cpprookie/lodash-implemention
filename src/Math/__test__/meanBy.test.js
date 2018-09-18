import meanBy from '../meanBy'

const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]

test('should return undefined for empty array', () => {
  expect(meanBy([])).toEqual(undefined)
})

test('return meanBy one in the array', () => {
  expect(meanBy(objects, o => o.n)).toEqual(5)
})
