import isFunction from '../Lang/isFunction'

export default (func, ...arg) => {
  if (!isFunction(func)) {
    throw new Error('attempt must take function as param!')
  }
  let res
  try {
    res = func(...arg)
  } catch (e) {
    res = e
  }
  return res
}
