import overSome from '../overSome'

const isLargerThan = num => x => x > num
const isLargerThan2 = isLargerThan(2)
const isLargerThan3 = isLargerThan(3)
const isLargerThan4 = isLargerThan(4)

test('one passed case return true', () => {
  expect(overSome([isLargerThan2, isLargerThan3])(3)).toEqual(true)
})

test('no one passed case return false', () => {
  expect(overSome([isLargerThan4, isLargerThan3])(3)).toEqual(false)
})
