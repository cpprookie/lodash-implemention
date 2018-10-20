import functionsIn from '../functionsIn'
import { FuncTest } from './testVariable'

test('only return own and inherited function type property', () => {
  expect(functionsIn(new FuncTest())).toEqual(['b', 'd'])
})
