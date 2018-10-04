import forOwnRight from '../forOwnRight'
const obj = { a: 1, b: 2 }

test('double object attribute', () => {
  forOwnRight(obj, v => console.log(v))
})
