export default val =>
  typeof val === 'object' &&
  (val.constructor === Object || Object.getPrototypeOf(val) === null)
