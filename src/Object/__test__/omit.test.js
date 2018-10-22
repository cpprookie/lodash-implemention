import omit from '../omit'

const object = { a: 1, b: '2', c: 3 }

test('omit property not exited in param', () => {
  expect(omit(object, ['a', 'c'])).toEqual({ b: '2' })
})
