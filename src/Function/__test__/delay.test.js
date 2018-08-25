import delay from '../delay'
import defer from '../defer'

const arr = []

const testCase = new Promise(resolve => {
  delay(
    a => {
      arr.push(a)
      resolve()
    },
    1000,
    3
  )
  defer(() => {
    arr.push(2)
  })
  arr.push(1)
})

test('delay test', () => {
  return testCase.then(data => {
    expect(arr).toEqual([1, 2, 3])
  })
})
