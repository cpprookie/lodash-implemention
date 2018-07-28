import unzip from '../unzip'

test('example case', () => {
  expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([
    ['a', 'b'],
    [1, 2],
    [true, false]
  ])
})

test('unequal member arrays case', () => {
  expect(unzip([['a', 1, true], ['b', 2, false, 'fsdfds']])).toEqual([
    ['a', 'b'],
    [1, 2],
    [true, false],
    [undefined, 'fsdfds']
  ])
})

test('multiple unequal member arrays case', () => {
  expect(
    unzip([
      ['a', 1, true, 'ha'],
      ['b', 2, false, 'fsdfds', 'jo'],
      ['c', 3, false]
    ])
  ).toEqual([
    ['a', 'b', 'c'],
    [1, 2, 3],
    [true, false, false],
    ['ha', 'fsdfds', undefined],
    [undefined, 'jo', undefined]
  ])
})
