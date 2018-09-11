export default val =>
  Object.prototype.toString.call(val).includes('Array') &&
  Object.prototype.toString.call(val) !== '[object Array]'
