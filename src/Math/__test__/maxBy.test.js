import maxBy from '../maxBy'

const objects = [{ n: 1 }, { n: 2 }]

test('should return object has value 2 for key n ', () => {
  expect(maxBy(objects, o => o.n)).toEqual({ n: 2 })
})
