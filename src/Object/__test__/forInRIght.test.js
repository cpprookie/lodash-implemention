import forInRight from '../forInRight'
const obj = { a: 1, b: 2 }

test('double object attribute', () => {
  forInRight(obj, v => console.log(v))
})
