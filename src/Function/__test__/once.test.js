import once from '../once'
let a = 0

test('once test', () => {
  expect(
    (function() {
      const func = once(a => a++)
      func(a)
      func(a)
      return func(a)
    })()
  ).toEqual(0)
})
