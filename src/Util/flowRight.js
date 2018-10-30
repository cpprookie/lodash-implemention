export default (...funcs) => (...arg) =>
  funcs.reduceRight(
    (res, func, i) => (i === funcs.length - 1 ? func(...res) : func(res)),
    arg
  )
