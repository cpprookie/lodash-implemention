import functions from '../functions'
import { FuncTest } from './testVariable'

test('only return own function type property', () => {
  expect(functions(new FuncTest())).toEqual(['b'])
})
