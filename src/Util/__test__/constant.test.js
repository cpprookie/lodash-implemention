import constant from '../constant'

const func = constant({ a: 1 })

test('should return true when compare constant return value', () => {
  expect(func() === func()).toEqual(true)
})
