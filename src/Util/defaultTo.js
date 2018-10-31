export default (val, defaultVal) =>
  [NaN, undefined, null].indexOf(val) > -1 ? defaultVal : val
