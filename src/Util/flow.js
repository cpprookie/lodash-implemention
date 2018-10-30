export default (...funcs) => (...arg) =>
  funcs.reduce((res, func, i) => (i === 0 ? func(...res) : func(res)), arg)
