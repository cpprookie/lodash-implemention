import { isType } from './util'
export default val => typeof val === 'string' || isType('String')(val)
