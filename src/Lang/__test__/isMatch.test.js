import isMatch from '../isMatch'

const object = { a: 1, b: 2 }

test('official fasle case', () => {
  expect(isMatch(object, { b: 1 })).toEqual(false)
})

const obj1 = {
  a: {
    b: {
      c: 2
    }
  }
}

const obj2 = {
  a: {
    b: {
      c: 2,
      d: 3
    },
    e: 3
  }
}

const obj3 = {
  a: {
    b: {
      c: 1,
      d: 3
    },
    e: 3
  }
}

test('test case that nested deeply', () => {
  expect(isMatch(obj2, obj1)).toEqual(true)
})

test('test case that nested deeply', () => {
  expect(isMatch(obj3, obj1)).toEqual(false)
})
