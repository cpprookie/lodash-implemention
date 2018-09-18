import ceil from '../ceil'

test('default zero precition', () => {
  expect(ceil(3.41)).toEqual(4)
})

test('positive precition', () => {
  expect(ceil(6.004, 2)).toEqual(6.01)
})

test('negetive precition', () => {
  expect(ceil(6040, -2)).toEqual(6100)
})
