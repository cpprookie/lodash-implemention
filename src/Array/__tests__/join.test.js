const join = require('../join')

test('join case', () => {
  expect(join([1,2,3], '-')).toEqual('1-2-3')
})

test('undefined seperator', () => {
  expect(join([1,2,3])).toEqual('123')
})