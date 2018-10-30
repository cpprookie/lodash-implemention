import uniqueId from '../uniqueId'

test('should return ', () => {
  expect([uniqueId(), uniqueId(), uniqueId()]).toEqual([1, 2, 3])
})

test('append prefix', () => {
  expect([uniqueId(), uniqueId('_un')]).toEqual([4, '_un5'])
})
