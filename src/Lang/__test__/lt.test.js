import lt from '../lt'

test('should return true for 1 less than 2', () => {
  expect(lt(1, 2)).toEqual(true)
})

test('should return true for "2" and "1"', () => {
  expect(lt('1', '2')).toEqual(true)
})
