import some from '../some'

test('some test | simple type', () => {
  expect(
    some([null, 0, 'yes', false], item => typeof item === 'boolean')
  ).toEqual(true)
})

test('some test | object type', () => {
  expect(
    some(
      [{ user: 'barney', active: true }, { user: 'fred', active: false }],
      item => item.active
    )
  ).toEqual(true)
})
