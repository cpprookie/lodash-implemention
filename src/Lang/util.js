export const isType = type => value =>
  Object.prototype.toString.apply(value) === `[object ${type}]`
