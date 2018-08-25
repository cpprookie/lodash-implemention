import defer from '../defer'

const arr = []

const testCase = new Promise(resolve => {
  defer(() => {
    arr.push(2)
    resolve()
  })
  arr.push(1)
})

test('defer test', () => {
  return testCase.then(data => {
    expect(arr).toEqual([1, 2])
  })
})
