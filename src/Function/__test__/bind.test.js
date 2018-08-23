import bind from '../bind'

const obj = { user: 'fred' }

test('bind test', () => {
  expect(
    bind(
      obj,
      function(greeting, punctuation) {
        return `${greeting} ${this.user}${punctuation}`
      },
      'hi'
    )('!')
  ).toEqual('hi fred!')
})
