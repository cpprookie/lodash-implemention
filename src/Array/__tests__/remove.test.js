const remove = require('../remove')

let array = [1,2,3,4]

test('example case', () => {
  expect(remove(array, n => n % 2 === 0)).toEqual([2,4])
})