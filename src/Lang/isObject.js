export default val =>
  [
    '[object Object]',
    '[object Function]',
    '[object Array]',
    '[object Number]',
    '[object String]',
    '[object RegExp]'
  ].indexOf(Object.prototype.toString.call(val)) > -1
