import isArguments from '../isArguments'

test('should return false when pass array', () => {
  expect(isArguments([1, 2])).toEqual(false)
})

test('should return true when pass arguments', () => {
  expect(
    isArguments(
      (function() {
        return arguments
      })()
    )
  ).toEqual(true)
})
