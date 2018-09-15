import toString from '../toString'

test('convert null', () => {
  expect(toString(null)).toEqual('')
})

test('conver -0', () => {
  expect(toString(-0)).toEqual('-0')
})

test('convert Array', () => {
  expect(toString([1, 2, 3])).toEqual('1,2,3')
})
