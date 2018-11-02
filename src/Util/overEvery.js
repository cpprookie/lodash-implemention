export default iteratees => (...args) =>
  iteratees.reduce((res, func) => res && func(...args), true)
