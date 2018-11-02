export default iteratees => (...args) => iteratees.map(func => func(...args))
