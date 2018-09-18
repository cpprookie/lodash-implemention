import round from '../round'

test('default zero precition', () => {
  expect(round(3.41)).toEqual(3)
})

test('positive precition', () => {
  expect(round(4.006, 2)).toEqual(4.01)
})

test('negetive precition', () => {
  expect(round(4060, -2)).toEqual(4100)
})
