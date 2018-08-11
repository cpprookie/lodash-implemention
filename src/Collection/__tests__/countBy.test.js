import countBy from '../countBy'

test('math floor | array', () => {
  expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 })
})

test('math floor | object', () => {
  expect(countBy({ 0: 6.1, 1: 4.2, 2: 6.3 }, Math.floor)).toEqual({
    '4': 1,
    '6': 2
  })
})

test('illegal input', () => {
  expect(countBy({ 0: 6.1, 1: 4.2, 2: 6.3, 3: () => {} }, Math.floor)).toEqual({
    '4': 1,
    '6': 2,
    NaN: 1
  })
})
