import overEvery from '../overEvery'

const isLargerThan = num => x => x > num
const isLargerThan2 = isLargerThan(2)
const isLargerThan3 = isLargerThan(3)
const isLargerThan4 = isLargerThan(4)

test('all passed case', () => {
  expect(overEvery([isLargerThan2, isLargerThan3])(4)).toEqual(true)
})

test('one unpassed case and return false', () => {
  expect(overEvery([isLargerThan2, isLargerThan3, isLargerThan4])(4)).toEqual(
    false
  )
})
