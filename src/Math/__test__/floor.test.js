import floor from '../floor'

test('default zero precition', () => {
  expect(floor(3.41)).toEqual(3)
})

test('positive precition', () => {
  expect(floor(0.046, 2)).toEqual(0.04)
})

test('negetive precition', () => {
  expect(floor(4060, -2)).toEqual(4000)
})
