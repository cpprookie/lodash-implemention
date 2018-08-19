// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
export default collection => {
  if (typeof collection !== 'object') {
    throw new Error('Illegal param in shuffle')
  }
  const keys = Object.keys(collection)
  for (let i = keys.length - 1; i > 0; i--) {
    const key = keys[Math.floor(Math.random() * (i + 1))]
    const temp = collection[i]
    collection[i] = collection[key]
    collection[key] = temp
  }
  return collection
}
