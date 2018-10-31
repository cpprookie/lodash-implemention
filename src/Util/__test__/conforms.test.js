import conforms from '../conforms'

const objects = [{ a: 2, b: 1 }, { a: 1, b: 2 }]

test('official case', () => {
  expect(objects.map(conforms({ b: b => b > 1 }))).toEqual([false, true])
})

test('predicate has multiple properties', () => {
  expect(
    objects.map(
      conforms({
        a: a => a > 1,
        b: b => b > 1
      })
    )
  ).toEqual([false, false])
})

test('object does not contains predicate property', () => {
  expect(
    objects.map(
      conforms({
        a: a => a > 1,
        b: b => b > 1,
        c: c => c > 1
      })
    )
  ).toEqual([false, false])
})
