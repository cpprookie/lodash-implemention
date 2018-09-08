export const isType = type => value =>
  value && Object.prototype.toString.apply(value) === `[object ${type}]`
