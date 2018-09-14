import isArray from './isArray'

export default function(val) {
  if (isArray(val)) return val
  if (val === undefined && arguments.length === 0) {
    return []
  }
  return [val]
}
