export default (n, iteratee = a => a) =>
  Array(n)
    .fill(null)
    .map((e, i) => iteratee(i))
