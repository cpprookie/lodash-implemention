import bindKey from '../bindKey'

const obj = {
  user: 'fred',
  greeting: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation
  }
}

test('bindKey test', () => {
  expect(bindKey(obj, 'greeting', 'hi')('!')).toEqual('hi fred!')
})
