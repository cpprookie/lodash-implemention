import forEach from './forEach'

export default (collection, iteratee) => {
  const res = {}
  const countBy = iteratee
    ? key => {
        const finalKey = iteratee(key)
        res[finalKey] ? res[finalKey]++ : (res[finalKey] = 1)
      }
    : key => {
        res[key] ? res[key]++ : (res[key] = 1)
      }
  forEach(collection, countBy)
  return res
}
